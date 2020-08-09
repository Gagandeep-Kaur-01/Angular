angular.module('myApp', []).controller('personCtrl', function($scope) {
    $scope.fname = "Gagan",
    $scope.lname = "Kaur",
    $scope.fullName = function() {
        return $scope.fname + " " + $scope.lname;
        
    }
});