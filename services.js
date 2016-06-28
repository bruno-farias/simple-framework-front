/**
 * Created by bruno on 27/06/16.
 */

lightSpeedApp.service('cartService', ['$resource', function ($resource) {

    var vm = this;

    vm.cart = [];
    vm.subtotal = 0;
    vm.discount = 0;
    vm.discountAmount = 0;

    return {

        /**
         * Add a new item on shopping cart
         * @param product
         * @returns {boolean}
         */
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
        /**
         * Change the quantity of a given product and update the sum of products
         * @param product
         * @returns {boolean}
         */
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
        /**
         * Removes a product from cart
         * @param product
         */
        removeItem: function (product) {
            for (var x = 0; x < vm.cart.length; x++) {
                if (vm.cart[x].id == product.id)
                    vm.cart.splice(x, 1);
            }
        },
        /**
         * Just returns the products list on cart
         * @returns {Array}
         */
        getItems: function () {
            return vm.cart;
        },
        /**
         * Calculate the total of a single product/quantity
         * @param product
         * @returns {number}
         */
        getProductSubtotal : function (product) {
            for (var x = 0; x < vm.cart.length; x++) {
                if (vm.cart[x].id == product.id)
                    return vm.cart[x].quantity * vm.cart[x].price;
            }
        },
        getSubtotal : function () {
            var total = 0;
            for (var x = 0; x < vm.cart.length; x++) {
                total += vm.cart[x].quantity * vm.cart[x].price;
            }
            return total;
        },
        applyDiscount : function (discount) {
            if (typeof discount != 'undefined') {
                vm.discount = discount;
            }
            vm.discountAmount = parseFloat(this.getSubtotal()) * (parseFloat(vm.discount) / 100);

            return vm.discountAmount;
        },
        /**
         * Calculate the total of a all products x quantity
         * @returns {string}
         */
        getTotal: function () {
            return parseFloat(this.getSubtotal) - parseFloat(vm.discountAmount);
        }
    };

}]);

/**
 * Categories Service
 */
lightSpeedApp.service('categoriesService', ['$resource', function ($resource) {

    this.wineAPI = $resource('http://lightspeed.app/categories');

    this.categories = this.wineAPI.query();

}]);