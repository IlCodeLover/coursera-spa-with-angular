(function() {
'use strict'; // to make sure we will not leak variables into global scope

angular.module('myFirstApp', []) // declare a module with dependency in []
// this binds the ViewModel to the View
.controller('MyFirstController', function($scope) { // this is a ViewModel
    $scope.name = "John Doe";
    $scope.sayHello = function() {
        return "Hello " + $scope.name + "!";
    }


}); // end of controller
})();