/// >reference path = "angular.min.js"/>


var myApp = angular
                .module("myModule", []) 
                .controller("myController", function($scope) {   
                    var country = {
                        name: "USA",
                        capital: "Washington, D.C.",
                        flag: "Images/usa.jpeg"
                    };

                    $scope.country = country; 
                });
