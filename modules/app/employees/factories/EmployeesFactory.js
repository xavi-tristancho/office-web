module.exports = function(ngModule) {

    function Employees($resource, urls)
    {
        return $resource(urls.BASE_API + 'employees/:employeeId', { employeeId : '@employeeId', hourId : '@hourId' },
        	{
        		'update': { method:'PUT' }
        	});
    }

    ngModule.factory('Employees', Employees);
}