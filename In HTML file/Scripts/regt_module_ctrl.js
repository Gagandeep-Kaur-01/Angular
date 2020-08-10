/// >reference path = "angular.min.js"/>


var myApp = angular.module("myModule", []); //created module

//Register controller with module

myApp.controller("myController", function($scope) {   //specify the function inline here
    $scope.message = "AngularJS Learning";
});

//creating the controller and registering with the module all done in one line