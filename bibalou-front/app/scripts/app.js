'use strict';

/**
 * @ngdoc overview
 * @name BibalouApp
 * @description
 * # BibalouApp
 *
 * Main module of the application.
 */
angular
  .module('BibalouApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'toaster',
    'angularFileUpload',
    'selector',
    'angularMoment'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/createAccount', {
        templateUrl: 'views/account/createAccount.html',
        controller: 'CreateAccountCtrl',
        controllerAs: 'createAccount'
      })
      .when('/myAccount', {
        templateUrl: 'views/account/myAccount.html',
        controller: 'MyAccountCtrl',
        controllerAs: 'myAccount'
      })
      .when('/allProducts', {
        templateUrl: 'views/products/allProducts.html',
        controller: 'AllProductsCtrl',
        controllerAs: 'allProducts'
      })
      .when('/product/:id', {
        templateUrl: 'views/products/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/allMarketPlaces', {
        templateUrl: 'views/marketPlaces/allMarketPlaces.html',
        controller: 'AllMarketPlacesCtrl',
        controllerAs: 'allMarketPlaces'
      })
      .when('/myMarketPlace', {
        templateUrl: 'views/marketPlaces/myMarketPlace/myMarketPlace.html',
        controller: 'MyMarketPlaceCtrl',
        controllerAs: 'myMarketPlace'
      })
      .when('/myMarketPlace/edit', {
        templateUrl: 'views/marketPlaces/myMarketPlace/editMarketPlace.html',
        controller: 'EditMarketPlaceCtrl',
        controllerAs: 'editMarketPlace'
      })
      .when('/marketPlace/:name', {
        templateUrl: 'views/marketPlaces/marketPlace/marketPlace.html',
        controller: 'MarketPlaceCtrl',
        controllerAs: 'marketPlace'
      })
      .when('/myCart', {
        templateUrl: 'views/myCart/myCart.html',
        controller: 'MyCartCtrl',
        controllerAs: 'myCart'
      })
      .when('/myDeliveries', {
        templateUrl: 'views/myDeliveries/myDeliveries.html',
        controller: 'MyDeliveriesCtrl',
        controllerAs: 'myDeliveries'
      })
      .when('/myDeliveries/:id', {
        templateUrl: 'views/myDeliveries/deliveryDetail.html',
        controller: 'DeliveryDetailCtrl',
        controllerAs: 'deliveryDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
