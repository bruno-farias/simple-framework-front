/**
 * Created by bruno on 27/06/16.
 */
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
        });

});