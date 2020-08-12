/// >reference path = "angular.min.js"/>


var myApp = angular
                .module("myModule", []) 
                .controller("myController", function($scope) {   

                    var employees = [
                        { name: "Alpha", dateOfBirth: new Date("November 11, 1990"), gender: "Male", salary: 55009 },
                        { name: "Ehanta", dateOfBirth: new Date("January 11, 1870"), gender: "Male", salary: 56000 },
                        { name: "Beta", dateOfBirth: new Date("April 3, 1889"), gender: "Female", salary: 56000 },
                        { name: "Crypt", dateOfBirth: new Date("December 11, 1990"), gender: "Male", salary: 57009 },
                        { name: "Decrypt", dateOfBirth: new Date("November 21, 1992"), gender: "Male", salary: 54532 }
                        
                    ];

                    $scope.employees = employees;    
                    $scope.sortColumn = "name"; 
                    $scope.reverseSort = false;
                    
                    $scope.sortData = function (column) {
                        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                        $scope.sortColumn = column;
                    }

                    $scope.getSortClass = function (column) {
                        if ($scope.sortColumn == column) {
                            return $scope.reverseSort ? 'arrow-down' : 'arrow-up' ;
                        }

                        return '';
                    }
                    
                });
