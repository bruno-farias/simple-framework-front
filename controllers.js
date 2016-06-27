/**
 * Created by bruno on 27/06/16.
 */
lightSpeedApp.controller('homeController', ['$scope', '$resource', 'productsService', function ($scope, $resource, productsService) {




    $scope.products = productsService.products;


}]);