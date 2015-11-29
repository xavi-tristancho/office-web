module.exports = function(ngModule)
{
    function IndexCustomersController($controller, Api)
    {
        var vm = this;
        vm.base = $controller('BaseController');

        vm.getAll = function()
        {
            Api.getAll('Customers')
                .then(function(customers)
                {
                    vm.customers = customers;
                });
        }

        vm.dtOptions = vm.base.loadTable(vm.getAll);
    }

    ngModule.controller('IndexCustomersController', IndexCustomersController);
}