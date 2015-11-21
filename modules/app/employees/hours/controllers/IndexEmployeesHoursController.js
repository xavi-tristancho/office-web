module.exports = function(ngModule) {

    function IndexEmployeesHoursController(Api, $stateParams, DTOptionsBuilder)
    {
        var vm = this;
        vm.employeeId = $stateParams.employeeId;

        vm.action = "view";

        vm.getAll = function()
        {
            Api.getAll('Hours', { employeeId : vm.employeeId })
                .then(function(hours)
                {
                    vm.hours = hours;
                });        
        }

        vm.dtOptions = DTOptionsBuilder
                            .fromSource(vm.getAll())
                            .withBootstrap()
                            .withOption('order', [[1, "asc"]]);

        vm.find = function()
        {
            Api.find('Employees', { employeeId : vm.employeeId })
                .then(function(employee)
                {
                    vm.employee = employee;
                });        
        }

        vm.find();

        vm.getElapsedHours = function(start, end)
        {
            var start = new Date(start);
            var end = new Date(end);
            var elapsed = end.getTime() - start.getTime();
            var hour = 1000*60*60;

            return (elapsed / hour);
        }
    }

    ngModule.controller('IndexEmployeesHoursController', IndexEmployeesHoursController);
}