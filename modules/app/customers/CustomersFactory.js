module.exports = function(ngModule) {

    function Customers($resource)
    {
        return $resource('api/customers/:customerId', { customerId : '@customerId' },
        	{
        		'update': { method:'PUT' }
        	});
    }

    ngModule.factory('Customers', Customers);
}