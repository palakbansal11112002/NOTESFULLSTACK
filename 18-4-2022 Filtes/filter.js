var myApp=angular.module("myModule",[]);
myApp.controller("myController",function($scope,$location){
// // $scope.date_order=new Date();
// // $scope.name=[
// //     {name:'a',age:10},
// //     {name:'b',age:10},
// //     {name:'c',age:10},
// //     {name:'d',age:10}
// // ];
// $scope.url=$location.absUrl();
// $scope.protocol=$location.protocol();
// $scope.host=$location.host();
// $scope.port=$location.port();
// $scope.name=['komal','neha','sonam','happy','vinod','amir','panda'];
$scope.subject="Full Stack";
$scope.subjects=[
    'DS',
    'C',
    'C#',
    'C++',
     'python','java'
];
$scope.credentials=[
{email:'A@a.a',pass:'a',id:10},
{email:'z@z.z',pass:'z',id:1},
{email:'d@d.d',pass:'d',id:100}
];

});