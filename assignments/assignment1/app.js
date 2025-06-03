(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    // DI in AngularJS need to be minifcation proof
    LunchCheckController.$inject = ['$scope', '$filter']; 
    function LunchCheckController($scope, $filter) {
        $scope.message = '';
        $scope.lunchItems= '';
        $scope.checkLunch = function() {
            var items = $scope.lunchItems.split(',');
            var itemCount = items.length;
            if (itemCount ===0 || ($scope.lunchItems.trim() === '')) {
                $scope.message = 'Please enter data first';
            }
            else if (itemCount <=3) {
                $scope.message = 'Enjoy!';
            }
            else {
                $scope.message = 'Too much!';
            }
            console.log("Items: " + $scope.lunchItems);
            console.log("Counting items: " + itemCount);
            console.log("Message: " + $scope.message);
        }
    }

    

})();