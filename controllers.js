/**
 * Created by bruno on 27/06/16.
 */
lightSpeedApp.controller('productsController', ['$scope', '$resource', '$routeParams', function ($scope, $resource, $routeParams) {

    var categoryFilter = $routeParams.category;
    
    if(typeof categoryFilter == 'undefined')
        $scope.wineAPI = $resource('http://lightspeed.app/products');
    else
        $scope.wineAPI = $resource('http://lightspeed.app/products/category/'+categoryFilter);

    $scope.products = $scope.wineAPI.query();

}]);

lightSpeedApp.controller('categoriesController', ['$scope', '$resource', 'categoriesService', function ($scope, $resource, categoriesService) {

    $scope.categories = categoriesService.categories;

}]);