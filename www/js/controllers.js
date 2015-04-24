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
            User_guide: "User Guide",
            Follow_us_on: "Follow us on",
            ScrollBottom: "Scroll",
            Find_Me: "Find Me",
            Start: "Start",
            To: "To",
            Description: "Description",
            Nearby_Places: "Nearby Places",
            Activities: "Activities",
            Transportation: "Transportation",
            Transportation2: "Transportation",
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
            Is_Scheduled: "Is Scheduled",
            History_0: "The Chao Phraya River",
            History_1_1: "The Chao Phraya (Thai: แม่น้ำเจ้าพระยา) is a major river in Thailand, with its low alluvial river plain marking the mainland of the country.",
            History_1_2: " The Chao Phraya runs from north to south for 372 km from the central plains to Bangkok and the Gulf of Thailand. However in Chainat the river splits into the main river course and the Tha Chin river, which then flows parallel to the main river and exits to Gulf of Thailand the about 35 km west of Bangkok in Samut Sakhon. In the low alluvial plain which begins below the Chainat dam many small canals (khlong) split off from the main river, used for the irrigation of the rice paddies.",
            History_1_3: "Chao Phraya Express Boat Co., Ltd. (CPEX) was established by Khunying Supatra Singhulaka in September 1971. A concession right was granted to CPEX to provide river transportation service to passengers by the Harbor Department.",
            History_1_4: "1. Local Line Boat (Normal color) - Round trip services from Nonthaburi Pier to Wat Rajsingkorn Pier stopping at 34 piers",
            History_1_5: "2. Express Boat (Orange Flag) - Round trip services from Nonthaburi Pier to Wat Rajsingkorn Pier stopping at 18 piers",
            History_1_6: "3. Express Boat (Yellow Flag) - Round trip services from Nonthaburi Pier to Ratburana Pier stopping at 10 piers",
            History_1_7: "4. Express Boat (Green-Yellow Flag) - Round trip services from Pakkret Pier to Sathon Pier stopping at 12 piers",
            History_4: "Loy Krathong",
            History_4_1: "Loy Krathong takes place on the evening of the full moon of the 12th month in the traditional Thai lunar calendar. In the Western calendar this usually falls in November. On the night of the full moon, Thais launch their krathong on a river, canal or a pond, making a wish as they do so. The festival may originate from an ancient ritual paying respect to the water spirits.",
            Pakkret: "Pakkret",
            Pakkret_desc: " ",
            Watklangkret: "Wat Klang Kret",
            Watklangkret_desc: " ",
            Ministryofcommerce: "Ministry of Commerce",
            Ministryofcommerce_desc: " ",
            Nonthaburi_Pibul3: "Nonthaburi (Pibul 3)",
            Nonthaburi_Pibul3_desc: " ",
            Rama5: "Rama 5 Bridge",
            Rama5_desc: " ",
            Pibul2: "Pibul 2",
            Pibul2_desc: " ",
            Watkien:"Wat Kien",
            Watkien_desc: " ",
            Wattuek: "Wat Tuek",
            Wattuek_desc: " ",
            Watkhema: "Wat Khema",
            Watkhema_desc: " ",
            Pibul1: "Pibul 1",
            Pibul1_desc: " ",
            Rama7: "Rama 7 Bridge",
            Rama7_desc: " ",
            Watsoithong: "Wat Soi Thong",
            Watsoithong_desc: " ",
            Bangpo: "Bang Po",
            Bangpo_desc: " ",
            Kjakkai: "Kjak Kai",
            Kjakkai_desc: " ",
            Kheawkhaika: "Kheaw Khai Ka",
            Kheawkhaika_desc: " ",
            Irrigationdept: "Irrigation Dept.",
            Irrigationdept_desc: " ",
            Payap: "Payap",
            Payap_desc: " ",
            Watthepnahree: "Wat Thepnahree",
            Watthepnahree_desc: " ",
            Watthepakorn: "Wat Thepakorn",
            Watthepakorn_desc: " ",
            Krungthonburibridge: "Krung Thon Bridge(Sung Hi)",
            Krungthonburibridge_desc: " ",
            Thewej: "Thewej",
            Thewej_desc: " ",
            Rama8: "Rama 8 Bridge",
            Rama8_desc: " ",
            Phraarthit: "Phra Arthit",
            Phraarthit_desc: " ",
            Phrapinklaobridge: "Phra Pin Klao Bridge",
            Phrapinklaobridge_desc: " ",
            Thonburirailway: "Thonburi Railway",
            Thonburirailway_desc: " ",
            Wanglang: "Wang Lang(Siriraj)",
            Wanglang_desc: " ",
            Maharaj: "Maharaj",
            Maharaj_desc: " ",
            Thachang: "Tha Chang",
            Thachang_desc: " ",
            Thatien: "Tha Tien",
            Thatien_desc: " ",
            Rajinee: "Rajinee",
            Rajinee_desc: " ",
            Memorialbridge: "Memorial Bridge",
            Memorialbridge_desc: " ",
            Rajchawongse: "Rajchawongse",
            Rajchawongse_desc: " ",
            Marinedept: "Marine Dept.",
            Marinedept_desc: " ",
            Siphraya: "Si Phraya",
            Siphraya_desc: " ",
            Watmuangkae: "Wat Muang Kae",
            Watmuangkae_desc: " ",
            Oriental: "Oriental",
            Oriental_desc: " ",
            Sathorn: "Sathorn",
            Sathorn_desc: " ",
            Watsawetachat: "Wat Sawetachat",
            Watsawetachat_desc: " ",
            Watworachanyawas: "Wat Worachanyawas",
            Watworachanyawas_desc: " ",
            Watrajsingkorn: "Wat Rajsingkorn",
            Watrajsingkorn_desc: " ",
            Rajburana: "Rajburana",
            Rajburana_desc: " "






        });
        $translateProvider.translations('th', {
            
            Contact_us_side_menu: "ติดต่อเรา",
            Advertisement_side_menu: "ประกาศ",
            Emergency_call_side_menu: "โทรด่วนฉุกเฉิน",
            History_side_menu: "ประวัติเรือด่วน",
            Map_Schedule_side_menu: "ตารางเดินเรือ",
            Map_side_menu: "แผนที่",
            Search_side_menu: "ค้นหา",
            User_guide: "ช่วยเหลือ",
            Follow_us_on: "ติดตามเราได้ที่",
            ScrollBottom: "เลื่อนลง",
            Find_Me: "ค้นหาตำแหน่งปัจจุบัน",
            Start: "ต้นทาง",
            To: "ปลายทาง",
            Description: "รายละเอียด",
            Nearby_Places: "สถานที่ใกล้เคียง",
            Activities: "กิจกรรม",
            Transportation: "ระบบขนส่งที่เชื่อมต่อ",
            Transportation2: "ระบบขนส่ง",
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
            Is_Scheduled: "เช็คการแจ้งเตือน",
            History_0: "แม่น้ำเจ้าพระยา",
            History_1_1: "เจ้าพระยา เป็นชื่อแม่น้ำที่สำคัญ โดยแม่น้ำเจ้าพระยาเกิดจากการรวมตัวของแม่น้ำหลักสีสาย ได้แก่ แม่น้ำปิง แม่น้ำวัง แม่น้ำยม และแม่น้ำน่าน ไหลมาบรรจบกันที่ตำบลปากน้ำโพ ด้านหน้าเขื่อนในตัวเมือง จ.นครสวรรค์ มีความยาวประมาณ 372 กิโลเมตร เมื่อไหลมาบรรจบกันแล้วจึงค่อย ๆ รวมตัวกันกลายเป็นแม่น้ำสายใหญ่ที่สำคัญของประเทศ ไหลผ่านจังหวัดต่าง ๆ ในภาคกลาง เรื่อยมาจนถึงกรุงเทพมหานคร และลงสู่ทะเลอ่าวไทยที่ อ.ปากน้ำ จังหวัดสมุทรปราการ",
            History_1_2: "แม่น้ำเจ้าพระยา ถือเป็นแหล่งท่องเที่ยวที่น่าสนใจในกรุงเทพมหานคร ในปัจจุบัน การท่องเที่ยวแม่น้ำเจ้าพระยาด้วยเรือท่องเที่ยว เป็นที่นิยมมาก นอกจากจะได้ชมทัศนียภาพ และชีวิตความเป็นอยู่ของประชาชนริมสองฝั่งแม่น้ำเจ้าพระยาแล้ว ยังเป็นการย้อนให้เห็นถึงประวัติศาสตร์ต่าง ๆ บนสายน้ำเจ้าพระยาแห่งนี้ จึงไม่น่าแปลกใจที่จะมีบริษัทนำเที่ยว บริษัททัวร์ต่าง ๆ มากมาย ทำธุรกิจเกี่ยวกับการล่องเรือชมแม่น้ำเจ้าพระยา รวมถึงธุรกิจร้านอาหาร และโรงแรมที่พักแถวบริเวณแม่น้ำเจ้าพระยา",
            History_1_3: "ปัจจุบันให้ บริการเดินเรือโดยสารเส้นทางระหว่าง ปากเกร็ด (นนทบุรี) ถึงราษฎร์บูรณะรวมระยะทางประมาณ 32 กิโลเมตร กับ 4 สายการเดินเรือหลักได้แก่",
            History_1_4: "1.สายเรือประจำทาง (ธงไม่มีสี) - ให้บริการในเส้นทางท่าน้ำนนทบุรี-วัดราชสิงขร โดยจอดรับ-ส่งทุกท่าเรือ ทั้ง 34 ท่า",
            History_1_5: "2.สายเรือด่วนพิเศษธงส้ม - ให้บริการในเส้นทางท่าน้ำนนทบุรี-วัดราชสิงขร โดยจอดรับ-ส่ง 21 ท่า",
            History_1_6: "3.สายเรือด่วนพิเศษธงเหลือง - ให้บริการในเส้นทางท่าน้ำนนทบุรี-สาทร-ราษฎร์บูรณะ โดยจอดรับ-ส่ง 10 ท่า",
            History_1_7: "4.สายเรือด่วนพิเศษธงเขียว - ให้บริการในเส้นทางท่าเรือปากเกร็ด-ท่าน้ำนนทบุรี-สาทร โดยจอดรับ-ส่ง 14 ท่า",
            History_4: "ประเพณีลอยกระทง",
            History_4_1: "เป็นวันสำคัญวันหนึ่งของชาวไทย ตรงกับวันขึ้น 15 ค่ำ เดือน 12 ตามปฏิทินจันทรคติไทย ตามปฏิทินจันทรคติล้านนา มักจะตกอยู่ในราวเดือนพฤศจิกายน ตามปฏิทินสุริยคติ ประเพณีนี้กำหนดขึ้นเพื่อเป็นการสะเดาะเคราะห์และขอขมาต่อพระแม่คงคา บางหลักฐานเชื่อว่าเป็นการบูชารอยพระพุทธบาทที่ริมฝั่งแม่น้ำนัมทามหานที และบางหลักฐานก็ว่าเป็นการบูชาพระอุปคุตอรหันต์หรือพระมหาสาวก สำหรับประเทศไทยประเพณีลอยกระทงได้กำหนดจัดในทุกพื้นที่ทั่วประเทศ โดยเฉพาะอย่างยิ่งบริเวณที่ติดกับแม่น้ำ ลำคลอง หรือ แหล่งน้ำต่าง ๆ ซึ่งแต่ละพื้นที่ก็จะมีเอกลักษณ์ที่น่าสนใจแตกต่างกันไป",
            Pakkret: "ท่าปากเกร็ด",
            Pakkret_desc: " ",
            Watklangkret: "ท่าวัดกลางเกร็ด",
            Watklangkret_desc: " ",
            Ministryofcommerce: "ท่ากระทรวงพาณิชย์",
            Ministryofcommerce_desc: " ",
            Nonthaburi_Pibul3: "ท่านนทบุรี (พิบูลย์3)",
            Nonthaburi_Pibul3_desc: " ",
            Rama5: "ท่าพระราม 5",
            Rama5_desc: " ",
            Pibul2: "ท่าพิบูลย์สงคราม 2",
            Pibul2_desc: " ",
            Watkien:"ท่าวัดเขียน",
            Watkien_desc: " ",
            Wattuek: "ท่าวัดตึก",
            Wattuek_desc: " ",
            Watkhema: "ท่าวัดเขมา",
            Watkhema_desc: " ",
            Pibul1: "ท่าพิบูลย์สงคราม 1",
            Pibul1_desc: " ",
            Rama7: "ท่าพระราม 7",
            Rama7_desc: " ",
            Watsoithong: "ท่าวัดสร้อยทอง",
            Watsoithong_desc: " ",
            Bangpo: "ท่าบางโพ",
            Bangpo_desc: " ",
            Kjakkai: "ท่าเกียกกาย",
            Kjakkai_desc: " ",
            Kheawkhaika: "ท่าเขียวไก่กา",
            Kheawkhaika_desc: " ",
            Irrigationdept: "ท่ากรมชลประทาน",
            Irrigationdept_desc: " ",
            Payap: "ท่าพายัพ",
            Payap_desc: " ",
            Watthepnahree: "ท่าวัดเทพนารี",
            Watthepnahree_desc: " ",
            Watthepakorn: "ท่าวัดเทพากร",
            Watthepakorn_desc: " ",
            Krungthonburibridge: "ท่าสะพานกรุงธน (ซังฮี้)",
            Krungthonburibridge_desc: " ",
            Thewej: "ท่าเทเวศร์",
            Thewej_desc: " ",
            Rama8: "ท่าพระราม 8",
            Rama8_desc: " ",
            Phraarthit: "ท่าพระอาทิตย์",
            Phraarthit_desc: " ",
            Phrapinklaobridge: "ท่าพระปิ่นเกล้า",
            Phrapinklaobridge_desc: " ",
            Thonburirailway: "ท่ารถไฟ",
            Thonburirailway_desc: " ",
            Wanglang: "ท่าวังหลัง (พรานนก)",
            Wanglang_desc: " ",
            Maharaj: "ท่ามหาราช",
            Maharaj_desc: " ",
            Thachang: "ท่าช้าง",
            Thachang_desc: " ",
            Thatien: "ท่าเตียน",
            Thatien_desc: " ",
            Rajinee: "ท่าราชินี",
            Rajinee_desc: " ",
            Memorialbridge: "ท่าสะพานพุทธ",
            Memorialbridge_desc: " ",
            Rajchawongse: "ท่าราชวงศ์",
            Rajchawongse_desc: " ",
            Marinedept: "ท่ากรมเจ้าท่า",
            Marinedept_desc: " ",
            Siphraya: "ท่าสี่พระยา",
            Siphraya_desc: " ",
            Watmuangkae: "ท่าวัดม่วงแค",
            Watmuangkae_desc: " ",
            Oriental: "ท่าโอเรียนเท็ล",
            Oriental_desc: " ",
            Sathorn: "ท่าสาทร (ตากสิน)",
            Sathorn_desc: " ",
            Watsawetachat: "ท่าวัดเศวตฉัตร",
            Watsawetachat_desc: " ",
            Watworachanyawas: "ท่าวัดวธจรรยาวาส",
            Watworachanyawas_desc: " ",
            Watrajsingkorn: "ท่าวัดราชสิงขร",
            Watrajsingkorn_desc: " ",
            Rajburana: "ท่าราษฎร์บูรณะ (บิ๊กซี)",
            Rajburana_desc: " "



        });
        $translateProvider.preferredLanguage("th");
        $translateProvider.fallbackLanguage("th");
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
.controller('SettingsCtrl', function($scope , $ionicSideMenuDelegate, $translate, $ionicModal) {
    $scope.ChangeLanguage = function(lang){
    $translate.use(lang);
  }
    $ionicModal.fromTemplateUrl('templates/popup/information.html', {
        id: '11111',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.popinfor = modal;
      });

      $scope.popopeninfor = function(index) {
      $scope.popinfor.show();
      };

      $scope.popcloseinfor = function(index) {
      $scope.popinfor.hide();
      };

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
    {id: 1, title: 'ท่าปากเกร็ด', value: "n33"},
    {id: 2, title: 'ท่าวัดกลางเกร็ด', value: "n32"},
    {id: 3, title: 'ท่ากระทรวงพาณิชย์', value: "n31"},
    {id: 4, title: 'ท่านนทบุรี (พิบูลย์สงคราม 3)', value: "n30"},
    {id: 5, title: 'ท่าพระราม 5', value: "n29s"},
    {id: 6, title: 'ท่าพิบูลย์สงคราม 2', value: "n29"},
    {id: 7, title: 'ท่าวัดเขียน', value: "n28"},
    {id: 8, title: 'ท่าวัดตึก', value: "n27"},
    {id: 9, title: 'ท่าวัดเขมา', value: "n26"},
    {id: 10, title: 'ท่าพิบูลย์สงคราม 1', value: "n25"},
    {id: 11, title: 'ท่าพระราม 7', value: "n24"},
    {id: 12, title: 'ท่าวัดสร้อยทอง', value: "n23"},
    {id: 13, title: 'ท่าบางโพ', value: "n22"},
    {id: 14, title: 'ท่าเกียกกาย', value: "n21"},
    {id: 15, title: 'ท่าเขียวไก่กา', value: "n20"},
    {id: 16, title: 'ท่ากรมชลประทาน', value: "n19"},
    {id: 17, title: 'ท่าพายัพ', value: "n18"},
    {id: 18, title: 'ท่าวัดเทพากร', value: "n17s"},
    {id: 19, title: 'ท่าวัดเทพนารี', value: "n17"},
    {id: 20, title: 'ท่าสะพานกรุงธน (ซังฮี้)', value: "n16"},
    {id: 21, title: 'ท่าเทเวศร์', value: "n15"},
    {id: 22, title: 'ท่าพระราม 8', value: "n14"},
    {id: 23, title: 'ท่าพระอาทิตย์', value: "n13"},
    {id: 24, title: 'ท่าพระปิ่นเกล้า', value: "n12"},
    {id: 25, title: 'ท่ารถไฟ', value: "n11"},
    {id: 26, title: 'ท่าวังหลัง (พรานนก)', value: "n10"},
    {id: 27, title: 'ท่ามหาราช', value: "n9s"},
    {id: 28, title: 'ท่าช้าง', value: "n9"},
    {id: 29, title: 'ท่าเตียน', value: "n8"},
    {id: 30, title: 'ท่าราชินี', value: "n7"},
    {id: 31, title: 'ท่าสะพานพุทธ', value: "n6"},
    {id: 32, title: 'ท่าราชวงศ์', value: "n5"},
    {id: 33, title: 'ท่ากรมเจ้าท่า', value: "n4"},
    {id: 34, title: 'ท่าสี่พระยา', value: "n3"},
    {id: 35, title: 'ท่าวัดม่วงแค', value: "n2"},
    {id: 36, title: 'ท่าโอเรียนเท็ล', value: "n1"},
    {id: 37, title: 'ท่าสาทร (ตากสิน)', value: "n0"},
    {id: 38, title: 'ท่าวัดเศวตฉัตร', value: "t1"},
    {id: 39, title: 'ท่าวัดวธจรรยาวาส', value: "t2"},
    {id: 40, title: 'ท่าวัดราชสิงขร', value: "t3"},
    {id: 41, title: 'ท่าราษฎร์บูรณะ (บิ๊กซี)', value: "t4"}
  ];
    //list of destination pier
  $scope.Dlist = [
    {id: 1, title: 'ท่าปากเกร็ด', value: "n33"},
    {id: 2, title: 'ท่าวัดกลางเกร็ด', value: "n32"},
    {id: 3, title: 'ท่ากระทรวงพาณิชย์', value: "n31"},
    {id: 4, title: 'ท่านนทบุรี (พิบูลย์สงคราม 3)', value: "n30"},
    {id: 5, title: 'ท่าพระราม 5', value: "n29s"},
    {id: 6, title: 'ท่าพิบูลย์สงคราม 2', value: "n29"},
    {id: 7, title: 'ท่าวัดเขียน', value: "n28"},
    {id: 8, title: 'ท่าวัดตึก', value: "n27"},
    {id: 9, title: 'ท่าวัดเขมา', value: "n26"},
    {id: 10, title: 'ท่าพิบูลย์สงคราม 1', value: "n25"},
    {id: 11, title: 'ท่าพระราม 7', value: "n24"},
    {id: 12, title: 'ท่าวัดสร้อยทอง', value: "n23"},
    {id: 13, title: 'ท่าบางโพ', value: "n22"},
    {id: 14, title: 'ท่าเกียกกาย', value: "n21"},
    {id: 15, title: 'ท่าเขียวไก่กา', value: "n20"},
    {id: 16, title: 'ท่ากรมชลประทาน', value: "n19"},
    {id: 17, title: 'ท่าพายัพ', value: "n18"},
    {id: 18, title: 'ท่าวัดเทพากร', value: "n17s"},
    {id: 19, title: 'ท่าวัดเทพนารี', value: "n17"},
    {id: 20, title: 'ท่าสะพานกรุงธน (ซังฮี้)', value: "n16"},
    {id: 21, title: 'ท่าเทเวศร์', value: "n15"},
    {id: 22, title: 'ท่าพระราม 8', value: "n14"},
    {id: 23, title: 'ท่าพระอาทิตย์', value: "n13"},
    {id: 24, title: 'ท่าพระปิ่นเกล้า', value: "n12"},
    {id: 25, title: 'ท่ารถไฟ', value: "n11"},
    {id: 26, title: 'ท่าวังหลัง (พรานนก)', value: "n10"},
    {id: 27, title: 'ท่ามหาราช', value: "n9s"},
    {id: 28, title: 'ท่าช้าง', value: "n9"},
    {id: 29, title: 'ท่าเตียน', value: "n8"},
    {id: 30, title: 'ท่าราชินี', value: "n7"},
    {id: 31, title: 'ท่าสะพานพุทธ', value: "n6"},
    {id: 32, title: 'ท่าราชวงศ์', value: "n5"},
    {id: 33, title: 'ท่ากรมเจ้าท่า', value: "n4"},
    {id: 34, title: 'ท่าสี่พระยา', value: "n3"},
    {id: 35, title: 'ท่าวัดม่วงแค', value: "n2"},
    {id: 36, title: 'ท่าโอเรียนเท็ล', value: "n1"},
    {id: 37, title: 'ท่าสาทร (ตากสิน)', value: "n0"},
    {id: 38, title: 'ท่าวัดเศวตฉัตร', value: "t1"},
    {id: 39, title: 'ท่าวัดวธจรรยาวาส', value: "t2"},
    {id: 40, title: 'ท่าวัดราชสิงขร', value: "t3"},
    {id: 41, title: 'ท่าราษฎร์บูรณะ (บิ๊กซี)', value: "t4"}
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
       

          if($scope.begin == "n33" && $scope.dest == "n32" || $scope.begin == "n32" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
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


          else if($scope.begin == "n33" && $scope.dest == "n31" || $scope.begin == "n31" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 14 minutes",
                  distance: 3.75,
                  name: 'Green',
                  price: 10,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

           else if($scope.begin == "n33" && $scope.dest == "n30" || $scope.begin == "n30" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.842068;
                    $scope.lngbegin = 100.491147;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n30")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 21 minutes",
                  distance: 8.16,
                  name: 'Green',
                  price: 13,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n33" && $scope.dest == "n24" || $scope.begin == "n24" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.812884;
                    $scope.lngbegin = 100.513469;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n24")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 28 minutes",
                  distance: 11.57,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n33" && $scope.dest == "n16" || $scope.begin == "n16" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.781860;
                    $scope.lngbegin = 100.501076;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n16")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 34 minutes",
                  distance: 14.86,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n33" && $scope.dest == "n15" || $scope.begin == "n15" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.772132;
                    $scope.lngbegin = 100.500097;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n15")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 39 minutes",
                  distance: 15.93,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n33" && $scope.dest == "n12" || $scope.begin == "n12" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.763006;
                    $scope.lngbegin = 100.490625;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n12")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 43 minutes",
                  distance: 16.94,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n33" && $scope.dest == "n10" || $scope.begin == "n10" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.756003;
                    $scope.lngbegin = 100.486950;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n10")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 46 minutes",
                  distance: 17.74,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n33" && $scope.dest == "n9" || $scope.begin == "n9" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.752411;
                    $scope.lngbegin = 100.488293;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n9")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 51 minutes",
                  distance: 18.13,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n33" && $scope.dest == "n5" || $scope.begin == "n5" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.738621;
                    $scope.lngbegin = 100.504260;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n5")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 54 minutes",
                  distance: 19.68,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n33" && $scope.dest == "n3" || $scope.begin == "n3" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.728414;
                    $scope.lngbegin = 100.513182;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n3")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 57 minutes",
                  distance: 20.88,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n33" && $scope.dest == "n0" || $scope.begin == "n0" && $scope.dest == "n33")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n33")
                {
                    $scope.latbegin = 13.718858;
                    $scope.lngbegin = 100.512720;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n0")
                {
                    $scope.latbegin = 13.915332;
                    $scope.lngbegin = 100.494624;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "1 hour 0 minutes",
                  distance: 21.93,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n31" || $scope.begin == "n31" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 11 minutes",
                  distance: 2.58,
                  name: 'Green',
                  price: 10,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n30" || $scope.begin == "n30" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.842068;
                    $scope.lngbegin = 100.491147;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 18 minutes",
                  distance: 7.03,
                  name: 'Green',
                  price: 13,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n24" || $scope.begin == "n24" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.812884;
                    $scope.lngbegin = 100.513469;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n24")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 25 minutes",
                  distance: 10.55,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n16" || $scope.begin == "n16" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.781860;
                    $scope.lngbegin = 100.501076;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n16")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 31 minutes",
                  distance: 13.76,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n15" || $scope.begin == "n15" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.772132;
                    $scope.lngbegin = 100.500097;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n15")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 36 minutes",
                  distance: 14.83,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n12" || $scope.begin == "n12" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.763006;
                    $scope.lngbegin = 100.490625;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n12")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 40 minutes",
                  distance: 15.82,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n10" || $scope.begin == "n10" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.756003;
                    $scope.lngbegin = 100.486950;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n10")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 43 minutes",
                  distance: 16.6,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n9" || $scope.begin == "n9" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.752411;
                    $scope.lngbegin = 100.488293;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n9")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 48 minutes",
                  distance: 17,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n5" || $scope.begin == "n5" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.738621;
                    $scope.lngbegin = 100.504260;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n5")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 51 minutes",
                  distance: 18.58,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n3" || $scope.begin == "n3" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.728414;
                    $scope.lngbegin = 100.513182;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n3")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 54 minutes",
                  distance: 19.81,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n32" && $scope.dest == "n0" || $scope.begin == "n0" && $scope.dest == "n32")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n32")
                {
                    $scope.latbegin = 13.718858;
                    $scope.lngbegin = 100.512720;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n0")
                {
                    $scope.latbegin = 13.905270;
                    $scope.lngbegin = 100.491325;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 57 minutes",
                  distance: 20.86,
                  name: 'Green',
                  price: 32,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n31" && $scope.dest == "n30" || $scope.begin == "n30" && $scope.dest == "n31")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.842068;
                    $scope.lngbegin = 100.491147;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n30")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 7 minutes",
                  distance: 4.61,
                  name: 'Green',
                  price: 10,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n31" && $scope.dest == "n24" || $scope.begin == "n24" && $scope.dest == "n31")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.812884;
                    $scope.lngbegin = 100.513469;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n24")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 14 minutes",
                  distance: 8.41,
                  name: 'Green',
                  price: 30,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n31" && $scope.dest == "n16" || $scope.begin == "n16" && $scope.dest == "n31")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.781860;
                    $scope.lngbegin = 100.501076;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n16")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 20 minutes",
                  distance: 11.39,
                  name: 'Green',
                  price: 30,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n31" && $scope.dest == "n15" || $scope.begin == "n15" && $scope.dest == "n31")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.772132;
                    $scope.lngbegin = 100.500097;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n15")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 25 minutes",
                  distance: 12.45,
                  name: 'Green',
                  price: 30,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n31" && $scope.dest == "n12" || $scope.begin == "n12" && $scope.dest == "n31")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.763006;
                    $scope.lngbegin = 100.490625;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n12")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 29 minutes",
                  distance: 13.36,
                  name: 'Green',
                  price: 30,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n31" && $scope.dest == "n10" || $scope.begin == "n10" && $scope.dest == "n31")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.756003;
                    $scope.lngbegin = 100.486950;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n10")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 32 minutes",
                  distance: 14.13,
                  name: 'Green',
                  price: 30,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n31" && $scope.dest == "n9" || $scope.begin == "n9" && $scope.dest == "n31")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.752411;
                    $scope.lngbegin = 100.488293;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n9")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 37 minutes",
                  distance: 14.53,
                  name: 'Green',
                  price: 30,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n31" && $scope.dest == "n5" || $scope.begin == "n5" && $scope.dest == "n31")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.738621;
                    $scope.lngbegin = 100.504260;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n5")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 40 minutes",
                  distance: 16.2,
                  name: 'Green',
                  price: 30,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n31" && $scope.dest == "n3" || $scope.begin == "n3" && $scope.dest == "n31")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.728414;
                    $scope.lngbegin = 100.513182;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n3")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 43 minutes",
                  distance: 17.47,
                  name: 'Green',
                  price: 30,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n31" && $scope.dest == "n0" || $scope.begin == "n0" && $scope.dest == "n31")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n31")
                {
                    $scope.latbegin = 13.718858;
                    $scope.lngbegin = 100.512720;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n0")
                {
                    $scope.latbegin = 13.883051;
                    $scope.lngbegin = 100.484511;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 46 minutes",
                  distance: 18.51,
                  name: 'Green',
                  price: 30,
                  value: "greenline",
                  image: 'img/flags/greenflag.png'
              });
          }

          else if($scope.begin == "n30" && $scope.dest == "n24" || $scope.begin == "n24" && $scope.dest == "n30")
          {
                window.localStorage.setItem("begin_pier", $scope.begin);
                window.localStorage.setItem("dest_pier", $scope.dest);
                
                if($scope.begin == "n30")
                {
                    $scope.latbegin = 13.812884;
                    $scope.lngbegin = 100.513469;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                else if($scope.begin == "n24")
                {
                    $scope.latbegin = 13.842068;
                    $scope.lngbegin = 100.491147;
                    window.localStorage.setItem("latbegin",$scope.latbegin);
                    window.localStorage.setItem("lngbegin",$scope.lngbegin);
                }
                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 46 minutes",
                  distance: 18.51,
                  name: 'Green',
                  price: 30,
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

                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 10 minutes",
                  distance: 3.75,
                  name: 'Blue',
                  price: 10,
                  value: "blueline",
                  image: 'img/flags/blueflag.png'
              });

                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 10 minutes",
                  distance: 3.75,
                  name: 'Yellow',
                  price: 10,
                  value: "yellowline",
                  image: 'img/flags/yellowflag.png'
              });

                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 10 minutes",
                  distance: 3.75,
                  name: 'Normal',
                  price: 10,
                  value: "normalline",
                  image: 'img/flags/normalflag.png'
              });

                $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 10 minutes",
                  distance: 3.75,
                  name: 'Orange',
                  price: 10,
                  value: "orangeline",
                  image: 'img/flags/orangeflag.png'
              });

                
          }
          
          else
          {
              $scope.Plist.push({
                  id: $scope.Plist.length + 1,
                  time: "0 hour 0 minutes",
                  distance: 0,
                  name: 'There is no boat from here to go there',
                  price: 0,
                  value: "",
                  image: ''
              });

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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "t4",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: null
        });   
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "t3",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: null
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "t2",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: null
        });      
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "t1",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: null
        });     
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "33",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: null
        });
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "32",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: null
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "31",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: null
        }); 
        alert("You have arrived your destination : " + $scope.dest);
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "30",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });   
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "29s",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });  
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "29",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "28",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "27",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "26",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "25",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "24",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });      
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "23",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });      
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "22",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });      
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "21",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });     
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "20",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });      
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
        if($scope.dest == $scope.destn19)  
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "19",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });     
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
        if($scope.dest == $scope.destn18) 
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "18",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });      
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
        if($scope.dest == $scope.destn17s)   
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "17s",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });    
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "16",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });    
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "15",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });     
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "14",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });      
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "13",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "12",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });    
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "11",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });    
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "10",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "9s",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });     
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "9",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });      
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "8",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "7",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });  
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "6",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "5",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "4",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });      
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "3",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });       
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "2",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });    
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "1",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });      
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
        var alarmTime = new Date();
        alarmTime.setMinutes(alarmTime.getMinutes() + 0.5);
        $cordovaLocalNotification.add({
            id: "0",
            date: alarmTime,
            message: "You have arrived your destination(คุณเดินทางมาถึงท่าปลายทางของคุณแล้ว) : " + $scope.dest,
            title: "ExBoat",
            autoCancel: true,
            sound: true
        });      
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
[{"id":1,"first_name":"Emergency medical sevice Vajira hospital","last_name":"(หน่วยแพทย์กู้ชีวิต วชิรพยาบาล)","country":"Cyprus","ip_address":"153.88.89.148","email":"progers@yata.net","phoneno":"1554","img":"img/emergency/e04.png"},
{"id":2,"first_name":"Police Station","last_name":"(สถานีตำรวจ)","country":"Croatia","ip_address":"209.73.121.212","email":"jgordon@skivee.biz","phoneno":"191","img":"img/emergency/e08.png"},
{"id":3,"first_name":"Narenthorn EMS Center","last_name":"(เจ็บป่วยฉุกเฉิน​ (ศูนย์นเรนทร))","country":"Armenia","ip_address":"164.214.217.162","email":"khamilton@rhynyx.biz","phoneno":"1669","img":"img/emergency/e01.png"},
{"id":4,"first_name":"Tourist police","last_name":"(สายด่วนตำรวจท่องเที่ยว)","country":"Mauritius","ip_address":"8.199.242.67","email":"sjohnson@jabbertype.mil","phoneno":"1155","img":"img/emergency/e07.png"},
{"id":5,"first_name":"Marine police","last_name":"(อุบัติเหตุทางน้ำ กองบัญชาการตำรวจ)","country":"Thailand","ip_address":"230.207.100.163","email":"jpalmer@avamm.org","phoneno":"1196","img":"img/emergency/e06.png"},
{"id":6,"first_name":"Harbor Department","last_name":"(สายด่วนกรมเจ้าท่า (เหตุด่วนทางน้ำ))","country":"Germany","ip_address":"150.190.116.1","email":"lfranklin@eare.mil","phoneno":"1199","img":"img/emergency/e05.png"},
{"id":7,"first_name":"Erawan Bangkok Emergency Medical Service","last_name":"(ศูนย์เอราวัณ สำนักการแพทย์)","country":"Serbia","ip_address":"162.156.29.99","email":"mgordon@flashset.org","phoneno":"1646","img":"img/emergency/e03.png"},
{"id":8,"first_name":"Bangkok mass transit authority","last_name":"(องค์การขนส่งมวลชนกรุงเทพ (ขสมก.))","country":"Grenada","ip_address":"13.177.156.223","email":"sburns@eimbee.info","phoneno":"1348","img":"img/emergency/e09.png"},
{"id":9,"first_name":"BUG telephone service","last_name":"(บริการสอบถามข้อมูลโทรศัพท์ BUG)","country":"Croatia","ip_address":"115.133.81.82","email":"wburton@dynazzy.info","phoneno":"1113","img":"img/emergency/e10.png"},
{"id":10,"first_name":"Js100 radio","last_name":"(สถานีวิทยุ จส.100)","country":"United States Virgin Islands","ip_address":"113.49.63.18","email":"tsimmons@devpulse.mil","phoneno":"*1808","img":"img/emergency/e11.png"},
{"id":11,"first_name":"POH TECK TUNG Foundation","last_name":"(ปอเต็กติ้ง)","country":"Mexico","ip_address":"92.89.76.196","email":"klarson@browseblab.info","phoneno":"​0-2226-4444-8","img":"img/emergency/e12.png"},
{"id":12,"first_name":"Ruamkatanyu Foundation","last_name":"(มูลนิธิร่วมกตัญญู)","country":"Cuba","ip_address":"223.180.48.70","email":"pwelch@skippad.edu","phoneno":"0-2751-0951-3","img":"img/emergency/e13.png"},
{"id":13,"first_name":"Emergency medical service","last_name":"(หน่วยแพทย์กู้ชีพ กทม.)","country":"British Indian Ocean Territory","ip_address":"200.150.119.13","email":"nparker@twitternation.net","phoneno":"1555","img":"img/emergency/e02.png"}
];


