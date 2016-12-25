'use strict';

/**
 * @ngdoc function
 * @name BibalouApp.controller:MyMarketPlaceCtrl
 * @description
 * # MyMarketPlaceCtrl
 * Controller of the BibalouApp
 */
angular.module('BibalouApp')
  .controller('MyMarketPlaceCtrl', function ($scope, $location, toaster, User, SubmitResult, RequestAPI) {
    $scope.busy = true;

    $scope.init = function () {
      RequestAPI.GET("/marketPlaces/byOwner", SubmitResult.submitSuccess(function (response) {
          $scope.marketPlace = response.data.marketPlace;
        /* GET NEWS*/
          $scope.busy = false;
        }),
        SubmitResult.submitFailure(function() {
          $location.url("/myMarketPlace/edit");
        }), {token: User.getToken(), owner: User.getId()});
    };

    $scope.edit = function() {
      $location.url("/myMarketPlace/edit");
    };

    $scope.refresh = function () {
      $scope.init();
    };

    $scope.init();
  });
