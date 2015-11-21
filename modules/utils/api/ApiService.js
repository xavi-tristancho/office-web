module.exports = function(ngModule) {

    function Api($injector, Notifications)
    {
        this.getAll = function(factory, params)
        {
        	return $injector.get(factory).get(params)
                .$promise.then(function(response)
                {                    
                    return response.data;
                });      		
        }

        this.find = function(factory, params)
        {
            return $injector.get(factory).get(params)
                .$promise.then(function(response)
                {                    
                    return response.data;
                });
        }

        this.save = function(factory, object, params)
        {
            return $injector.get(factory).save(params, object)
                .$promise.then(function(response)
                {
                    Notifications.success(response.success);                    
                    return response.data;
                });
        }

        this.update = function(factory, object, params)
        {
            return $injector.get(factory).update(params, object)
                .$promise.then(function(response)
                {
                    Notifications.success(response.success);                    
                    return response.data;
                });
        }

        this.delete = function(factory, params)
        {            
            return $injector.get(factory).delete(params)
                .$promise.then(function(response)
                {
                    Notifications.success(response.success);                    
                    return response.data;
                });    
        }

        return this;
    }

    ngModule.factory('Api', Api);
}