angular.module('starter.controllers', [])

.controller('SlideboxCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }             
})   


.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'ChaoTha Department', id: 1 },
    { title: 'Police Station', id: 2 },
    { title: 'xxx', id: 3 },
    { title: 'xxx', id: 4 },
    { title: 'xxx', id: 5 },
    { title: 'xxx', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SettingsCtrl', function($scope) {

  $scope.settingsList = [
    { text: "Wireless", checked: true },
    { text: "GPS", checked: false },
    { text: "Vibration", checked: false }
  ];

  $scope.pushNotificationChange = function() {
    console.log('Push Notification Change', $scope.pushNotification.checked);
  };
  
  $scope.pushNotification = { checked: true };
  $scope.emailNotification = 'Subscribed';
  
})


.controller('EmergencyCtrl', function($scope) {
  $scope.groups = [];
  for (var i=0; i<10; i++) {
    $scope.groups[i] = {
      name: i,
      items: []
    };
    for (var j=0; j<3; j++) {
      $scope.groups[i].items.push(i + '-' + j);
    }
  }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
})

.controller('PopupCtrl',function($scope, $ionicPopup, $ionicModal ) {



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

  $ionicModal.fromTemplateUrl('templates/popup/Flag.html', {
        id: '999',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.popflag = modal;
      });

      $scope.popopenflag = function(index) {
          var begin = document.getElementById("input1").value;
          var dest = document.getElementById("input2").value;

          if(begin == "ท่าปากเกร็ด" && dest == "ท่าวัดกลางเกร็ด" || dest == "ท่าปากเกร็ด" && begin == "ท่าวัดกลางเกร็ด")
          {
                window.localStorage.setItem("begin_pier", begin);
                window.localStorage.setItem("dest_pier", dest);   
            

                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 10 minutes",
                  distance: 290,
                  available_for_order: 1,
                  name: 'Green',
                  price: 13,
                  value: "greenline",
                  image: 'http://wwweb.com.au/images/blue-flag.png'
              });
          
              
          }
          else if(begin == "ท่าวัดกลางเกร็ด")
          {
            var beginID = 2;
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

      $scope.popcloseflag = function(index) {
      $scope.popflag.hide();
      $scope.Plist.splice(index, 5);    
      };

      $scope.filter = function(index){
        var savedData = window.localStorage.getItem("begin_pier");       
        var element = document.getElementById("savedValue");
        element.innerHTML = "ข้อมูลที่เก็บไว้ = " + savedData;      
      }

      
 
  $scope.Plist = [
    ]
  localStorage.setItem('products', JSON.stringify($scope.Plist));
    
 


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



});

