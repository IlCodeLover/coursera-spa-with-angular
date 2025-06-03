(function() {
    'use strict';
    angular.module('MinificationExample', [])
    .controller('MinificationController', MinificationController);
    // declare the property $inject on the function MinificationController
    MinificationController.$inject = ['$scope', '$filter'];
    function MinificationController($scope, $filter){
      $scope.name = "name";
      $scope.upper = function(){
        var upperFilter = $filter('uppercase');
        $scope.name = upperFilter($scope.name)
      }  
    }
})(); 

/*
//  Version with minification error
angular.module("MinificationExample",[]).controller("MinificationController",function n(e,i){e.name="name",e.upper=function(){var n=i("uppercase");e.name=n(e.name)}});
*/

/*
//Solution 1:  working version with minification by adding the dependencies as an array
angular.module("MinificationExample",[]).controller("MinificationController",["$scope","$filter",function n(e,i){e.name="name",e.upper=function(){var n=i("uppercase");e.name=n(e.name)}}]);
*/
// Solution 2: working version with minification by using the $injector service
!function(){"use strict";function n(n,e){n.name="name",n.upper=function(){var i=e("uppercase");n.name=i(n.name)}}angular.module("MinificationExample",[]).controller("MinificationController",n),n.$inject=["$scope","$filter"]}();