/**
 * Created by bruno on 27/06/16.
 */

lightSpeedApp.service('cartService', ['$resource', function ($resource) {

    var vm = this;

    vm.cart = [];

    return {
        addItem: function (product) {
            vm.cart.push(product);
        },
        removeItem: function (product) {
            for (var x = 0; x < vm.cart.length; x++) {
                if (vm.cart[x].id == product.id)
                    vm.cart.splice(x, 1);
            }
        },
        getItems: function () {
            return vm.cart;
        },
        getTotal: function () {
            var total = 0;
            for (var x = 0; x < vm.cart.length; x++) {
                total += vm.cart[x].price;
            }
            return parseFloat(total).toFixed(2);
        }
    };

}]);

lightSpeedApp.service('categoriesService', ['$resource', function ($resource) {

    this.wineAPI = $resource('http://lightspeed.app/categories');

    this.categories = this.wineAPI.query();

}]);