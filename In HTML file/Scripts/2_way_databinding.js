/// >reference path = "angular.min.js"/>


var myApp = angular
                .module("myModule", []) 
                .controller("myController", function($scope) {   
                    var employee = {
                        firstName: "Gagandeep",
                        lastName: "Kaur",
                        gender: "Female"
                    };

                    $scope.employee = employee; 
                });