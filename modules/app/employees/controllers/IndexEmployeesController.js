module.exports = function(ngModule) {

    function IndexEmployeesController($controller, Api)
    {
        var vm = this;
        vm.base = $controller('BaseController');

        vm.getAll = function()
        {
            Api.getAll('Employees')
                .then(function(employees)
                {
                    vm.employees = employees;
                });
        }

        vm.dtOptions = vm.base.loadTable(vm.getAll);
    }

    ngModule.controller('IndexEmployeesController', IndexEmployeesController);
}