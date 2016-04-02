module.exports = function(ngModule) {

    function MonthlyEmployeesHoursController($controller, $stateParams, Api)
    {
        var vm = this;
        vm.base = $controller('BaseController');
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

        vm.month = {
            days : vm.getMonthDays()
        }

        vm.getMonthDays = function()
        {
            var now = new Date();

            return now.getDate();
        }
    }

    ngModule.controller('MonthlyEmployeesHoursController', MonthlyEmployeesHoursController);
}