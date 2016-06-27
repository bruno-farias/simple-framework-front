/**
 * Created by bruno on 27/06/16.
 */
lightSpeedApp.controller('homeController', ['$scope', 'productsService', function ($scope, productsService) {

    $scope.product = productsService.product;

    $scope.$watch('product', function () {
        productsService.product = $scope.product;
    });
    
}]);