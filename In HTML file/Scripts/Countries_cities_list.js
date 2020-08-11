/// >reference path = "angular.min.js"/>


var myApp = angular
                .module("myModule", []) 
                .controller("myController", function($scope) {   
                    var countries = [
                        {
                            name: "UK",
                            cities: [
                                { name: "London" },
                                { name: "Manchester" },
                                { name: "Birmingham"},
                            ]
                        },
                        {
                            name: "USA",
                            cities: [
                                { name: "Los Angles" },
                                { name: "Chicago" },
                                { name: "Chicago" },
                                { name: "Washington" }
                            ]
                        },
                        {
                            name: "India",
                            cities: [
                                { name: "Punjab" },
                                { name: "Haryana" },
                                { name: "New Delhi" },
                                { name: "Mumbai"}
                            ]
                        }
                    ];

                    $scope.countries = countries; 
                });
