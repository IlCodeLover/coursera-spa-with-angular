(function(){
    'use strict'; // to make sure we will not leak variables into global scope
    angular.module('myFirstApp', [])
    // ---- Controller 1 START - ----
    // Inline Controller Functions (Not recommended for large apps)
    .controller('Controller1', function($scope) {

        $scope.message = "Greeting from controller1";
        $scope.printMessage = function(message) {
            return "Controller1 says: " + $scope.message;
        };
    })
    // ---- Controller 1 END ----

    // ---- Controller 2 START ----
    // Use Named Controller Functions
    .controller('Controller2', Controller2);
    function Controller2($scope, $filter, $injector) {
        $scope.country = "Input your country";
        $scope.upper = function() {
            var upperFilter = $filter('uppercase');
            //return upperFilter($scope.country);
            $scope.country = upperFilter($scope.country);
        };
        // This will show the dependencies of the function Controller2: $scope, $filter, $injector and Angular will inject them
        console.log($injector.annotate(Controller2)); 
    }

    function AnnotateMe(name, anyArg) {
        return "Testing annotation: " + name + " " + anyArg;
    }
    
    console.log("Invoke a function AnnotateMe() = " + AnnotateMe());
    console.log("Don't invoke a function, just get Function VALUE: AnnotateMe = " + AnnotateMe);
    console.log("Using toString: " + AnnotateMe.toString());
    console.log(Controller2.toString());
    console.log("Using service $injector to get the function's dependencies:");
    
    // ---- Controller 2 END ----
})();