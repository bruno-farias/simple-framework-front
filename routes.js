/**
 * Created by bruno on 27/06/16.
 */
/** global: lightSpeedApp */
lightSpeedApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/products.html',
            controller: 'productsController'
        })
        .when('/products/:category', {
            templateUrl: 'pages/products.html',
            controller: 'productsController'
        })
        .when('/cart', {
            templateUrl: 'pages/cart.html',
            controller: 'productsController'
        })
        .when('/checkout', {
            templateUrl: 'pages/checkout.html',
            controller: 'productsController'
        })

});