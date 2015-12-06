module.exports = function(ngModule) {

    function CreateEmployeesHoursController(Api, $state, $stateParams, $controller)
    {
        var vm = this;
        vm.base = $controller('BaseController');
        vm.form = {
            start : null,
            end : null,
            customer : null
        }

        vm.getAll = function()
        {
            Api.getAll('Hours', { employeeId : $stateParams.employeeId })
                .then(function(hours)
                {
                    vm.hours = hours;
                });
        }

        vm.find = function()
        {
            Api.find('Hours', { employeeId : $stateParams.employeeId, hourId : $stateParams.hourId })
                .then(function(form)
                {
                    vm.form.start = new Date(form.start);
                    vm.form.end = new Date(form.end);
                    vm.form.customer = form.customer.data;
                });
        }

        vm.getAllCustomers = function()
        {
            Api.getAll('Customers')
                .then(function(customers)
                {
                    vm.customers = customers;
                });
        }

        vm.getAllCustomers();

        vm.findEmployee = function()
        {
            Api.find('Employees', { employeeId : $stateParams.employeeId })
                .then(function(employee)
                {
                    vm.employee = employee;
                });
        }

        vm.findEmployee();

        vm.save = function()
        {
            if(typeof vm.form.id != 'undefined')
            {
                Api.update('Hours', vm.form, { employeeId : $stateParams.employeeId })
                    .then(function()
                    {
                        $state.go('IndexEmployeesHours', { employeeId : $stateParams.employeeId });
                    });
            }
            else
            {
                Api.save('Hours', vm.form, { employeeId : $stateParams.employeeId })
                    .then(function()
                    {
                        $state.go('IndexEmployeesHours', { employeeId : $stateParams.employeeId });
                    });
            }
        }

        if(typeof $stateParams.hourId != 'undefined')
        {
            vm.action = "edit";
            vm.find();
        }
        else
        {
            vm.action = "add";

            vm.form = {
                start : new Date(new Date().toJSON().slice(0,10)),
                end : new Date(new Date().toJSON().slice(0,10))
            }

            vm.form.start.setHours(8);
            vm.form.end.setHours(9);
        }
    }

    ngModule.controller('CreateEmployeesHoursController', CreateEmployeesHoursController);
}