module.exports = function(ngModule)
{
    ngModule.config(function(LoopBackResourceProvider, urls) {    	    
    	LoopBackResourceProvider.setUrlBase(urls.BASE_API);    	
    });
}