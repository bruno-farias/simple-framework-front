/**
 * Created by bruno on 27/06/16.
 */
lightSpeedApp.service('productsService', ['$resource', function ($resource) {
    
    this.wineAPI = $resource('http://lightspeed.app/products');

    this.products = this.wineAPI.query();

}]);