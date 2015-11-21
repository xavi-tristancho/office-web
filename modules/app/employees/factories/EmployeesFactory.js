module.exports = function(ngModule) {

    function Employees($resource)
    {
        return $resource('api/employees/:employeeId', { employeeId : '@employeeId', hourId : '@hourId' },
        	{
        		'update': { method:'PUT' }
        	});
    }

    ngModule.factory('Employees', Employees);
}