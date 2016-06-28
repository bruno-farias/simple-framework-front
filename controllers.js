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

    $scope.discountPercent = 0.00;
    $scope.discountPercentFormated = 0;
    $scope.discountValue = 0;
    $scope.subTotal = 0;
    $scope.cartTotal = 0;

    /**
     * Add an item to cart
     * @param product
     */
    $scope.add = function (product) {
        cartService.addItem(product);
    };

    /**
     * Change an item quantity on cart
     * @param product
     */
    $scope.change = function (product) {
        cartService.changeQuantity(product);
        $scope.applyDiscount();
    };

    /**
     * Remove a product from cart
     * @param product
     */
    $scope.remove = function (product) {
        cartService.removeItem(product);
    };

    $scope.checkDiscount = function (coupon) {
        this.wineAPI = $resource('http://lightspeed.app/coupons/search/' + coupon);
        var res = this.wineAPI.query();
        res.$promise.then(function (result) {
            var discount = result[0];

            if (discount.count <= discount.count_limit) {
                $scope.applyDiscount(discount.discount);
            }
        });
    };

    $scope.applyDiscount = function (discount) {
        $scope.discountPercentFormated = discount;
        $scope.discountValue = cartService.applyDiscount(discount);
    };

    /**
     * Return the product subtotal
     * @param product
     * @returns {*}
     */
    $scope.getProductSubtotal = function (product) {
        return cartService.getProductSubtotal(product);
    };

    /**
     * List all items available in cart
     * @returns {*}
     */
    $scope.getCartItems = function () {
        return cartService.getItems();
    };

    $scope.getSubTotal = function () {
        return cartService.getSubtotal();
    };

    /**
     * Get the sum of items price
     * @returns {*}
     */
    $scope.getTotal = function () {
        return parseFloat($scope.getSubTotal()) - parseFloat($scope.discountValue);
    };

}]);

/**
 * Categories Controller
 */
lightSpeedApp.controller('categoriesController', ['$scope', '$resource', 'categoriesService', function ($scope, $resource, categoriesService) {

    $scope.categories = categoriesService.categories;

}]);