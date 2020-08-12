/// >reference path = "angular.min.js"/>


var myApp = angular
                .module("myModule", []) 
                .controller("myController", function($scope) {   

                    var employees = [
                        { name: "Alpha", dateOfBirth: new Date("November 11, 1990"), gender: "Male", salary: 55009, city: "London" },
                        { name: "Ehanta", dateOfBirth: new Date("January 11, 1870"), gender: "Male", salary: 56000, city: "Chennai" },
                        { name: "Beta", dateOfBirth: new Date("April 3, 1889"), gender: "Female", salary: 56000, city: "London" },
                        { name: "Crypt", dateOfBirth: new Date("December 11, 1990"), gender: "Male", salary: 57009, city: "Chennai" },
                        { name: "Decrypt", dateOfBirth: new Date("November 21, 1992"), gender: "Male", salary: 54532, city: "London" }
                        
                    ];

                    $scope.employees = employees;    
                    
                    
                });