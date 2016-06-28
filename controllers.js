/**
 * Created by bruno on 27/06/16.
 */
lightSpeedApp.controller('productsController', ['$scope', '$resource', '$routeParams', 'cartService', function ($scope, $resource, $routeParams, cartService) {

    var categoryFilter = $routeParams.category;
    
    if(typeof categoryFilter == 'undefined')
        $scope.wineAPI = $resource('http://lightspeed.app/products');
    else
        $scope.wineAPI = $resource('http://lightspeed.app/products/category/'+categoryFilter);

    $scope.products = $scope.wineAPI.query();


    
    $scope.add = function (product) {
        cartService.addItem(product);
        console.log(cartService.getItems());
    };

    $scope.remove = function (product) {
        cartService.removeItem(product);
    };

    $scope.getCartItems = function () {
        return cartService.getItems();
    };

    $scope.getTotal = function () {
        return cartService.getTotal();
    };



}]);

lightSpeedApp.controller('categoriesController', ['$scope', '$resource', 'categoriesService', function ($scope, $resource, categoriesService) {

    $scope.categories = categoriesService.categories;

}]);