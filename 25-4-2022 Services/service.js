var myApp=angular.module("myModule",[]);
myApp.controller("myController",function($scope,$location,$timeout,$interval){
$scope.machine=$location.host();
$scope.app_port=$location.port();
$scope.app_protocol=$location.protocol();
$scope.app_url=$location.absUrl();

$scope.login="Welcome to Landing Page";
$timeout(function()
{
$scope.login="Session Out Try again !!!";
},4000);


$interval(function(){
    $scope.dt=new Date();        
},4000);


});