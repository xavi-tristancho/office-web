module.exports = function(ngModule) {

    function Hours($resource, urls)
    {
        return $resource(urls.BASE_API + 'employees/:employeeId/hours/:hourId', { employeeId : '@employeeId', hourId : '@hourId' },
        	{
        		'update': { method:'PUT' }
        	});
    }

    ngModule.factory('Hours', Hours);
}