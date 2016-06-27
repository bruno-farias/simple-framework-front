/**
 * Created by bruno on 27/06/16.
 */

lightSpeedApp.service('categoriesService', ['$resource', function ($resource) {

    this.wineAPI = $resource('http://lightspeed.app/categories');

    this.categories = this.wineAPI.query();

}]);