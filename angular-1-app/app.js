(function(angular) {
  'use strict';
  console.log('init');

  var myApp = angular.module('app', []);

  myApp.controller('ctr', ['$scope', function($scope) {
    $scope.greeting = 'hello!';
  }]);
})(window.angular);




