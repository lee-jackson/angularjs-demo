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
      template: require('./partials/home.html'),
      controller: 'headingController',
      controllerAs: 'headingCtrl'
    })
    .state('products', {
      url: '/products',
      template: require('./partials/products.html')
    })
    .state('services', {
      url: '/services',
      template: require('./partials/services.html')
    })
    .state('about', {
      url: '/about',
      template: require('./partials/about.html')
    })
});
