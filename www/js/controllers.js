angular.module('starter.controllers', [])



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

.controller('PopupCtrl',function($scope, $ionicPopup) {

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

