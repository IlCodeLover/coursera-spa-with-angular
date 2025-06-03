(function() {
    'use strict';
    angular.module('MinificationExample', [])
    .controller('MinificationController', MinificationController);
    function MinificationController($scope, $filter){
      $scope.name = "name";
      $scope.upper = function(){
        var upperFilter = $filter('uppercase');
        $scope.name = upperFilter($scope.name)
      }  
    }
})();