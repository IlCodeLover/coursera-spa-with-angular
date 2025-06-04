(function() {
    'use strict';
    angular.module('showImageApp', [])
    .controller('ImageController', ImageController);
    ImageController.$inject = ['$scope', '$filter'];
    function ImageController($scope, $filter) {
        $scope.name = 'Anna';
        $scope.item = 'apple';
        $scope.changeItem = function() {
            if ($scope.item === 'apple') {
                $scope.item = 'pear';
            }  else {
                $scope.item = 'apple';
            }
                
        }
    }
})();