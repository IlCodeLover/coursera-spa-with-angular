(function() {
    'use strict';
    angular.module('DemoApp', [])
    .controller('DigestController', DigestController);
    DigestController.$inject = ['$scope', '$filter', '$timeout'];
    function DigestController($scope, $filter, $timeout) {
        $scope.count = 0;
        $scope.bag = 3;
        $scope.countUp = function() {
            // SetTimout is a native JavaScript function that will not trigger a digest cycle
            setTimeout(function() {
                $scope.count++;
                throw new Error("Test exception");
                console.log("Count is increased: " + $scope.count);
                // Trigger a digest cycle manually to repaint new value on browser after calling Timeout outside of Angular's context. 
                // However it cannot catch any exceptions 
                $scope.$digest(); 
                }, 2000); // 2 seconds)
        }
        $scope.doubleWithApply = function() {
            // Solution: using $apply() to trigger a digest cycle
            // $apply() will also catch exceptions and display them in the console
            setTimeout(function() {
                $scope.$apply(function() {
                    $scope.count=$scope.count * 2;
                    throw new Error("Test exception");
                    console.log("Count is increased with apply: " + $scope.count);
                })
            }, 2000); // 2 seconds
        }

        $scope.countDown = function() {
            // Timeout is a navtive Angular service that will automatically trigger a digest cycle
            // when the timeout is completed, so we do not need to call $scope.$digest() manually
            
            $timeout(function() {
                $scope.bag--;
                console.log("Bag is decreased: " + $scope.bag);
            }, 2000); // 2 seconds        
        }

        

        // Manually display the watchers
        console.log($scope);
        console.log("Number of watchers: " + $scope.$$watchersCount);
    }
    
})();