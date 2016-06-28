/**
 * Created by bruno on 27/06/16.
 */

lightSpeedApp.service('cartService', ['$resource', function ($resource) {

    var vm = this;

    vm.cart = [];

    return {
        addItem: function (product) {

            for (var x = 0; x < vm.cart.length; x++) {
                if (vm.cart[x].id == product.id){
                    vm.cart[x].quantity++;
                    vm.cart[x].subtotal = parseFloat(vm.cart[x].price).toFixed(2) * vm.cart[x].quantity;
                    return false;
                }
            }
            product.quantity = 1;
            product.subtotal = parseFloat(product.price).toFixed(2);
            vm.cart.push(product);
        },
        changeQuantity: function (product) {
            for (var x = 0; x < vm.cart.length; x++) {
                if (vm.cart[x].id == product.id){
                    vm.cart[x].quantity = product.quantity;
                    vm.cart[x].subtotal = parseFloat(vm.cart[x].price).toFixed(2) * vm.cart[x].quantity;
                    this.getTotal();
                    return false;
                }
            }
            this.getTotal();
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
        getSubtotal : function (product) {
            for (var x = 0; x < vm.cart.length; x++) {
                if (vm.cart[x].id == product.id)
                    return vm.cart[x].quantity * vm.cart[x].price;
            }
        },
        getTotal: function () {
            var total = 0;
            for (var x = 0; x < vm.cart.length; x++) {
                total += vm.cart[x].price * vm.cart[x].quantity;
            }
            return parseFloat(total).toFixed(2);
        }
    };

}]);

lightSpeedApp.service('categoriesService', ['$resource', function ($resource) {

    this.wineAPI = $resource('http://lightspeed.app/categories');

    this.categories = this.wineAPI.query();

}]);