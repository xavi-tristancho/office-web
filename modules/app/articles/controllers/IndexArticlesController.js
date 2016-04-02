module.exports = function(ngModule)
{
    function IndexArticlesController($controller, $translate, Article, Alerts)
    {
        var vm = this;
        vm.base = $controller('BaseController');

        vm.getAll = function()
        {
            vm.articles = Article.find();
        }

        vm.dtOptions = vm.base.loadTable(vm.getAll);

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