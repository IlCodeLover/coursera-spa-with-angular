(function() {
    'use strict';
    angular.module('myAngularApp', [])
    .controller('FilterController', FilterController);
    FilterController.$inject = ['$scope', '$filter'];
    function FilterController($scope, $filter) {
        $scope.name = 'Anna';
        $scope.stateOfBeing = 'hungry';
        $scope.cost = 10.45;
        
        $scope.changeMood = function(){
            if ($scope.stateOfBeing === 'hungry'){
                $scope.stateOfBeing = 'fed';
            } else {
                $scope.stateOfBeing = 'hungry';
            }
        }

        $scope.upper = function() {
            var upperFilter = $filter('uppercase');
            $scope.name = upperFilter($scope.name);
        }
    }
})();