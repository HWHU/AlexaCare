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
    {name:'jeffrsy', place: 'Rm 101', img: 'http://i.imgur.com/sRL8ez6.png'},
    {name:'jeadsfsy', place: 'Rm 121', img: 'http://i.imgur.com/sRL8ez6.png'},
    {name:'jeffasdy', place: 'Rm 141', img: 'http://i.imgur.com/sRL8ez6.png'},
  ];

  /* Push Notifications */
  $ionicPush.register().then(function(t) {
    return $ionicPush.saveToken(t);
  }).then(function(t) {
    console.log('Token saved:', t.token);
  });
  $scope.$on('cloud:push:notification', function(event, data) {
    var msg = data.message;
    alert(msg.title + ': ' + msg.text);
  });
});
