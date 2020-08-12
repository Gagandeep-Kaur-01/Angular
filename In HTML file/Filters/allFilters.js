/// >reference path = "angular.min.js"/>


var myApp = angular
                .module("myModule", []) 
                .controller("myController", function($scope) {   
                    var employees = [
                        { name: "A", dateOfBirth: new Date("November 11, 1990"), gender: "Male", salary: 55009.44 },
                        { name: "B", dateOfBirth: new Date("April 3, 1889"), gender: "Female", salary: 56000 },
                        { name: "C", dateOfBirth: new Date("December 11, 1990"), gender: "Male", salary: 55009.44 },
                        { name: "D", dateOfBirth: new Date("November 21, 1992"), gender: "Male", salary: 55009.44 },
                        { name: "E", dateOfBirth: new Date("January 11, 1870"), gender: "Male", salary: 55009.44 },
                    ];

                    $scope.employees = employees;
                    
                });