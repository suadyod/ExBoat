// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers' ,'starter.map','ngCordova'])

.run(function($ionicPlatform, $rootScope, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      // Get permissions on first launch for notifications
    if(device.platform === "iOS") {
      window.plugin.notification.local.promptForPermission();
    }
        // Trigger alert when notification is fired but app is in foreground
    window.plugin.notification.local.onadd = function (id, state, json) {
            var notification = {
                id: id,
                state: state,
                json: json
            };
            $timeout(function() {
                $rootScope.$broadcast("$cordovaLocalNotification:added", notification);
            });
    };
      // Check for network connection
    if (window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
                    $ionicPopup.confirm({
                        title: "Internet Disconnected",
                        content: "The internet is disconnected on your device. Please connect the Internet"
                    })
                    .then(function(result) {
                        if(!result) {
                            ionic.Platform.exitApp();
                        }
                    });
                }
           }
  });
})



.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html",
        controller: 'PopupCtrl'
      }
    }
  })

  .state('app.map', {
    url: "/map",
    views: {
      'menuContent': {
        templateUrl: "templates/map.html",
        controller: 'MapCtrl'
      }
    }
  })

  .state('app.history', {
    url: "/history",
    views: {
      'menuContent': {
        templateUrl: "templates/history.html"
      }
    }
  })

  .state('app.emergency_call', {
    url: "/emergency_call",
    views: {
      'menuContent': {
        templateUrl: "templates/emergency_call.html",
        controller: 'EmergencyCtrl'
      }
    }
  })

  .state('app.ads', {
    url: "/ads",
    views: {
      'menuContent': {
        templateUrl: "templates/ads.html",
        controller: 'AdsCtrl'
      }
    }
  })

  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent': {
        templateUrl: "templates/settings.html",
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('app.map_point', {
      url: "/map_point",
      views: {
        'menuContent': {
          templateUrl: "templates/map_point.html",
          controller: 'SlideboxCtrl'
        }
      }
    })

  .state('app.contact', {
    url: "/contact",
    views: {
      'menuContent': {
        templateUrl: "templates/contact.html"

      }
    }
  })
  
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })


  .state('app.orangeline', {
      url: "/orangeline",
      views: {
        'menuContent': {
          templateUrl: "templates/line/orange_line.html"
        }
      }
    })

  .state('app.blueline', {
      url: "/blueline",
      views: {
        'menuContent': {
          templateUrl: "templates/line/blue_line.html"
        }
      }
    })

  .state('app.greenline', {
      url: "/greenline",
      views: {
        'menuContent': {
          templateUrl: "templates/line/green_line.html",
          controller: 'PopupCtrl'
        }
      }
    })

  .state('app.yellowline', {
      url: "/yellowline",
      views: {
        'menuContent': {
          templateUrl: "templates/line/yellow_line.html"
        }
      }
    })

  .state('app.normalline', {
      url: "/normalline",
      views: {
        'menuContent': {
          templateUrl: "templates/line/normal_line.html"
        }
      }
    })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/map');
});
