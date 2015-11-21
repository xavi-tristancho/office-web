module.exports = function(ngModule)
{
    function hoursSummary()
    {
        return {
            restrict: "E",
            template : require("./templates/hours-summary.html"),
            scope: {
                employeeId: '=',
            },
            controller : function($scope, Api)
            {
                var vm = this;                

                vm.getSummary = function()
                {
                    Api.getAll('HoursStatistics', { employeeId : $scope.employeeId })
                        .then(function(summary)
                        {
                            vm.summary = summary;
                        });    
                }

                vm.getSummary();
            },
            controllerAs : 'summary'
        }
    }

    ngModule.directive('hoursSummary', hoursSummary);
}