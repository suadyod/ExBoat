angular.module('starter.map', [])

.controller('MapCtrl', function($scope, $ionicLoading, $compile, $ionicModal) {

      function initialize() {
        var pier1 = new google.maps.LatLng(13.723298,100.513541);
        
        var mapOptions = {
          center: pier1,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        //var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        //var compiled = $compile(contentString)($scope);
        
        //var img = {
        //  url: 'img/ios7-location-outline.png',
        //  scaledSize: new google.maps.Size(50, 50)
        //};
        var marker1 = new google.maps.Marker({
          position: pier1,
          map: map,
          animation: google.maps.Animation.DROP,
          //icon: img,
          title: 'point1'
        });
        var infoText1 = "<div><a ng-click='popopen1()'><br><h1>ท่าโอเรียนเท็ล</h1></a></div>";
        var compiled1 = $compile(infoText1)($scope);
        var infowindow1 = new google.maps.InfoWindow({
          content: compiled1[0]
        });
        google.maps.event.addListener(marker1, 'click', function() {
          infowindow1.open(map,marker1);
        });


        var pier0 = new google.maps.LatLng(13.718858,100.512720);
        var marker0 = new google.maps.Marker({
          position: pier0,
          map: map ,
          title:"point0"
        })
        var infoText0 = "<div><a ng-click='popopen0()'><br><h1>ท่าสาทร(ตากสิน)</h1></a></div>";
        var compiled0 = $compile(infoText0)($scope);
        var infowindow0 = new google.maps.InfoWindow({
          content: compiled0[0]
        });
        google.maps.event.addListener(marker0, 'click', function() {
          infowindow0.open(map,marker0);
        });


        var pier2 = new google.maps.LatLng(13.726021,100.513535);
        var marker2 = new google.maps.Marker({
          position: pier2,
          map: map ,
          title:"point2"
        })
        var infoText2 = "<div><a ng-click='popopen2()'><br><h1>ท่าวัดม่วงแค</h1></a></div>";
        var compiled2 = $compile(infoText2)($scope);
        var infowindow2 = new google.maps.InfoWindow({
          content: compiled2[0]
        });
        google.maps.event.addListener(marker2, 'click', function() {
          infowindow2.open(map,marker2);
        });


        var pier3 = new google.maps.LatLng(13.728414,100.513182);
        var marker3 = new google.maps.Marker({
          position: pier3,
          map: map ,
          title:"point3"
        })
        var infoText3 = "<div><a ng-click='popopen3()'><br><h1>ท่าสี่พระยา</h1></a></div>";
        var compiled3 = $compile(infoText3)($scope);
        var infowindow3 = new google.maps.InfoWindow({
          content: compiled3[0]
        });
        google.maps.event.addListener(marker3, 'click', function() {
          infowindow3.open(map,marker3);
        });


        var pier4 = new google.maps.LatLng(13.732493,100.511836);
        var marker4 = new google.maps.Marker({
          position: pier4,
          map: map ,
          title:"point4"
        })
        var infoText4 = "<div><a ng-click='popopen4()'><br><h1>ท่ากรมเจ้าท่า</h1></a></div>";
        var compiled4 = $compile(infoText4)($scope);
        var infowindow4 = new google.maps.InfoWindow({
          content: compiled4[0]
        });
        google.maps.event.addListener(marker4, 'click', function() {
          infowindow4.open(map,marker4);
        });


        var pier5 = new google.maps.LatLng(13.738621,100.504260);
        var marker5 = new google.maps.Marker({
          position: pier5,
          map: map ,
          title:"point5"
        })
        var infoText5 = "<div><a ng-click='popopen5()'><br><h1>ท่าราชวงศ์</h1></a></div>";
        var compiled5 = $compile(infoText5)($scope);
        var infowindow5 = new google.maps.InfoWindow({
          content: compiled5[0]
        });
        google.maps.event.addListener(marker5, 'click', function() {
          infowindow5.open(map,marker5);
        });


        var pier6 = new google.maps.LatLng(13.739703,100.498394);
        var marker6 = new google.maps.Marker({
          position: pier6,
          map: map ,
          title:"point6"
        })
        var infoText6 = "<div><a ng-click='popopen6()'><br><h1>ท่าสะพานพุทธ</h1></a></div>";
        var compiled6 = $compile(infoText6)($scope);
        var infowindow6 = new google.maps.InfoWindow({
          content: compiled6[0]
        });
        google.maps.event.addListener(marker6, 'click', function() {
          infowindow6.open(map,marker6);
        });


        var pier7 = new google.maps.LatLng(13.741572,100.493959);
        var marker7 = new google.maps.Marker({
          position: pier7,
          map: map ,
          title:"point7"
        })
        var infoText7 = "<div><a ng-click='popopen7()'><br><h1>ท่าราชินี</h1></a></div>";
        var compiled7 = $compile(infoText7)($scope);
        var infowindow7 = new google.maps.InfoWindow({
          content: compiled7[0]
        });
        google.maps.event.addListener(marker7, 'click', function() {
          infowindow7.open(map,marker7);
        });


        var pier8 = new google.maps.LatLng(13.746285,100.489872);
        var marker8 = new google.maps.Marker({
          position: pier8,
          map: map ,
          title:"point8"
        })
        var infoText8 = "<div><a ng-click='popopen8()'><br><h1>ท่าเตียน</h1></a></div>";
        var compiled8 = $compile(infoText8)($scope);
        var infowindow8 = new google.maps.InfoWindow({
          content: compiled8[0]
        });
        google.maps.event.addListener(marker8, 'click', function() {
          infowindow8.open(map,marker8);
        });


        var pier9 = new google.maps.LatLng(13.752411,100.488293);
        var marker9 = new google.maps.Marker({
          position: pier9,
          map: map ,
          title:"point9"
        })
        var infoText9 = "<div><a ng-click='popopen9()'><br><h1>ท่าช้าง</h1></a></div>";
        var compiled9 = $compile(infoText9)($scope);
        var infowindow9 = new google.maps.InfoWindow({
          content: compiled9[0]
        });
        google.maps.event.addListener(marker9, 'click', function() {
          infowindow9.open(map,marker9);
        });


        var pier9s = new google.maps.LatLng(13.756655,100.488660);
        var marker9s = new google.maps.Marker({
          position: pier9s,
          map: map ,
          title:"point9s"
        })
        var infoText9s = "<div><a ng-click='popopen9s()'><br><h1>ท่ามหาราช</h1></a></div>";
        var compiled9s = $compile(infoText9s)($scope);
        var infowindow9s = new google.maps.InfoWindow({
          content: compiled9s[0]
        });
        google.maps.event.addListener(marker9s, 'click', function() {
          infowindow9s.open(map,marker9s);
        });


        var pier10 = new google.maps.LatLng(13.756003,100.486950);
        var marker10 = new google.maps.Marker({
          position: pier10,
          map: map ,
          title:"point10"
        })
        var infoText10 = "<div><a ng-click='popopen10()'><br><h1>ท่าวังหลัง(พรานนก)</h1></a></div>";
        var compiled10 = $compile(infoText10)($scope);
        var infowindow10 = new google.maps.InfoWindow({
          content: compiled10[0]
        });
        google.maps.event.addListener(marker10, 'click', function() {
          infowindow10.open(map,marker10);
        });


        var pier11 = new google.maps.LatLng(13.759227,100.487517);
        var marker11 = new google.maps.Marker({
          position: pier11,
          map: map ,
          title:"point11"
        })
        var infoText11 = "<div><a ng-click='popopen11()'><br><h1>ท่ารถไฟ</h1></a></div>";
        var compiled11 = $compile(infoText11)($scope);
        var infowindow11 = new google.maps.InfoWindow({
          content: compiled11[0]
        });
        google.maps.event.addListener(marker11, 'click', function() {
          infowindow11.open(map,marker11);
        });


        var pier12 = new google.maps.LatLng(13.763006,100.490625);
        var marker12 = new google.maps.Marker({
          position: pier12,
          map: map ,
          title:"point12"
        })
        var infoText12 = "<div><a ng-click='popopen12()'><br><h1>ท่าปิ่นเกล้า</h1></a></div>";
        var compiled12 = $compile(infoText12)($scope);
        var infowindow12 = new google.maps.InfoWindow({
          content: compiled12[0]
        });
        google.maps.event.addListener(marker12, 'click', function() {
          infowindow12.open(map,marker12);
        });


        var pier13 = new google.maps.LatLng(13.763544,100.494038);
        var marker13 = new google.maps.Marker({
          position: pier13,
          map: map ,
          title:"point13"
        })
        var infoText13 = "<div><a ng-click='popopen13()'><br><h1>ท่าพระอาทิตย์</h1></a></div>";
        var compiled13 = $compile(infoText13)($scope);
        var infowindow13 = new google.maps.InfoWindow({
          content: compiled13[0]
        });
        google.maps.event.addListener(marker13, 'click', function() {
          infowindow13.open(map,marker13);
        });
        

        var pier14 = new google.maps.LatLng(13.767593,100.497456);
        var marker14 = new google.maps.Marker({
          position: pier14,
          map: map ,
          title:"point14"
        })
        var infoText14 = "<div><a ng-click='popopen14()'><br><h1>ท่าพระราม 8</h1></a></div>";
        var compiled14 = $compile(infoText14)($scope);
        var infowindow14 = new google.maps.InfoWindow({
          content: compiled14[0]
        });
        google.maps.event.addListener(marker14, 'click', function() {
          infowindow14.open(map,marker14);
        });


        var pier15 = new google.maps.LatLng(13.772132,100.500097);
        var marker15 = new google.maps.Marker({
          position: pier15,
          map: map ,
          title:"point15"
        })
        var infoText15 = "<div><a ng-click='popopen15()'><br><h1>ท่าเทเวศร์</h1></a></div>";
        var compiled15 = $compile(infoText15)($scope);
        var infowindow15 = new google.maps.InfoWindow({
          content: compiled15[0]
        });
        google.maps.event.addListener(marker15, 'click', function() {
          infowindow15.open(map,marker15);
        });


        var pier16 = new google.maps.LatLng(13.781860,100.501076);
        var marker16 = new google.maps.Marker({
          position: pier16,
          map: map ,
          title:"point16"
        })
        var infoText16 = "<div><a ng-click='popopen16()'><br><h1>ท่าสะพานกรุงธน (ซังฮี้)</h1></a></div>";
        var compiled16 = $compile(infoText16)($scope);
        var infowindow16 = new google.maps.InfoWindow({
          content: compiled16[0]
        });
        google.maps.event.addListener(marker16, 'click', function() {
          infowindow16.open(map,marker16);
        });


        var pier17 = new google.maps.LatLng(13.783995,100.502285);
        var marker17 = new google.maps.Marker({
          position: pier17,
          map: map ,
          title:"point17"
        })
        var infoText17 = "<div><a ng-click='popopen17()'><br><h1>ท่าวัดเทพนารี</h1></a></div>";
        var compiled17 = $compile(infoText17)($scope);
        var infowindow17 = new google.maps.InfoWindow({
          content: compiled17[0]
        });
        google.maps.event.addListener(marker17, 'click', function() {
          infowindow17.open(map,marker17);
        });


        var pier17s = new google.maps.LatLng(13.785604,100.503352);
        var marker17s = new google.maps.Marker({
          position: pier17s,
          map: map ,
          title:"point17s"
        })
        var infoText17s = "<div><a ng-click='popopen17s()'><br><h1>ท่าวัดเทพากร</h1></a></div>";
        var compiled17s = $compile(infoText17s)($scope);
        var infowindow17s = new google.maps.InfoWindow({
          content: compiled17s[0]
        });
        google.maps.event.addListener(marker17s, 'click', function() {
          infowindow17s.open(map,marker17s);
        });
        

        var pier18 = new google.maps.LatLng(13.787513,100.508056);
        var marker18 = new google.maps.Marker({
          position: pier18,
          map: map ,
          title:"point18"
        })
        var infoText18 = "<div><a ng-click='popopen18()'><br><h1>ท่าพายัพ</h1></a></div>";
        var compiled18 = $compile(infoText18)($scope);
        var infowindow18 = new google.maps.InfoWindow({
          content: compiled18[0]
        });
        google.maps.event.addListener(marker18, 'click', function() {
          infowindow18.open(map,marker18);
        });


        var pier19 = new google.maps.LatLng(13.788765,100.509529);
        var marker19 = new google.maps.Marker({
          position: pier19,
          map: map ,
          title:"point19"
        })
        var infoText19 = "<div><a ng-click='popopen19()'><br><h1>ท่ากรมชลประทาน</h1></a></div>";
        var compiled19 = $compile(infoText19)($scope);
        var infowindow19 = new google.maps.InfoWindow({
          content: compiled19[0]
        });
        google.maps.event.addListener(marker19, 'click', function() {
          infowindow19.open(map,marker19);
        });


        var pier20 = new google.maps.LatLng(13.791118,100.511646);
        var marker20 = new google.maps.Marker({
          position: pier20,
          map: map ,
          title:"point20"
        })
        var infoText20 = "<div><a ng-click='popopen20()'><br><h1>ท่าเขียวไข่กา</h1></a></div>";
        var compiled20 = $compile(infoText20)($scope);
        var infowindow20 = new google.maps.InfoWindow({
          content: compiled20[0]
        });
        google.maps.event.addListener(marker20, 'click', function() {
          infowindow20.open(map,marker20);
        });


        var pier21 = new google.maps.LatLng(13.798805,100.517013);
        var marker21 = new google.maps.Marker({
          position: pier21,
          map: map ,
          title:"point21"
        })
        var infoText21 = "<div><a ng-click='popopen21()'><br><h1>ท่าเกียกกาย</h1></a></div>";
        var compiled21 = $compile(infoText21)($scope);
        var infowindow21 = new google.maps.InfoWindow({
          content: compiled21[0]
        });
        google.maps.event.addListener(marker21, 'click', function() {
          infowindow21.open(map,marker21);
        });


        var pier22 = new google.maps.LatLng(13.806427,100.518826);
        var marker22 = new google.maps.Marker({
          position: pier22,
          map: map ,
          title:"point22"
        })
        var infoText22 = "<div><a ng-click='popopen22()'><br><h1>ท่าบางโพ</h1></a></div>";
        var compiled22 = $compile(infoText22)($scope);
        var infowindow22 = new google.maps.InfoWindow({
          content: compiled22[0]
        });
        google.maps.event.addListener(marker22, 'click', function() {
          infowindow22.open(map,marker22);
        });


        var pier23 = new google.maps.LatLng(13.812064,100.517409);
        var marker23 = new google.maps.Marker({
          position: pier23,
          map: map ,
          title:"point23"
        })
        var infoText23 = "<div><a ng-click='popopen23()'><br><h1>ท่าวัดสร้อยทอง</h1></a></div>";
        var compiled23 = $compile(infoText23)($scope);
        var infowindow23 = new google.maps.InfoWindow({
          content: compiled23[0]
        });
        google.maps.event.addListener(marker23, 'click', function() {
          infowindow23.open(map,marker23);
        });


        var pier24 = new google.maps.LatLng(13.812884,100.513469);
        var marker24 = new google.maps.Marker({
          position: pier24,
          map: map ,
          title:"point24"
        })
        var infoText24 = "<div><a ng-click='popopen24()'><br><h1>ท่าพระราม 7</h1></a></div>";
        var compiled24 = $compile(infoText24)($scope);
        var infowindow24 = new google.maps.InfoWindow({
          content: compiled24[0]
        });
        google.maps.event.addListener(marker24, 'click', function() {
          infowindow24.open(map,marker24);
        });


        var pier25 = new google.maps.LatLng(13.817649,100.505528);
        var marker25 = new google.maps.Marker({
          position: pier25,
          map: map ,
          title:"point25"
        })
        var infoText25 = "<div><a ng-click='popopen25()'><br><h1>ท่าพิบูลย์สงคราม 1</h1></a></div>";
        var compiled25 = $compile(infoText25)($scope);
        var infowindow25 = new google.maps.InfoWindow({
          content: compiled25[0]
        });
        google.maps.event.addListener(marker25, 'click', function() {
          infowindow25.open(map,marker25);
        });


        var pier26 = new google.maps.LatLng(13.822288,100.502047);
        var marker26 = new google.maps.Marker({
          position: pier26,
          map: map ,
          title:"point26"
        })
        var infoText26 = "<div><a ng-click='popopen26()'><br><h1>ท่าวัดเขมา</h1></a></div>";
        var compiled26 = $compile(infoText26)($scope);
        var infowindow26 = new google.maps.InfoWindow({
          content: compiled26[0]
        });
        google.maps.event.addListener(marker26, 'click', function() {
          infowindow26.open(map,marker26);
        });


        var pier27 = new google.maps.LatLng(13.824440,100.498776);
        var marker27 = new google.maps.Marker({
          position: pier27,
          map: map ,
          title:"point27"
        })
        var infoText27 = "<div><a ng-click='popopen27()'><br><h1>ท่าวัดตึก</h1></a></div>";
        var compiled27 = $compile(infoText27)($scope);
        var infowindow27 = new google.maps.InfoWindow({
          content: compiled27[0]
        });
        google.maps.event.addListener(marker27, 'click', function() {
          infowindow27.open(map,marker27);
        });


        var pier28 = new google.maps.LatLng(13.828306,100.496632);
        var marker28 = new google.maps.Marker({
          position: pier28,
          map: map ,
          title:"point28"
        })
        var infoText28 = "<div><a ng-click='popopen28()'><br><h1>ท่าเขียน</h1></a></div>";
        var compiled28 = $compile(infoText28)($scope);
        var infowindow28 = new google.maps.InfoWindow({
          content: compiled28[0]
        });
        google.maps.event.addListener(marker28, 'click', function() {
          infowindow28.open(map,marker28);
        });


        var pier29 = new google.maps.LatLng(13.832842,100.496391);
        var marker29 = new google.maps.Marker({
          position: pier29,
          map: map ,
          title:"point29"
        })
        var infoText29 = "<div><a ng-click='popopen29()'><br><h1>ท่าพิบูลย์สงคราม 2</h1></a></div>";
        var compiled29 = $compile(infoText29)($scope);
        var infowindow29 = new google.maps.InfoWindow({
          content: compiled29[0]
        });
        google.maps.event.addListener(marker29, 'click', function() {
          infowindow29.open(map,marker29);
        });



        var pier29s = new google.maps.LatLng(13.832215,100.493824);
        var marker29s = new google.maps.Marker({
          position: pier29s,
          map: map ,
          title:"point29s"
        })
        var infoText29s = "<div><a ng-click='popopen29s()'><br><h1>ท่าพระราม 5</h1></a></div>";
        var compiled29s = $compile(infoText29s)($scope);
        var infowindow29s = new google.maps.InfoWindow({
          content: compiled29s[0]
        });
        google.maps.event.addListener(marker29s, 'click', function() {
          infowindow29s.open(map,marker29s);
        });



        var pier30 = new google.maps.LatLng(13.842068,100.491147);
        var marker30 = new google.maps.Marker({
          position: pier30,
          map: map ,
          title:"point30"
        })
        var infoText30 = "<div><a ng-click='popopen30()'><br><h1>ท่านนทบุรี (พิบูลย์สงคราม 3)</h1></a></div>";
        var compiled30 = $compile(infoText30)($scope);
        var infowindow30 = new google.maps.InfoWindow({
          content: compiled30[0]
        });
        google.maps.event.addListener(marker30, 'click', function() {
          infowindow30.open(map,marker30);
        });



        var pier31 = new google.maps.LatLng(13.883051,100.484511);
        var marker31 = new google.maps.Marker({
          position: pier31,
          map: map ,
          title:"point31"
        })
        var infoText31 = "<div><a ng-click='popopen31()'><br><h1>ท่ากระทรวงพาณิชย์</h1></a></div>";
        var compiled31 = $compile(infoText31)($scope);
        var infowindow31 = new google.maps.InfoWindow({
          content: compiled31[0]
        });
        google.maps.event.addListener(marker31, 'click', function() {
          infowindow31.open(map,marker31);
        });


        var pier32 = new google.maps.LatLng(13.905270,100.491325);
        var marker32 = new google.maps.Marker({
          position: pier32,
          map: map ,
          title:"point32"
        })
        var infoText32 = "<div><a ng-click='popopen32()'><br><h1>ท่าวัดกลางเกร็ด</h1></a></div>";
        var compiled32 = $compile(infoText32)($scope);
        var infowindow32 = new google.maps.InfoWindow({
          content: compiled32[0]
        });
        google.maps.event.addListener(marker32, 'click', function() {
          infowindow32.open(map,marker32);
        });


        var pier33 = new google.maps.LatLng(13.915332,100.494624);
        var marker33 = new google.maps.Marker({
          position: pier33,
          map: map ,
          title:"point33"
        })
        var infoText33 = "<div><a ng-click='popopen33()'><br><h1>ท่าปากเกร็ด</h1></a></div>";
        var compiled33 = $compile(infoText33)($scope);
        var infowindow33 = new google.maps.InfoWindow({
          content: compiled33[0]
        });
        google.maps.event.addListener(marker33, 'click', function() {
          infowindow33.open(map,marker33);
        });


        var pierT1 = new google.maps.LatLng(13.712662,100.507183);
        var markerT1 = new google.maps.Marker({
          position: pierT1,
          map: map ,
          title:"pointT1"
        })
        var infoTextT1 = "<div><a ng-click='popopenT1()'><br><h1>ท่าวัดเศวตฉัตร</h1></a></div>";
        var compiledT1 = $compile(infoTextT1)($scope);
        var infowindowT1 = new google.maps.InfoWindow({
          content: compiledT1[0]
        });
        google.maps.event.addListener(markerT1, 'click', function() {
          infowindowT1.open(map,markerT1);
        });


        var pierT2 = new google.maps.LatLng(13.709201,100.506626);
        var markerT2 = new google.maps.Marker({
          position: pierT2,
          map: map ,
          title:"pointT2"
        })
        var infoTextT2 = "<div><a ng-click='popopenT2()'><br><h1>ท่าวัดวธจรรยาวาส</h1></a></div>";
        var compiledT2 = $compile(infoTextT2)($scope);
        var infowindowT2 = new google.maps.InfoWindow({
          content: compiledT2[0]
        });
        google.maps.event.addListener(markerT2, 'click', function() {
          infowindowT2.open(map,markerT2);
        });


        var pierT3 = new google.maps.LatLng(13.706542,100.503840);
        var markerT3 = new google.maps.Marker({
          position: pierT3,
          map: map ,
          title:"pointT3"
        })
        var infoTextT3 = "<div><a ng-click='popopenT3()'><br><h1>ท่าวัดราชสิงขร</h1></a></div>";
        var compiledT3 = $compile(infoTextT3)($scope);
        var infowindowT3 = new google.maps.InfoWindow({
          content: compiledT3[0]
        });
        google.maps.event.addListener(markerT3, 'click', function() {
          infowindowT3.open(map,markerT3);
        });


        var pierT4 = new google.maps.LatLng(13.685184,100.500157);
        var markerT4 = new google.maps.Marker({
          position: pierT4,
          map: map ,
          title:"pointT4"
        })
        var infoTextT4 = "<div><a ng-click='popopenT4()'><br><h1>ท่าราษฎร์บูรณะ (บิ๊กซี)</h1></a></div>";
        var compiledT4 = $compile(infoTextT4)($scope);
        var infowindowT4 = new google.maps.InfoWindow({
          content: compiledT4[0]
        });
        google.maps.event.addListener(markerT4, 'click', function() {
          infowindowT4.open(map,markerT4);
        });


        $scope.map = map;
      }

      ionic.Platform.ready(initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      

      //Modal#0
      $ionicModal.fromTemplateUrl('templates/popup/N0.html', {
        id: '0',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop0 = modal;
      });

      $scope.popopen0 = function(index) {
      $scope.pop0.show();
      };

      $scope.popclose0 = function(index) {
      $scope.pop0.hide();
      };


      //Modal#1
      $ionicModal.fromTemplateUrl('templates/popup/N1.html', {
        id: '1',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop1 = modal;
      });

      $scope.popopen1 = function(index) {
      $scope.pop1.show();
      };

      $scope.popclose1 = function(index) {
      $scope.pop1.hide();
      };

      //Modal#2
      $ionicModal.fromTemplateUrl('templates/popup/N2.html', {
        id: '2',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop2 = modal;
      });

      $scope.popopen2 = function(index) {
      $scope.pop2.show();
      };

      $scope.popclose2 = function(index) {
      $scope.pop2.hide();
      };

      //Modal#3
      $ionicModal.fromTemplateUrl('templates/popup/N3.html', {
        id: '3',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop3 = modal;
      });

      $scope.popopen3 = function(index) {
      $scope.pop3.show();
      };

      $scope.popclose3 = function(index) {
      $scope.pop3.hide();
      };

      //Modal#4
      $ionicModal.fromTemplateUrl('templates/popup/N4.html', {
        id: '4',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop4 = modal;
      });

      $scope.popopen4 = function(index) {
      $scope.pop4.show();
      };

      $scope.popclose4 = function(index) {
      $scope.pop4.hide();
      };

      //Modal#5
      $ionicModal.fromTemplateUrl('templates/popup/N5.html', {
        id: '5',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop5 = modal;
      });

      $scope.popopen5 = function(index) {
      $scope.pop5.show();
      };

      $scope.popclose5 = function(index) {
      $scope.pop5.hide();
      };

      //Modal#6
      $ionicModal.fromTemplateUrl('templates/popup/N6.html', {
        id: '6',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop6 = modal;
      });

      $scope.popopen6 = function(index) {
      $scope.pop6.show();
      };

      $scope.popclose6 = function(index) {
      $scope.pop6.hide();
      };

      //Modal#7
      $ionicModal.fromTemplateUrl('templates/popup/N7.html', {
        id: '7',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop7 = modal;
      });

      $scope.popopen7 = function(index) {
      $scope.pop7.show();
      };

      $scope.popclose7 = function(index) {
      $scope.pop7.hide();
      };

      //Modal#8
      $ionicModal.fromTemplateUrl('templates/popup/N8.html', {
        id: '8',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop8 = modal;
      });

      $scope.popopen8 = function(index) {
      $scope.pop8.show();
      };

      $scope.popclose8 = function(index) {
      $scope.pop8.hide();
      };

      //Modal#9
      $ionicModal.fromTemplateUrl('templates/popup/N9.html', {
        id: '9',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop9 = modal;
      });

      $scope.popopen9 = function(index) {
      $scope.pop9.show();
      };

      $scope.popclose9 = function(index) {
      $scope.pop9.hide();
      };

      //Modal#9s
      $ionicModal.fromTemplateUrl('templates/popup/N9s.html', {
        id: '95',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop9s = modal;
      });

      $scope.popopen9s = function(index) {
      $scope.pop9s.show();
      };

      $scope.popclose9s = function(index) {
      $scope.pop9s.hide();
      };

      //Modal#10
      $ionicModal.fromTemplateUrl('templates/popup/N10.html', {
        id: '10',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop10 = modal;
      });

      $scope.popopen10 = function(index) {
      $scope.pop10.show();
      };

      $scope.popclose10 = function(index) {
      $scope.pop10.hide();
      };

      //Modal#11
      $ionicModal.fromTemplateUrl('templates/popup/N11.html', {
        id: '11',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop11 = modal;
      });

      $scope.popopen11 = function(index) {
      $scope.pop11.show();
      };

      $scope.popclose11 = function(index) {
      $scope.pop11.hide();
      };

      //Modal#12
      $ionicModal.fromTemplateUrl('templates/popup/N12.html', {
        id: '12',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop12 = modal;
      });

      $scope.popopen12 = function(index) {
      $scope.pop12.show();
      };

      $scope.popclose12 = function(index) {
      $scope.pop12.hide();
      };

      //Modal#13
      $ionicModal.fromTemplateUrl('templates/popup/N13.html', {
        id: '13',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop13 = modal;
      });

      $scope.popopen13 = function(index) {
      $scope.pop13.show();
      };

      $scope.popclose13 = function(index) {
      $scope.pop13.hide();
      };

      //Modal#14
      $ionicModal.fromTemplateUrl('templates/popup/N14.html', {
        id: '14',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop14 = modal;
      });

      $scope.popopen14 = function(index) {
      $scope.pop14.show();
      };

      $scope.popclose14 = function(index) {
      $scope.pop14.hide();
      };

      //Modal#15
      $ionicModal.fromTemplateUrl('templates/popup/N15.html', {
        id: '15',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop15 = modal;
      });

      $scope.popopen15 = function(index) {
      $scope.pop15.show();
      };

      $scope.popclose15 = function(index) {
      $scope.pop15.hide();
      };

      //Modal#16
      $ionicModal.fromTemplateUrl('templates/popup/N16.html', {
        id: '16',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop16 = modal;
      });

      $scope.popopen16 = function(index) {
      $scope.pop16.show();
      };

      $scope.popclose16 = function(index) {
      $scope.pop16.hide();
      };

      //Modal#17
      $ionicModal.fromTemplateUrl('templates/popup/N17.html', {
        id: '17',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop17 = modal;
      });

      $scope.popopen17 = function(index) {
      $scope.pop17.show();
      };

      $scope.popclose17 = function(index) {
      $scope.pop17.hide();
      };

      //Modal#17s
      $ionicModal.fromTemplateUrl('templates/popup/N17s.html', {
        id: '175',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop17s = modal;
      });

      $scope.popopen17s = function(index) {
      $scope.pop17s.show();
      };

      $scope.popclose17s = function(index) {
      $scope.pop17s.hide();
      };

      //Modal#18
      $ionicModal.fromTemplateUrl('templates/popup/N18.html', {
        id: '18',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop18 = modal;
      });

      $scope.popopen18 = function(index) {
      $scope.pop18.show();
      };

      $scope.popclose18 = function(index) {
      $scope.pop18.hide();
      };

      //Modal#19
      $ionicModal.fromTemplateUrl('templates/popup/N19.html', {
        id: '19',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop19 = modal;
      });

      $scope.popopen19 = function(index) {
      $scope.pop19.show();
      };

      $scope.popclose19 = function(index) {
      $scope.pop19.hide();
      };

      //Modal#20
      $ionicModal.fromTemplateUrl('templates/popup/N20.html', {
        id: '20',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop20 = modal;
      });

      $scope.popopen20 = function(index) {
      $scope.pop20.show();
      };

      $scope.popclose20 = function(index) {
      $scope.pop20.hide();
      };

      //Modal#21
      $ionicModal.fromTemplateUrl('templates/popup/N21.html', {
        id: '21',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop21 = modal;
      });

      $scope.popopen21 = function(index) {
      $scope.pop21.show();
      };

      $scope.popclose21 = function(index) {
      $scope.pop21.hide();
      };

      //Modal#22
      $ionicModal.fromTemplateUrl('templates/popup/N22.html', {
        id: '22',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop22 = modal;
      });

      $scope.popopen22 = function(index) {
      $scope.pop22.show();
      };

      $scope.popclose22 = function(index) {
      $scope.pop22.hide();
      };

      //Modal#23
      $ionicModal.fromTemplateUrl('templates/popup/N23.html', {
        id: '23',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop23 = modal;
      });

      $scope.popopen23 = function(index) {
      $scope.pop23.show();
      };

      $scope.popclose23 = function(index) {
      $scope.pop23.hide();
      };

      //Modal#24
      $ionicModal.fromTemplateUrl('templates/popup/N24.html', {
        id: '24',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop24 = modal;
      });

      $scope.popopen24 = function(index) {
      $scope.pop24.show();
      };

      $scope.popclose24 = function(index) {
      $scope.pop24.hide();
      };

      //Modal#25
      $ionicModal.fromTemplateUrl('templates/popup/N25.html', {
        id: '25',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop25 = modal;
      });

      $scope.popopen25 = function(index) {
      $scope.pop25.show();
      };

      $scope.popclose25 = function(index) {
      $scope.pop25.hide();
      };

      //Modal#26
      $ionicModal.fromTemplateUrl('templates/popup/N26.html', {
        id: '26',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop26 = modal;
      });

      $scope.popopen26 = function(index) {
      $scope.pop26.show();
      };

      $scope.popclose26 = function(index) {
      $scope.pop26.hide();
      };

      //Modal#27
      $ionicModal.fromTemplateUrl('templates/popup/N27.html', {
        id: '27',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop27 = modal;
      });

      $scope.popopen27 = function(index) {
      $scope.pop27.show();
      };

      $scope.popclose27 = function(index) {
      $scope.pop27.hide();
      };

      //Modal#28
      $ionicModal.fromTemplateUrl('templates/popup/N28.html', {
        id: '28',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop28 = modal;
      });

      $scope.popopen28 = function(index) {
      $scope.pop28.show();
      };

      $scope.popclose28 = function(index) {
      $scope.pop28.hide();
      };

      //Modal#29
      $ionicModal.fromTemplateUrl('templates/popup/N29.html', {
        id: '29',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop29 = modal;
      });

      $scope.popopen29 = function(index) {
      $scope.pop29.show();
      };

      $scope.popclose29 = function(index) {
      $scope.pop29.hide();
      };

      //Modal#29s
      $ionicModal.fromTemplateUrl('templates/popup/N29s.html', {
        id: '295',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop29s = modal;
      });

      $scope.popopen29s = function(index) {
      $scope.pop29s.show();
      };

      $scope.popclose29s = function(index) {
      $scope.pop29s.hide();
      };

      //Modal#30
      $ionicModal.fromTemplateUrl('templates/popup/N30.html', {
        id: '30',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop30 = modal;
      });

      $scope.popopen30 = function(index) {
      $scope.pop30.show();
      };

      $scope.popclose30 = function(index) {
      $scope.pop30.hide();
      };

      //Modal#31
      $ionicModal.fromTemplateUrl('templates/popup/N31.html', {
        id: '31',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop31 = modal;
      });

      $scope.popopen31 = function(index) {
      $scope.pop31.show();
      };

      $scope.popclose31 = function(index) {
      $scope.pop31.hide();
      };

      //Modal#32
      $ionicModal.fromTemplateUrl('templates/popup/N32.html', {
        id: '32',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop32 = modal;
      });

      $scope.popopen32 = function(index) {
      $scope.pop32.show();
      };

      $scope.popclose32 = function(index) {
      $scope.pop32.hide();
      };

      //Modal#33
      $ionicModal.fromTemplateUrl('templates/popup/N33.html', {
        id: '33',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.pop33 = modal;
      });

      $scope.popopen33 = function(index) {
      $scope.pop33.show();
      };

      $scope.popclose33 = function(index) {
      $scope.pop33.hide();
      };

      //Modal#T1
      $ionicModal.fromTemplateUrl('templates/popup/T1.html', {
        id: '34',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.popT1 = modal;
      });

      $scope.popopenT1 = function(index) {
      $scope.popT1.show();
      };

      $scope.popcloseT1 = function(index) {
      $scope.popT1.hide();
      };

      //Modal#T2
      $ionicModal.fromTemplateUrl('templates/popup/T2.html', {
        id: '35',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.popT2 = modal;
      });

      $scope.popopenT2 = function(index) {
      $scope.popT2.show();
      };

      $scope.popcloseT2 = function(index) {
      $scope.popT2.hide();
      };

      //Modal#T3
      $ionicModal.fromTemplateUrl('templates/popup/T3.html', {
        id: '36',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.popT3 = modal;
      });

      $scope.popopenT3 = function(index) {
      $scope.popT3.show();
      };

      $scope.popcloseT3 = function(index) {
      $scope.popT3.hide();
      };

      //Modal#T4
      $ionicModal.fromTemplateUrl('templates/popup/T4.html', {
        id: '37',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.popT4 = modal;
      });

      $scope.popopenT4 = function(index) {
      $scope.popT4.show();
      };

      $scope.popcloseT4 = function(index) {
      $scope.popT4.hide();
      };

      //Modal#Map_Point
      $ionicModal.fromTemplateUrl('templates/map_point.html', {
        id: '1001',
        backdropClickToClose: false,
        scope: $scope
      }).then(function(modal) {
        $scope.popmappoint = modal;
      });

      $scope.popmappointopen = function(index) {
      $scope.popmappoint.show();
      };

      $scope.popmappointclose = function(index) {
      $scope.popmappoint.hide();
      };







      // Cleanup the modals when we're done with them (i.e: state change)
      // Angular will broadcast a $destroy event just before tearing down a scope 
      // and removing the scope from its parent.
      //$scope.$on('$destroy', function() {
      //  console.log('Destroying modals...');
      //  $scope.pop1.remove();
      //  $scope.pop2.remove();
      //  $scope.pop3.remove();
      //
      //});


      $scope.clickTest = function() {
        alert('วัดพระแก้ว')
      };

      
    });