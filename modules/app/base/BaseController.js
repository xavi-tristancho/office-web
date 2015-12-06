module.exports = function(ngModule) {

    function BaseController(DTOptionsBuilder, datatablesLanguages, $translate, $filter)
    {
        var vm = this;
        vm.order = [[0, "asc"]];

        this.loadTable = function(getAll)
        {
            var language = $translate.use();
            return DTOptionsBuilder
                .fromSource(getAll()).withBootstrap()
                .withOption('language', eval('datatablesLanguages.' + language))
                .withOption('order', vm.order);
        }

        this.getCustomerFullName = function(customer)
        {
            if(typeof customer != 'undefined' && customer != null)
                return customer.name + " " + customer.first_name + " " + customer.second_name;
        }

        this.getLocalizedDate = function(timestamp)
        {
            var at = $filter('translate')('fields.at');
            return $filter('date')(timestamp, "MM/dd/yyyy '" + at  + "' H:mm");
        }
    }

    ngModule.controller('BaseController', BaseController);
}