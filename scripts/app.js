var app = angular.module('app', ['ui.router']);

app.controller('headingController', function() {
  var self = this;

  self.heading = "Hello world";
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: require('./modules/home/partials/home.html')
    })
    .state('products', {
      url: '/products',
      template: require('./modules/products/partials/products.html')
    });
});
