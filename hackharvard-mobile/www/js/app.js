// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.cloud'])
.config(function($ionicCloudProvider) {
  $ionicCloudProvider.init({
    "core": {
      "app_id": "58435fe5"
    },
    "push": {
      "sender_id": "940203115330",
      "pluginConfig": {
        "ios": {
          "badge": true,
          "sound": true
        },
        "android": {
          "iconColor": "#343434"
        }
      }
    }
  });
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('patientsController', function($scope, $ionicPlatform, $interval, $ionicModal, $ionicPush, Backend) {

  /* Alert Modal */
  $ionicModal.fromTemplateUrl('alertModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.alertModal = modal;
  });
  $scope.openAlertModal = function() {
    $scope.alertModal.show();
  };
  $scope.closeAlertModal = function() {
    $scope.responding = true;

    Backend.respondToAlert(function(){
      $scope.responding = false;
      $scope.alertModal.hide();
    });
    
  };

  /* Patient Modal */
  $ionicModal.fromTemplateUrl('patientModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.patientModal = modal;
  });
  $scope.openPatientModal = function(patient) {
    $scope.selected_patient = patient;
    $scope.patientModal.show();
  };
  $scope.closePatientModal = function() {
    $scope.patientModal.hide();
  };

  /* Selecting Patients */
  $scope.selected_patient = null;
  $scope.responding = false;
  $scope.alert = false;
  $scope.patients = [
    {name:'Satchel French', place: 'Rm 121', img: 'https://umpetrogeo.files.wordpress.com/2011/03/patrickgou_passport-size_cropped.jpg', total_time: 1530,
    call_count:143
    },
    {name:'Yuan Chen', place: 'Rm 142', img: 'http://buzzcard.gatech.edu/PublishingImages/passport2.png', total_time: 430,
    call_count: 33
    },
    {name:'Dave Frankie', place: 'Rm 154', img: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Passport_Size_Image_of_Nouman.jpg', total_time: 630,
    call_count: 73
    },
    {name:'Waiyanphyo Hein', place: 'Rm 44', img: 'http://blogs.brightspyre.com/wp-content/uploads/2015/01/ORGINAL-KARTHIK-PASSPORT-SIZE.jpg ', total_time: 1030,
    call_count: 93
    }
  ];

  /* Push Notifications */
  $ionicPush.register().then(function(t) {
    return $ionicPush.saveToken(t);
  }).then(function(t) {
    console.log('Token saved:', t.token);
  });
  $scope.$on('cloud:push:notification', function(event, data) {
    console.log(data);

    $scope.selected_patient = $scope.patients[0];
    $scope.openAlertModal();
  });

  /* Initialize app */
  Backend.getPatients(function(success){
    $scope.patients = [
      {name:'Satchel French', place: 'Rm 121', img: 'https://umpetrogeo.files.wordpress.com/2011/03/patrickgou_passport-size_cropped.jpg', total_time: 1530,
      call_count:143
      },
      {name:'Yuan Chen', place: 'Rm 142', img: 'http://buzzcard.gatech.edu/PublishingImages/passport2.png', total_time: 430,
      call_count: 33
      },
      {name:'Dave Frankie', place: 'Rm 154', img: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Passport_Size_Image_of_Nouman.jpg', total_time: 630,
      call_count: 73
      },
      {name:'Waiyanphyo Hein', place: 'Rm 44', img: 'http://blogs.brightspyre.com/wp-content/uploads/2015/01/ORGINAL-KARTHIK-PASSPORT-SIZE.jpg ', total_time: 1030,
      call_count: 93
      }
    ];

  });
});
