module.exports = function(ngModule) {

    function Customers($resource, urls)
    {
        return $resource(urls.BASE_API + 'customers/:customerId', { customerId : '@customerId' },
        	{
        		'update': { method:'PUT' }
        	});
    }

    ngModule.factory('Customers', Customers);
}