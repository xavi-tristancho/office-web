module.exports = function(ngModule) {

    function HoursStatistics($resource, urls)
    {
        return $resource(urls.BASE_API + 'statistics/employees/:employeeId/hours/:hourId', { employeeId : '@employeeId', hourId : '@hourId' });
    }

    ngModule.factory('HoursStatistics', HoursStatistics);
}