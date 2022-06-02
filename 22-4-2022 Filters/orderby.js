var mod1 = angular.module("mod2", []);
mod1.controller("cont",function($scope){
$scope.Friends = ["Nikhil", "B", "Vaibhav"];
$scope.movies=[
    {name:'Z',rating:2,price:200},
{name:'B',rating:3,price:300}
];

});
