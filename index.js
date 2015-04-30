"user strict";

var app = angular.module('app', ['common']);

app.controller("IndexController", ['$scope','animateScroll', function ($scope,animateScroll) {
$scope.animateScroll=animateScroll;
    }]);