/**
 * Created by bruno on 27/06/16.
 */
lightSpeedApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

});