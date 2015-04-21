angular.module('starter.controllers', ['ngCordova','ngSanitize','pascalprecht.translate'])

//config language of application
.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
        $translateProvider.translations('en', {
           
            Contact_us_side_menu: "Contact us",
            Advertisement_side_menu: "Announcement",
            Emergency_call_side_menu: "Emergency Call",
            History_side_menu: "History",
            Map_Schedule_side_menu: "Map Schedule",
            Map_side_menu: "Map",
            Search_side_menu: "Search",
            Follow_us_on: "Follow us on",
            ScrollBottom: "Scroll",
            Find_Me: "Find Me",
            Start: "Start",
            To: "To",
            Description: "Description",
            Nearby_Places: "Nearby Places",
            Activities: "Activities",
            Transportation: "Transportation",
            Choose_flag: "Please select a flag to start",
            Time_estimate: "Time estimate",
            kilometers_away: "kilometers away",
            Price: "Price", 
            Normal_flag: "Normal Flag",
            Blue_flag: "Blue Flag",
            Orange_flag: "Orange Flag",
            Green_flag: "Green Flag",
            Yellow_flag: "Yellow Flag",
            Open_Noti: "Open Notification Service",
            Is_Scheduled: "Is Scheduled"



        });
        $translateProvider.translations('th', {
            
            Contact_us_side_menu: "ติดต่อเรา",
            Advertisement_side_menu: "ประกาศ",
            Emergency_call_side_menu: "โทรด่วนฉุกเฉิน",
            History_side_menu: "ประวัติเรือด่วน",
            Map_Schedule_side_menu: "ตารางเดินเรือ",
            Map_side_menu: "แผนที่",
            Search_side_menu: "ค้นหา",
            Follow_us_on: "ติดตามเราได้ที่",
            ScrollBottom: "เลื่อนลง",
            Find_Me: "ค้นหาตำแหน่งปัจจุบัน",
            Start: "ต้นทาง",
            To: "ปลายทาง",
            Description: "รายละเอียด",
            Nearby_Places: "สถานที่ใกล้เคียง",
            Activities: "กิจกรรม",
            Transportation: "ระบบขนส่งที่เชื่อมต่อ",
            Choose_flag: "กรุณาเลือกธง",
            Time_estimate: "เวลาโดยประมาณ",
            kilometers_away: "จะถึง",
            Price: "ราคา",
            Normal_flag: "เรือด่วนไม่มีธง",
            Blue_flag: "เรือด่วนธงฟ้า",
            Orange_flag: "เรือด่วนธงส้ม",
            Green_flag: "เรือด่วนธงเขียว",
            Yellow_flag: "เรือด่วนธงเหลือง",
            Open_Noti: "เปิดใช้งานแจ้งเตือน",
            Is_Scheduled: "เช็คการแจ้งเตือน"



        });
        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    })

//controller for map point page
.controller('SlideboxCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }             
})   



//controller for history page
.controller('HisCtrl', function($scope ,$ionicScrollDelegate, $location) {
  $scope.scrollMe = function(id) {
        $location.hash(id);
        $scope.delegateHandle = $ionicScrollDelegate.$getByHandle('content');
        $scope.delegateHandle.anchorScroll(id); 
        //$scope.delegateHandle.remove();
        id = null;

      };
})



//controller for settings page
.controller('SettingsCtrl', function($scope , $ionicSideMenuDelegate, $translate ,$location) {
    $scope.ChangeLanguage = function(lang){
    $translate.use(lang);
  }
    $scope.refresher = function(){
    $location.reload();
  }

})

//controller for emergency page
.controller('EmergencyCtrl', function($scope, $ionicScrollDelegate, filterFilter, $location, $anchorScroll) {
  var letters = $scope.letters = [];
  var contacts = $scope.contacts = [];
  var currentCharCode = ' '.charCodeAt(0) - 1;

  //window.CONTACTS is defined below
  window.CONTACTS
    .sort(function(a, b) {
      return a.last_name > b.last_name ? 1 : -1;
    })
    .forEach(function(person) {
      //Get the first letter of the last name, and if the last name changes
      //put the letter in the array
      var personCharCode = person.last_name.toUpperCase().charCodeAt(0);
      if (personCharCode < 65) {
         personCharCode = 35; 
      }
   
      //We may jump two letters, be sure to put both in
      //(eg if we jump from Adam Bradley to Bob Doe, add both C and D)
      var difference = personCharCode - currentCharCode;

      for (var i = 1; i <= difference; i++) {
        /*console.log(String.fromCharCode(currentCharCode));*/
        addLetter(currentCharCode + i);
      }
      currentCharCode = personCharCode;
      contacts.push(person);
    });

  //If names ended before Z, add everything up to Z
  for (var i = currentCharCode + 1; i <= 'Z'.charCodeAt(0); i++) {
    addLetter(i);
  }

  function addLetter(code) {
    var letter = String.fromCharCode(code);

    contacts.push({
      isLetter: true,
      letter: letter
    });
   
    letters.push(letter);
  }

  //Letters are shorter, everything else is 52 pixels
  $scope.getItemHeight = function(item) {
    return item.isLetter ? 40 : 100;
  };

  $scope.scrollBottom = function() {
    $ionicScrollDelegate.scrollBottom();
  };

  var letterHasMatch = {};
  $scope.getContacts = function() {
    letterHasMatch = {};
    //Filter contacts by $scope.search.
    //Additionally, filter letters so that they only show if there
    //is one or more matching contact
    return contacts.filter(function(item) {
      var itemDoesMatch = !$scope.search || item.isLetter ||
        item.first_name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1 ||
        item.last_name.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;

      //console.log(item.last_name.toString().charAt(0));
      
      //Mark this person's last name letter as 'has a match'
      if (!item.isLetter && itemDoesMatch) {

        var letter = item.last_name.charAt(0).toUpperCase();
        if ( item.last_name.charCodeAt(0) < 65 ){
          letter = "#";
        }
        letterHasMatch[letter] = true;
      }

      return itemDoesMatch;
    }).filter(function(item) {
      //Finally, re-filter all of the letters and take out ones that don't
      //have a match
      if (item.isLetter && !letterHasMatch[item.letter]) {
        return false;
      }
      return true;
    });
  };

  $scope.clearSearch = function() {
    $scope.search = '';
  };
})


//controller for main page
.controller('PopupCtrl',function($scope, $ionicPopup, $ionicModal, $interval, $cordovaLocalNotification) {
  

    //list of beginng pier
  $scope.Blist = [
    {id: 1, title: 'ท่าปากเกร็ด', value: "ท่าปากเกร็ด"},
    {id: 2, title: 'ท่าวัดกลางเกร็ด', value: "ท่าวัดกลางเกร็ด"},
    {id: 3, title: 'ท่ากระทรวงพาณิชย์', value: "ท่ากระทรวงพาณิชย์"},
    {id: 4, title: 'ท่านนทบุรี (พิบูลย์สงคราม 3)', value: "ท่านนทบุรี (พิบูลย์สงคราม 3)"},
    {id: 5, title: 'ท่าพระราม 5', value: "ท่าพระราม 5"},
    {id: 6, title: 'ท่าพิบูลย์สงคราม 2', value: "ท่าพิบูลย์สงคราม 2"},
    {id: 7, title: 'ท่าวัดเขียน', value: "ท่าวัดเขียน"},
    {id: 8, title: 'ท่าวัดตึก', value: "ท่าวัดตึก"},
    {id: 9, title: 'ท่าวัดเขมา', value: "ท่าวัดเขมา"},
    {id: 10, title: 'ท่าพิบูลย์สงคราม 1', value: "ท่าพิบูลย์สงคราม 1"},
    {id: 11, title: 'ท่าพระราม 7', value: "ท่าพระราม 7"},
    {id: 12, title: 'ท่าวัดสร้อยทอง', value: "ท่าวัดสร้อยทอง"},
    {id: 13, title: 'ท่าบางโพ', value: "ท่าบางโพ"},
    {id: 14, title: 'ท่าเกียกกาย', value: "ท่าเกียกกาย"},
    {id: 15, title: 'ท่าเขียวไก่กา', value: "ท่าเขียวไก่กา"},
    {id: 16, title: 'ท่ากรมชลประทาน', value: "ท่ากรมชลประทาน"},
    {id: 17, title: 'ท่าพายัพ', value: "ท่าพายัพ"},
    {id: 18, title: 'ท่าวัดเทพากร', value: "ท่าวัดเทพากร"},
    {id: 19, title: 'ท่าวัดเทพนารี', value: "ท่าวัดเทพนารี"},
    {id: 20, title: 'ท่าสะพานกรุงธน (ซังฮี้)', value: "ท่าสะพานกรุงธน (ซังฮี้)"},
    {id: 21, title: 'ท่าเทเวศร์', value: "ท่าเทเวศร์"},
    {id: 22, title: 'ท่าพระราม 8', value: "ท่าพระราม 8"},
    {id: 23, title: 'ท่าพระอาทิตย์', value: "ท่าพระอาทิตย์"},
    {id: 24, title: 'ท่าพระปิ่นเกล้า', value: "ท่าพระปิ่นเกล้า"},
    {id: 25, title: 'ท่ารถไฟ', value: "ท่ารถไฟ"},
    {id: 26, title: 'ท่าวังหลัง (พรานนก)', value: "ท่าวังหลัง (พรานนก)"},
    {id: 27, title: 'ท่ามหาราช', value: "ท่ามหาราช"},
    {id: 28, title: 'ท่าช้าง', value: "ท่าช้าง"},
    {id: 29, title: 'ท่าเตียน', value: "ท่าเตียน"},
    {id: 30, title: 'ท่าราชินี', value: "ท่าราชินี"},
    {id: 31, title: 'ท่าสะพานพุทธ', value: "ท่าสะพานพุทธ"},
    {id: 32, title: 'ท่าราชวงศ์', value: "ท่าราชวงศ์"},
    {id: 33, title: 'ท่ากรมเจ้าท่า', value: "ท่ากรมเจ้าท่า"},
    {id: 34, title: 'ท่าสี่พระยา', value: "ท่าสี่พระยา"},
    {id: 35, title: 'ท่าวัดม่วงแค', value: "ท่าวัดม่วงแค"},
    {id: 36, title: 'ท่าโอเรียนเท็ล', value: "ท่าโอเรียนเท็ล"},
    {id: 37, title: 'ท่าสาทร (ตากสิน)', value: "ท่าสาทร (ตากสิน)"},
    {id: 38, title: 'ท่าวัดเศวตฉัตร', value: "ท่าวัดเศวตฉัตร"},
    {id: 39, title: 'ท่าวัดวธจรรยาวาส', value: "ท่าวัดวธจรรยาวาส"},
    {id: 40, title: 'ท่าวัดราชสิงขร', value: "ท่าวัดราชสิงขร"},
    {id: 41, title: 'ท่าราษฎร์บูรณะ (บิ๊กซี)', value: "ท่าราษฎร์บูรณะ (บิ๊กซี)"}
  ];
    //list of destination pier
  $scope.Dlist = [
    {id: 1, title: 'ท่าปากเกร็ด', value: "ท่าปากเกร็ด"},
    {id: 2, title: 'ท่าวัดกลางเกร็ด', value: "ท่าวัดกลางเกร็ด"},
    {id: 3, title: 'ท่ากระทรวงพาณิชย์', value: "ท่ากระทรวงพาณิชย์"},
    {id: 4, title: 'ท่านนทบุรี (พิบูลย์สงคราม 3)', value: "ท่านนทบุรี (พิบูลย์สงคราม 3)"},
    {id: 5, title: 'ท่าพระราม 5', value: "ท่าพระราม 5"},
    {id: 6, title: 'ท่าพิบูลย์สงคราม 2', value: "ท่าพิบูลย์สงคราม 2"},
    {id: 7, title: 'ท่าวัดเขียน', value: "ท่าวัดเขียน"},
    {id: 8, title: 'ท่าวัดตึก', value: "ท่าวัดตึก"},
    {id: 9, title: 'ท่าวัดเขมา', value: "ท่าวัดเขมา"},
    {id: 10, title: 'ท่าพิบูลย์สงคราม 1', value: "ท่าพิบูลย์สงคราม 1"},
    {id: 11, title: 'ท่าพระราม 7', value: "ท่าพระราม 7"},
    {id: 12, title: 'ท่าวัดสร้อยทอง', value: "ท่าวัดสร้อยทอง"},
    {id: 13, title: 'ท่าบางโพ', value: "ท่าบางโพ"},
    {id: 14, title: 'ท่าเกียกกาย', value: "ท่าเกียกกาย"},
    {id: 15, title: 'ท่าเขียวไก่กา', value: "ท่าเขียวไก่กา"},
    {id: 16, title: 'ท่ากรมชลประทาน', value: "ท่ากรมชลประทาน"},
    {id: 17, title: 'ท่าพายัพ', value: "ท่าพายัพ"},
    {id: 18, title: 'ท่าวัดเทพากร', value: "ท่าวัดเทพากร"},
    {id: 19, title: 'ท่าวัดเทพนารี', value: "ท่าวัดเทพนารี"},
    {id: 20, title: 'ท่าสะพานกรุงธน (ซังฮี้)', value: "ท่าสะพานกรุงธน (ซังฮี้)"},
    {id: 21, title: 'ท่าเทเวศร์', value: "ท่าเทเวศร์"},
    {id: 22, title: 'ท่าพระราม 8', value: "ท่าพระราม 8"},
    {id: 23, title: 'ท่าพระอาทิตย์', value: "ท่าพระอาทิตย์"},
    {id: 24, title: 'ท่าพระปิ่นเกล้า', value: "ท่าพระปิ่นเกล้า"},
    {id: 25, title: 'ท่ารถไฟ', value: "ท่ารถไฟ"},
    {id: 26, title: 'ท่าวังหลัง (พรานนก)', value: "ท่าวังหลัง (พรานนก)"},
    {id: 27, title: 'ท่ามหาราช', value: "ท่ามหาราช"},
    {id: 28, title: 'ท่าช้าง', value: "ท่าช้าง"},
    {id: 29, title: 'ท่าเตียน', value: "ท่าเตียน"},
    {id: 30, title: 'ท่าราชินี', value: "ท่าราชินี"},
    {id: 31, title: 'ท่าสะพานพุทธ', value: "ท่าสะพานพุทธ"},
    {id: 32, title: 'ท่าราชวงศ์', value: "ท่าราชวงศ์"},
    {id: 33, title: 'ท่ากรมเจ้าท่า', value: "ท่ากรมเจ้าท่า"},
    {id: 34, title: 'ท่าสี่พระยา', value: "ท่าสี่พระยา"},
    {id: 35, title: 'ท่าวัดม่วงแค', value: "ท่าวัดม่วงแค"},
    {id: 36, title: 'ท่าโอเรียนเท็ล', value: "ท่าโอเรียนเท็ล"},
    {id: 37, title: 'ท่าสาทร (ตากสิน)', value: "ท่าสาทร (ตากสิน)"},
    {id: 38, title: 'ท่าวัดเศวตฉัตร', value: "ท่าวัดเศวตฉัตร"},
    {id: 39, title: 'ท่าวัดวธจรรยาวาส', value: "ท่าวัดวธจรรยาวาส"},
    {id: 40, title: 'ท่าวัดราชสิงขร', value: "ท่าวัดราชสิงขร"},
    {id: 41, title: 'ท่าราษฎร์บูรณะ (บิ๊กซี)', value: "ท่าราษฎร์บูรณะ (บิ๊กซี)"}
  ];

  
  $scope.data = {
    Blist: ''
  };
        //call popup flag filter
  $ionicModal.fromTemplateUrl('templates/popup/Flag.html', {
        id: '999',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.popflag = modal;
      });


      //Manage about geolocation
      $scope.lat = 0;
      $scope.lng = 0;
      $scope.latbegin = 0;
      $scope.lngbegin = 0;
      $scope.accuracy = "0";
      $scope.error = "";
      $scope.Math = window.Math
      $scope.diff = 0;

      //set about geolocation value
      $scope.showPosition = function (position){
       $scope.lat = position.coords.latitude;
       $scope.lng = position.coords.longitude;
       $scope.accuracy = position.coords.accuracy;
       $scope.latbegin = window.localStorage.getItem("latbegin");
       $scope.lngbegin = window.localStorage.getItem("lngbegin");
       $scope.getDistance();
       $scope.$apply();
      }
      $scope.showResult = function () {
            return $scope.error == "";
        }
      $scope.showError = function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $scope.error = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    $scope.error = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    $scope.error = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    $scope.error = "An unknown error occurred."
                    break;
            }
            $scope.$apply();
        }
        
      //get geolocation value    
      $scope.getLocation = function () {
            $interval(function() {       
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError); 
                $window.location.reload();         
              }
            else {
                $scope.error = "Geolocation is not supported by this browser.";
              }}, 500)
              }
          



        //Calculate distance between current location and each per 
      $scope.getDistance = function() {
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latbegin)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngbegin)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latbegin)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diff  = $scope.R * $scope.c; // Distance in km 
          }
      

        //open popup and filter flag
      $scope.popopenflag = function(index) {
          $scope.begin = document.getElementById("input1").value;
          $scope.dest = document.getElementById("input2").value;
       

          if($scope.begin == "ท่าปากเกร็ด" && $scope.dest == "ท่าวัดกลางเกร็ด")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                //$scope.getLocation(); 
                
                $scope.latbegin = 13.905270;
                $scope.lngbegin = 100.491325;
                window.localStorage.setItem("latbegin",$scope.latbegin);
                window.localStorage.setItem("lngbegin",$scope.lngbegin);

                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 3 minutes",
                  distance: 1.17,
                  name: 'Green',
                  price: 10,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          
              
          }
          else if($scope.begin == "ท่าวัดกลางเกร็ด" && $scope.dest == "ท่าปากเกร็ด"){
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                $scope.latbegin = 13.915332;
                $scope.lngbegin = 100.494624;
                window.localStorage.setItem("latbegin",$scope.latbegin);
                window.localStorage.setItem("lngbegin",$scope.lngbegin);

                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 3 minutes",
                  distance: 1.17,
                  name: 'Green',
                  price: 10,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }


          else if($scope.begin == "ท่าปากเกร็ด" && $scope.dest == "ท่ากระทรวงพาณิชย์" || $scope.dest == "ท่ากระทรวงพาณิชย์" && $scope.begin == "ท่าปากเกร็ด")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                //$scope.getLocation(); 
                
                $scope.latbegin = 13.883051;
                $scope.lngbegin = 100.484511;
                window.localStorage.setItem("latbegin",$scope.latbegin);
                window.localStorage.setItem("lngbegin",$scope.lngbegin);


                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 10 minutes",
                  distance: 3.75,
                  name: 'Green',
                  price: 10,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });

                
          }
          else if($scope.begin == "ท่ากระทรวงพาณิชย์" && $scope.dest == "ท่าปากเกร็ด")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                //$scope.getLocation(); 
                
                $scope.latbegin = 13.915332;
                $scope.lngbegin = 100.494624;
                window.localStorage.setItem("latbegin",$scope.latbegin);
                window.localStorage.setItem("lngbegin",$scope.lngbegin);


                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 10 minutes",
                  distance: 3.75,
                  name: 'Green',
                  price: 10,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });

                
          }
          else if(begin == "ท่ากระทรวงพาณิชย์")
          {
            var beginID = 3;
          }
          else if(begin == "ท่านนทบุรี (พิบูลย์สงคราม 3)")
          {
            var beginID = 4;
          }
          else if(begin == "ท่าพระราม 5")
          {
            var beginID = 5;
          }
          else if(begin == "ท่าพิบูลย์สงคราม 2")
          {
            var beginID = 6;
          }
          else if(begin == "ท่าวัดเขียน")
          {
            var beginID = 7;
          }
          else if(begin == "ท่าวัดตึก")
          {
            var beginID = 8;
          }
          else if(begin == "ท่าวัดเขมา")
          {
            var beginID = 9;
          }
          else if(begin == "ท่าพิบูลย์สงคราม 1")
          {
            var beginID = 10;
          }
          else if(begin == "ท่าพระราม 7")
          {
            var beginID = 11;
          }
          else if(begin == "ท่าวัดสร้อยทอง")
          {
            var beginID = 12;
          }
          else if(begin == "ท่าบางโพ")
          {
            var beginID = 13;
          }
          else if(begin == "ท่าเกียกกาย")
          {
            var beginID = 14;
          }
          else if(begin == "ท่าเขียวไก่กา")
          {
            var beginID = 15;
          }
          else if(begin == "ท่ากรมชลประทาน")
          {
            var beginID = 16;
          }
          else if(begin == "ท่าพายัพ")
          {
            var beginID = 17;
          }
          else if(begin == "ท่าวัดเทพากร")
          {
            var beginID = 18;
          }
          else if(begin == "ท่าวัดเทพนารี")
          {
            var beginID = 19;
          }
          else if(begin == "ท่าสะพานกรุงธน (ซังฮี้)")
          {
            var beginID = 20;
          }
          else if(begin == "ท่าเทเวศร์")
          {
            var beginID = 21;
          }
          else if(begin == "ท่าพระราม 8")
          {
            var beginID = 22;
          }
          else if(begin == "ท่าพระอาทิตย์")
          {
            var beginID = 23;
          }
          else if(begin == "ท่าพระปิ่นเกล้า")
          {
            var beginID = 24;
          }
          else if(begin == "ท่ารถไฟ")
          {
            var beginID = 25;
          }
          else if(begin == "ท่าวังหลัง (พรานนก)")
          {
            var beginID = 26;
          }
          else if(begin == "ท่ามหาราช")
          {
            var beginID = 27;
          }
          else if(begin == "ท่าช้าง")
          {
            var beginID = 28;
          }
          else if(begin == "ท่าเตียน")
          {
            var beginID = 29;
          }
          else if(begin == "ท่าราชินี")
          {
            var beginID = 30;
          }
          else if(begin == "ท่าสะพานพุทธ")
          {
            var beginID = 31;
          }
          else if(begin == "ท่าราชวงศ์")
          {
            var beginID = 32;
          }
          else if(begin == "ท่ากรมเจ้าท่า")
          {
            var beginID = 33;
          }
          else if(begin == "ท่าสี่พระยา")
          {
            var beginID = 34;
          }
          else if(begin == "ท่าวัดม่วงแค")
          {
            var beginID = 35;
          }
          else if(begin == "ท่าโอเรียนเท็ล")
          {
            var beginID = 36;
          }
          else if(begin == "ท่าสาทร (ตากสิน)")
          {
            var beginID = 37;
          }
          else if(begin == "ท่าวัดเศวตฉัตร")
          {
            var beginID = 38;
          }
          else if(begin == "ท่าวัดวธจรรยาวาส")
          {
            var beginID = 39;
          }
          else if(begin == "ท่าวัดราชสิงขร")
          {
            var beginID = 40;
          }
          else if(begin == "ท่าราษฎร์บูรณะ (บิ๊กซี)")
          {
            var beginID = 41;
          }

          else if(dest == "ท่าปากเกร็ด")
          {
            var destID = 1;
          }
          else if(dest == "ท่าวัดกลางเกร็ด")
          {
            var destID = 2;
          }
          else if(dest == "ท่ากระทรวงพาณิชย์")
          {
            var destID = 3;
          }
          else if(dest == "ท่านนทบุรี (พิบูลย์สงคราม 3)")
          {
            var destID = 4;
          }
          else if(dest == "ท่าพระราม 5")
          {
            var destID = 5;
          }
          else if(dest == "ท่าพิบูลย์สงคราม 2")
          {
            var destID = 6;
          }
          else if(dest == "ท่าวัดเขียน")
          {
            var destID = 7;
          }
          else if(dest == "ท่าวัดตึก")
          {
            var destID = 8;
          }
          else if(dest == "ท่าวัดเขมา")
          {
            var destID = 9;
          }
          else if(dest == "ท่าพิบูลย์สงคราม 1")
          {
            var destID = 10;
          }
          else if(dest == "ท่าพระราม 7")
          {
            var destID = 11;
          }
          else if(dest == "ท่าวัดสร้อยทอง")
          {
            var destID = 12;
          }
          else if(dest == "ท่าบางโพ")
          {
            var destID = 13;
          }
          else if(dest == "ท่าเกียกกาย")
          {
            var destID = 14;
          }
          else if(dest == "ท่าเขียวไก่กา")
          {
            var destID = 15;
          }
          else if(dest == "ท่ากรมชลประทาน")
          {
            var destID = 16;
          }
          else if(dest == "ท่าพายัพ")
          {
            var destID = 17;
          }
          else if(dest == "ท่าวัดเทพากร")
          {
            var destID = 18;
          }
          else if(dest == "ท่าวัดเทพนารี")
          {
            var destID = 19;
          }
          else if(dest == "ท่าสะพานกรุงธน (ซังฮี้)")
          {
            var destID = 20;
          }
          else if(dest == "ท่าเทเวศร์")
          {
            var destID = 21;
          }
          else if(dest == "ท่าพระราม 8")
          {
            var destID = 22;
          }
          else if(dest == "ท่าพระอาทิตย์")
          {
            var destID = 23;
          }
          else if(dest == "ท่าพระปิ่นเกล้า")
          {
            var destID = 24;
          }
          else if(dest == "ท่ารถไฟ")
          {
            var destID = 25;
          }
          else if(dest == "ท่าวังหลัง (พรานนก)")
          {
            var destID = 26;
          }
          else if(dest == "ท่ามหาราช")
          {
            var destID = 27;
          }
          else if(dest == "ท่าช้าง")
          {
            var destID = 28;
          }
          else if(dest == "ท่าเตียน")
          {
            var destID = 29;
          }
          else if(dest == "ท่าราชินี")
          {
            var destID = 30;
          }
          else if(dest == "ท่าสะพานพุทธ")
          {
            var destID = 31;
          }
          else if(dest == "ท่าราชวงศ์")
          {
            var destID = 32;
          }
          else if(dest == "ท่ากรมเจ้าท่า")
          {
            var destID = 33;
          }
          else if(dest == "ท่าสี่พระยา")
          {
            var destID = 34;
          }
          else if(dest == "ท่าวัดม่วงแค")
          {
            var destID = 35;
          }
          else if(dest == "ท่าโอเรียนเท็ล")
          {
            var destID = 36;
          }
          else if(dest == "ท่าสาทร (ตากสิน)")
          {
            var destID = 37;
          }
          else if(dest == "ท่าวัดเศวตฉัตร")
          {
            var destID = 38;
          }
          else if(dest == "ท่าวัดวธจรรยาวาส")
          {
            var destID = 39;
          }
          else if(dest == "ท่าวัดราชสิงขร")
          {
            var destID = 40;
          }
          else if(dest == "ท่าราษฎร์บูรณะ (บิ๊กซี)")
          {
            var destID = 41;
          }
          

      $scope.popflag.show();
      };


      //close popup
      $scope.popcloseflag = function(index) {
      $scope.popflag.hide();
      $scope.Plist.splice(index, 10);    
      };

      

      $scope.Plist = [
    ]
  localStorage.setItem('products', JSON.stringify($scope.Plist));

    
 

  //show list of beginning pier 
  $scope.showBegin = function(){  
   var Popup = $ionicPopup.show({
     template: '<ion-list>                              '+
               '<label class="item item-radio" ng-repeat="item in Blist">'+
               '<input type="radio" name="group" ng-model="data.Blist" ng-value="item.value">'+
               '<div class="item-content">{{ item.title }}</div>'+
               '<i class="radio-icon ion-checkmark"></i>'+
               '</label>'+
               '</ion-list>                             ', 
     title: 'Beginning Pier',
     scope: $scope,
     buttons: [
       { text: 'OK',
         type: 'button-positive',
         onTap: function() {
          return true;
        } 
    }]
   }); 
   
 } 

 //show list of destination pier 
 $scope.showDest = function(){
   var Popup = $ionicPopup.show({
     template: '<ion-list>                              '+
               '<label class="item item-radio" ng-repeat="item in Dlist">'+
               '<input type="radio" name="group" ng-model="data.Dlist" ng-value="item.value">'+
               '<div class="item-content">{{ item.title }}</div>'+
               '<i class="radio-icon ion-checkmark"></i>'+
               '</label>'+
               '</ion-list>                             ', 
     title: 'Destination Pier',
     scope: $scope,
     buttons: [
       { text: 'OK',
         type: 'button-positive',
         onTap: function() {
          return true;
        } 
    }]
   }); 
   
 }



    //add notification on destination
    $scope.add = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        $scope.getLocation().then(function () {
          alert("The notification has been set");
        });
    };

      
    
    //check set on notification 
    $scope.isScheduled = function() {
        $cordovaLocalNotification.isScheduled("1234").then(function(isScheduled) {
            alert("Notification set: " + isScheduled);
        });
    } 




    //check blinking on each pier 
    $scope.latpier = 0;
    $scope.lngpier = 0;
    $scope.diffforblinkt4 = 0;
    $scope.checkblinkt4 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpiert4",latpier);
            window.localStorage.setItem("lngpiert4",lngpier);
            $scope.latpier = window.localStorage.getItem("latpiert4");
            $scope.lngpier = window.localStorage.getItem("lngpiert4");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblinkt4  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyt4 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destt4)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblinkt3 = 0;
    $scope.checkblinkt3 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpiert3",latpier);
            window.localStorage.setItem("lngpiert3",lngpier);
            $scope.latpier = window.localStorage.getItem("latpiert3");
            $scope.lngpier = window.localStorage.getItem("lngpiert3");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblinkt3  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyt3 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destt3)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblinkt2 = 0;
    $scope.checkblinkt2 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpiert2",latpier);
            window.localStorage.setItem("lngpiert2",lngpier);
            $scope.latpier = window.localStorage.getItem("latpiert2");
            $scope.lngpier = window.localStorage.getItem("lngpiert2");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblinkt2  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyt2 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destt2)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblinkt1 = 0;
    $scope.checkblinkt1 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpiert1",latpier);
            window.localStorage.setItem("lngpiert1",lngpier);
            $scope.latpier = window.localStorage.getItem("latpiert1");
            $scope.lngpier = window.localStorage.getItem("lngpiert1");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblinkt1  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyt1 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destt1)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink33 = 0;
    $scope.checkblink33 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier33",latpier);
            window.localStorage.setItem("lngpier33",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier33");
            $scope.lngpier = window.localStorage.getItem("lngpier33");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink33  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn33 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn33)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink32 = 0;
    $scope.checkblink32 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier32",latpier);
            window.localStorage.setItem("lngpier32",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier32");
            $scope.lngpier = window.localStorage.getItem("lngpier32");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink32  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn32 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn32)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink31 = 0;
    $scope.checkblink31 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier31",latpier);
            window.localStorage.setItem("lngpier31",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier31");
            $scope.lngpier = window.localStorage.getItem("lngpier31");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink31  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn31 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn31)       
        alert("You have arrived your destination : " + $scope.dest);
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.1);
        $cordovaLocalNotification.add({
            id: "31",
            date: alarmTime,
            message: "You have arrived your destination : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });
    }


    $scope.diffforblink30 = 0;
    $scope.checkblink30 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier30",latpier);
            window.localStorage.setItem("lngpier30",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier30");
            $scope.lngpier = window.localStorage.getItem("lngpier30");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink30  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn30 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn30)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink29s = 0;
    $scope.checkblink29s = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier29s",latpier);
            window.localStorage.setItem("lngpier29s",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier29s");
            $scope.lngpier = window.localStorage.getItem("lngpier29s");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink29s  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn29s = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn29s)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink29 = 0;
    $scope.checkblink29 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier29",latpier);
            window.localStorage.setItem("lngpier29",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier29");
            $scope.lngpier = window.localStorage.getItem("lngpier29");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink29  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn29 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn29)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink28 = 0;
    $scope.checkblink28 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier28",latpier);
            window.localStorage.setItem("lngpier28",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier28");
            $scope.lngpier = window.localStorage.getItem("lngpier28");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink28  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn28 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn28)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink27 = 0;
    $scope.checkblink27 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier27",latpier);
            window.localStorage.setItem("lngpier27",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier27");
            $scope.lngpier = window.localStorage.getItem("lngpier27");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink27  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn27 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn27)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink26 = 0;
    $scope.checkblink26 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier26",latpier);
            window.localStorage.setItem("lngpier26",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier26");
            $scope.lngpier = window.localStorage.getItem("lngpier26");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink26  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn26 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn26)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink25 = 0;
    $scope.checkblink25 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier25",latpier);
            window.localStorage.setItem("lngpier25",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier25");
            $scope.lngpier = window.localStorage.getItem("lngpier25");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink25  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn25 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn25)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink24 = 0;
    $scope.checkblink24 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier24",latpier);
            window.localStorage.setItem("lngpier24",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier24");
            $scope.lngpier = window.localStorage.getItem("lngpier24");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink24  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn24 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn24)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink23 = 0;
    $scope.checkblink23 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier23",latpier);
            window.localStorage.setItem("lngpier23",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier23");
            $scope.lngpier = window.localStorage.getItem("lngpier23");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink23  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn23 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn23)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink22 = 0;
    $scope.checkblink22 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier22",latpier);
            window.localStorage.setItem("lngpier22",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier22");
            $scope.lngpier = window.localStorage.getItem("lngpier22");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink22  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn22 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn22)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink21 = 0;
    $scope.checkblink21 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier21",latpier);
            window.localStorage.setItem("lngpier21",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier21");
            $scope.lngpier = window.localStorage.getItem("lngpier21");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink21  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn21 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn21)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink20 = 0;
    $scope.checkblink20 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier20",latpier);
            window.localStorage.setItem("lngpier20",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier20");
            $scope.lngpier = window.localStorage.getItem("lngpier20");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink20  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn20 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn20)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink19 = 0;
    $scope.checkblink19 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier19",latpier);
            window.localStorage.setItem("lngpier19",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier19");
            $scope.lngpier = window.localStorage.getItem("lngpier19");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink19  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn19 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn19s)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink18 = 0;
    $scope.checkblink18 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier18",latpier);
            window.localStorage.setItem("lngpier18",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier18");
            $scope.lngpier = window.localStorage.getItem("lngpier18");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink18  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn18 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn19)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink17s = 0;
    $scope.checkblink17s = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier17s",latpier);
            window.localStorage.setItem("lngpier17s",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier17s");
            $scope.lngpier = window.localStorage.getItem("lngpier17s");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink17s  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn17s = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn18)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink17 = 0;
    $scope.checkblink17 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier17",latpier);
            window.localStorage.setItem("lngpier17",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier17");
            $scope.lngpier = window.localStorage.getItem("lngpier17");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink17  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn17 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn17)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink16 = 0;
    $scope.checkblink16 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier16",latpier);
            window.localStorage.setItem("lngpier16",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier16");
            $scope.lngpier = window.localStorage.getItem("lngpier16");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink16  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn16 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn16)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink15 = 0;
    $scope.checkblink15 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier15",latpier);
            window.localStorage.setItem("lngpier15",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier15");
            $scope.lngpier = window.localStorage.getItem("lngpier15");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink15  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn15 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn15)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink14 = 0;
    $scope.checkblink14 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier14",latpier);
            window.localStorage.setItem("lngpier14",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier14");
            $scope.lngpier = window.localStorage.getItem("lngpier14");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink14  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn14 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn14)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink13 = 0;
    $scope.checkblink13 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier13",latpier);
            window.localStorage.setItem("lngpier13",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier13");
            $scope.lngpier = window.localStorage.getItem("lngpier13");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink13  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn13 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn13)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink12 = 0;
    $scope.checkblink12 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier12",latpier);
            window.localStorage.setItem("lngpier12",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier12");
            $scope.lngpier = window.localStorage.getItem("lngpier12");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink12  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn12 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn12)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink11 = 0;
    $scope.checkblink11 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier11",latpier);
            window.localStorage.setItem("lngpier11",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier11");
            $scope.lngpier = window.localStorage.getItem("lngpier11");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink11  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn11 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn11)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink10 = 0;
    $scope.checkblink10 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier10",latpier);
            window.localStorage.setItem("lngpier10",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier10");
            $scope.lngpier = window.localStorage.getItem("lngpier10");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink10  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn10 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn10)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink9s = 0;
    $scope.checkblink9s = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier9s",latpier);
            window.localStorage.setItem("lngpier9s",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier9s");
            $scope.lngpier = window.localStorage.getItem("lngpier9s");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink9s  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn9s = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn9s)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink9 = 0;
    $scope.checkblink9 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier9",latpier);
            window.localStorage.setItem("lngpier9",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier9");
            $scope.lngpier = window.localStorage.getItem("lngpier9");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink9  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn9 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn9)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink8 = 0;
    $scope.checkblink8 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier8",latpier);
            window.localStorage.setItem("lngpier8",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier8");
            $scope.lngpier = window.localStorage.getItem("lngpier8");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink8  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn8 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn8)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink7 = 0;
    $scope.checkblink7 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier7",latpier);
            window.localStorage.setItem("lngpier7",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier7");
            $scope.lngpier = window.localStorage.getItem("lngpier7");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink7  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn7 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn7)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink6 = 0;
    $scope.checkblink6 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier6",latpier);
            window.localStorage.setItem("lngpier6",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier6");
            $scope.lngpier = window.localStorage.getItem("lngpier6");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink6  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn6 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn6)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink5 = 0;
    $scope.checkblink5 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier5",latpier);
            window.localStorage.setItem("lngpier5",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier5");
            $scope.lngpier = window.localStorage.getItem("lngpier5");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink5  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn5 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn5)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink4 = 0;
    $scope.checkblink4 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier4",latpier);
            window.localStorage.setItem("lngpier4",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier4");
            $scope.lngpier = window.localStorage.getItem("lngpier4");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink4  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn4 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn4)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink3 = 0;
    $scope.checkblink3 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier3",latpier);
            window.localStorage.setItem("lngpier3",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier3");
            $scope.lngpier = window.localStorage.getItem("lngpier3");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink3  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn3 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn3)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink2 = 0;
    $scope.checkblink2 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier2",latpier);
            window.localStorage.setItem("lngpier2",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier2");
            $scope.lngpier = window.localStorage.getItem("lngpier2");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink2  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn2 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn2)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink1 = 0;
    $scope.checkblink1 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier1",latpier);
            window.localStorage.setItem("lngpier1",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier1");
            $scope.lngpier = window.localStorage.getItem("lngpier1");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink1  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn1 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn1)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.diffforblink0 = 0;
    $scope.checkblink0 = function(latpier,lngpier) {
        $interval(function() {     
            window.localStorage.setItem("latpier0",latpier);
            window.localStorage.setItem("lngpier0",lngpier);
            $scope.latpier = window.localStorage.getItem("latpier0");
            $scope.lngpier = window.localStorage.getItem("lngpier0");  
            $scope.R = 6371; // Radius of the earth in km
            $scope.dLat = ($scope.lat-$scope.latpier)* (Math.PI/180);  // deg2rad below
            $scope.dLon = ($scope.lng-$scope.lngpier)* (Math.PI/180); 
            $scope.a = 
            Math.sin($scope.dLat/2) * Math.sin($scope.dLat/2) +
            Math.cos(($scope.latpier)* (Math.PI/180)) * Math.cos(($scope.lat)* (Math.PI/180)) * 
            Math.sin($scope.dLon/2) * Math.sin($scope.dLon/2)
            ; 
            $scope.c = 2 * Math.atan2(Math.sqrt($scope.a), Math.sqrt(1-$scope.a)); 
            $scope.diffforblink0  = $scope.R * $scope.c; // Distance in km 
          }, 500)
    } 
    $scope.notifyn0 = function() {
        $scope.dest = window.localStorage.getItem("dest_pier");
        if($scope.dest == $scope.destn0)       
        alert("You have arrived your destination : " + $scope.dest);
    }


    $scope.destt4 = "ท่าราษฎร์บูรณะ (บิ๊กซี)";
    $scope.destt3 = "ท่าวัดราชสิงขร";
    $scope.destt2 = "ท่าวธรรยาวาส";
    $scope.destt1 = "ท่าเศวตฉัตร";
    $scope.destn33 = "ท่าปากเกร็ด";
    $scope.destn32 = "ท่าวัดกลางเกร็ด";
    $scope.destn31 = "ท่ากระทรวงพาณิชย์";
    $scope.destn30 = "ท่านนทบุรี(พิบูลย์3)";
    $scope.destn29s = "ท่าพระราม 5";
    $scope.destn29 = "ท่าพิบูลย์สงคราม 2";
    $scope.destn28 = "ท่าวัดเขียน";
    $scope.destn27 = "ท่าวัดตึก";
    $scope.destn26 = "ท่าวัดเขมา";
    $scope.destn25 = "ท่าพิบูลย์สงคราม 1";
    $scope.destn24 = "ท่าพระราม 7";
    $scope.destn23 = "ท่าวัดสร้อยทอง";
    $scope.destn22 = "ท่าบางโพ";
    $scope.destn21 = "ท่าเกียกกาย";
    $scope.destn20 = "ท่าเขียวไข่กา";
    $scope.destn19 = "ท่ากรมชลประทาน";
    $scope.destn18 = "ท่าพายัพ";
    $scope.destn17s = "ท่าเทพากร";
    $scope.destn17 = "ท่าเทพนารี";
    $scope.destn16 = "ท่าสะพานกรุงธน (ซังฮี้)";
    $scope.destn15 = "ท่าเทเวศร์";
    $scope.destn14 = "ท่าพระราม 8";
    $scope.destn13 = "ท่าพระอาทิตย์";
    $scope.destn12 = "ท่าพระปิ่นเกล้า";
    $scope.destn11 = "ท่ารถไฟ";
    $scope.destn10 = "ท่าวังหลัง (พรานนก)";
    $scope.destn9s = "ท่ามหาราช";
    $scope.destn9 = "ท่าช้าง";
    $scope.destn8 = "ท่าเตียน";
    $scope.destn7 = "ท่าราชินี";
    $scope.destn6 = "ท่าสะพานพุทธ";
    $scope.destn5 = "ท่าราชวงศ์";
    $scope.destn4 = "ท่ากรมเจ้าท่า";
    $scope.destn3 = "ท่าสี่พระยา";
    $scope.destn2 = "ท่าวัดม่วงแค";
    $scope.destn1 = "ท่าโอเรียนเท็ล";
    $scope.destn0 = "ท่าสาทร (ตากสิน)";





});


//list of emergency contacts  
window.CONTACTS = 
[{"id":1,"first_name":"Chaotha Department","last_name":"(กรมเจ้าท่า)","country":"Cyprus","ip_address":"153.88.89.148","email":"progers@yata.net","phoneno":"0812311311","img":"img/ionic.png"},
{"id":2,"first_name":"Police Station","last_name":"(สถานีตำรวจ)","country":"Croatia","ip_address":"209.73.121.212","email":"jgordon@skivee.biz","phoneno":"191","img":"img/ionic.png"},
{"id":3,"first_name":"Ambulance","last_name":"(รถพยาบาล)","country":"Armenia","ip_address":"164.214.217.162","email":"khamilton@rhynyx.biz","phoneno":"1669","img":"img/ionic.png"},
{"id":4,"first_name":"Stephanie","last_name":"Dennis","country":"Mauritius","ip_address":"8.199.242.67","email":"sjohnson@jabbertype.mil","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":5,"first_name":"Jerry","last_name":"Edwards","country":"Thailand","ip_address":"230.207.100.163","email":"jpalmer@avamm.org","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":6,"first_name":"Lillian","last_name":"Franklin","country":"Germany","ip_address":"150.190.116.1","email":"lfranklin@eare.mil","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":7,"first_name":"Melissa","last_name":"Gordon","country":"Serbia","ip_address":"162.156.29.99","email":"mgordon@flashset.org","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":8,"first_name":"Sarah","last_name":"Harris","country":"Grenada","ip_address":"13.177.156.223","email":"sburns@eimbee.info","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":9,"first_name":"Willie","last_name":"Ingles","country":"Croatia","ip_address":"115.133.81.82","email":"wburton@dynazzy.info","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":10,"first_name":"Tina","last_name":"Johnson","country":"United States Virgin Islands","ip_address":"113.49.63.18","email":"tsimmons@devpulse.mil","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":11,"first_name":"Kenneth","last_name":"Kent","country":"Mexico","ip_address":"92.89.76.196","email":"klarson@browseblab.info","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":12,"first_name":"Philip","last_name":"Lyles","country":"Cuba","ip_address":"223.180.48.70","email":"pwelch@skippad.edu","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":13,"first_name":"Nicholas","last_name":"Marker","country":"British Indian Ocean Territory","ip_address":"200.150.119.13","email":"nparker@twitternation.net","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":14,"first_name":"Nicole","last_name":"Nebb","country":"Moldova","ip_address":"47.66.237.205","email":"nwebb@midel.biz","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":15,"first_name":"Clarence","last_name":"Olsen","country":"China","ip_address":"134.84.246.67","email":"cschmidt@dazzlesphere.net","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":16,"first_name":"Jessica","last_name":"Peterson","country":"Sao Tome and Principe","ip_address":"211.30.32.109","email":"jmurray@jumpxs.net","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":17,"first_name":"Willie","last_name":"Quite","country":"US Minor Outlying Islands","ip_address":"158.40.109.208","email":"wschmidt@babbleset.edu","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":18,"first_name":"Margaret","last_name":"Robertson","country":"Bhutan","ip_address":"252.123.77.101","email":"mevans@voolia.info","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":19,"first_name":"Arthur","last_name":"Simmons","country":"Faroe Islands","ip_address":"116.5.126.29","email":"amorales@brainlounge.biz","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":20,"first_name":"Charles","last_name":"55063","country":"Italy","ip_address":"10.43.255.4","email":"cperez@avaveo.net","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":21,"first_name":"Jeffrey","last_name":"Turner","country":"Liechtenstein","ip_address":"55.140.114.8","email":"jwebb@mynte.net","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":22,"first_name":"Andrea","last_name":"Upton","country":"Nauru","ip_address":"22.243.12.86","email":"asimpson@browsetype.mil","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":23,"first_name":"Steve","last_name":"15063","country":"Morocco","ip_address":"21.166.38.112","email":"sreynolds@topiclounge.biz","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":24,"first_name":"Gerald","last_name":"Veyes","country":"Isle of Man","ip_address":"235.115.15.46","email":"greyes@voolith.biz","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":25,"first_name":"Judy","last_name":"Washington","country":"Sweden","ip_address":"39.120.240.182","email":"jwashington@oyondu.net","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":26,"first_name":"Brandon","last_name":"Xi","country":"Vietnam","ip_address":"18.176.165.38","email":"bpatterson@skyba.org","phoneno":"+66875957750","img":"img/ionic.png"},
{"id":27,"first_name":"Brandon","last_name":"Yore","country":"Vietnam","ip_address":"18.176.165.38","email":"batterson@skyba.org","phoneno":"+66875957750","img":"img/ionic.png"},                  
{"id":28,"first_name":"Brandon","last_name":"Zeff","country":"Vietnam","ip_address":"18.176.165.38","email":"bpatterson@skyba.org","phoneno":"+66875957750","img":"img/ionic.png"}];


