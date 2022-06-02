var myApp=angular.module("myModule",[]);
myApp.controller("mycontroller",function($scope,$window){
$scope.seca=function(a){
$window.alert(a);
var email=$window.prompt("Enter Email Id");
var pass=$window.prompt("Enter Password");
}
});