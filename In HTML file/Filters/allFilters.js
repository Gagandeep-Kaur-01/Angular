/// >reference path = "angular.min.js"/>


var myApp = angular
                .module("myModule", []) 
                .controller("myController", function($scope) {   
                    var employees = [
                        { name: "A", dateOfBirth: new Date("November 11, 1990"), gender: "Male", salary: 55009.443 },
                        { name: "B", dateOfBirth: new Date("April 3, 1889"), gender: "Female", salary: 56000 },
                        { name: "C", dateOfBirth: new Date("December 11, 1990"), gender: "Male", salary: 56533.444 },
                        { name: "D", dateOfBirth: new Date("November 21, 1992"), gender: "Male", salary: 65887.432 },
                        { name: "E", dateOfBirth: new Date("January 11, 1870"), gender: "Male", salary: 60000 },
                    ];

                    $scope.employees = employees;

                    $scope.rowLimit = 3; //by default, show only 3 rows.
                    
                });