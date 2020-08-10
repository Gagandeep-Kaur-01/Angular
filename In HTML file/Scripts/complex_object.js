/// >reference path = "angular.min.js"/>


var myApp = angular.module("myModule", []); //created module


//Register controller with module

myApp.controller("myController", function($scope) {   //specify the function inline here
    //created complex object
    var employee = {
        firstName: "Gagandeep",
        lastName: "Kaur",
        gender: "Female"
    }
    $scope.employee = employee;
});