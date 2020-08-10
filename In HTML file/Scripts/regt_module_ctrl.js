/// >reference path = "angular.min.js"/>


var myApp = angular.module("myModule", []); //created module

var myController = function($scope) {   //created controller
    $scope.message = "AngularJS Learning";
};

//Register controller with module

myApp.controller("myController", myController); 
//module object with controller function 
//(Ist parameter is the name for the controller and the 2nd parameter is the controller fn itself)
