var myApp=angular.module("myModule",['ngRoute']);
myApp.config(["$routeProvider",function($routeProvider){
$routeProvider.
when("/aa",{
    templateUrl:"contentPages/login.html"
});
}]);
myApp.controller("myController",function($scope,$route){

});