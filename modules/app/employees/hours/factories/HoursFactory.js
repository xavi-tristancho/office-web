module.exports = function(ngModule) {

    function Hours($resource)
    {
        return $resource('api/employees/:employeeId/hours/:hourId', { employeeId : '@employeeId', hourId : '@hourId' },
        	{
        		'update': { method:'PUT' }
        	});
    }

    ngModule.factory('Hours', Hours);
}