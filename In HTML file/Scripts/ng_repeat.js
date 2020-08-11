/// >reference path = "angular.min.js"/>


var myApp = angular
                .module("myModule", []) 
                .controller("myController", function($scope) {   
                    var employee = [
                        {firstName: "Rahul",
                        lastName: "Sharma",
                        gender: "Male",
                        salary:55000 },

                        {firstName: "Radhika",
                        lastName: "Sharma",
                        gender: "Female",
                        salary:52000 },

                        {firstName: "Rakesh",
                        lastName: "Malhotra",
                        gender: "Male",
                        salary:65000 },

                        {firstName: "Kalesh",
                        lastName: "Sharma",
                        gender: "Male",
                        salary:58000 },

                    ];

                    $scope.employee = employee; 
                });