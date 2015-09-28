//require('./angular');
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/index');
  $stateProvider

  // HOME STATE AND NESTED VIEWS ========================================
  .state('home', {
      url: '/home',
      templateUrl: 'src/partials/home.html'
  })

  .state('assets', {
      url: '/assets',
      templateUrl: 'src/partials/assets.html'
  })

  .state('users', {
      url: '/clients',
      templateUrl: 'src/partials/users.html'
  });


});

// routerApp.controller('mainController', function($scope, $http) {
//   console.log("The controller is working!!!");
//   $http.get('http://localhost:3000/index')
//   .then(function(res) {
//     console.log(res.data);
//     $scope.listings = res.data;
//   })
// });

module.exports = angular;
