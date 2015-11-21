module.exports = function(ngModule) {

    function HoursStatistics($resource)
    {
        return $resource('api/statistics/employees/:employeeId/hours/:hourId', { employeeId : '@employeeId', hourId : '@hourId' });
    }

    ngModule.factory('HoursStatistics', HoursStatistics);
}