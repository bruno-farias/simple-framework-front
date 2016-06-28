/**
 * Created by bruno on 27/06/16.
 */
/**
 * Products Controller
 */
lightSpeedApp.controller('productsController', ['$scope', '$resource', '$routeParams', 'cartService', function ($scope, $resource, $routeParams, cartService) {

    var categoryFilter = $routeParams.category;
    
    if(typeof categoryFilter == 'undefined')
        $scope.wineAPI = $resource('http://lightspeed.app/products');
    else
        $scope.wineAPI = $resource('http://lightspeed.app/products/category/'+categoryFilter);

    $scope.products = $scope.wineAPI.query();

    /**
     *
     * @param product
     */
    $scope.add = function (product) {
        cartService.addItem(product);
    };

    $scope.change = function (product) {
        cartService.changeQuantity(product);
    };

    /**
     * Remove a product from cart
     * @param product
     */
    $scope.remove = function (product) {
        cartService.removeItem(product);
    };

    /**
     * Return the product subtotal
     * @param product
     * @returns {*}
     */
    $scope.getSubtotal = function (product) {
        return cartService.getSubtotal(product);
    };

    /**
     * List all items available in cart
     * @returns {*}
     */
    $scope.getCartItems = function () {
        return cartService.getItems();
    };

    /**
     * Get the sum of items price
     * @returns {*}
     */
    $scope.getTotal = function () {
        return cartService.getTotal();
    };

}]);

/**
 * Categories Controller
 */
lightSpeedApp.controller('categoriesController', ['$scope', '$resource', 'categoriesService', function ($scope, $resource, categoriesService) {

    $scope.categories = categoriesService.categories;

}]);