module.exports = function(ngModule)
{
    ngModule.constant('urls', {
        BASE_API: 'http://localhost:3000/api/'
    });

    ngModule.config(function(LoopBackResourceProvider, urls) {
    	
    	LoopBackResourceProvider.setUrlBase(urls.BASE_API);
    });
}