module.exports = function(ngModule)
{
    function IndexArticlesController($controller, $translate, Article, Alerts)
    {
        var vm = this;                        
        vm.articles = null        
        vm.searchableProperties = ["name", "reference"];                

        vm.delete = function(id)
        {            
            var text = $translate.instant('alerts.confirm.message', { message: $translate.instant('resources.articles.delete') });
            Alerts.confirm(text, function()
            {                        
                Article.deleteById({ id: id })
                  .$promise
                  .then(function() {
                    
                  });       
            });
        }
    }

    ngModule.controller('IndexArticlesController', IndexArticlesController);
}