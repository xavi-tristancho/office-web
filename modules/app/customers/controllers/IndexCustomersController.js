module.exports = function(ngModule)
{
    function IndexCustomersController($controller, Customer)
    {
        var vm = this;
        vm.base = $controller('BaseController');

        vm.getAll = function()
        {
            vm.customers = Customer.find();
        }

        vm.dtOptions = vm.base.loadTable(vm.getAll);
    }

    ngModule.controller('IndexCustomersController', IndexCustomersController);
}