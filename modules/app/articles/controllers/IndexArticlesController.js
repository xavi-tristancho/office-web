module.exports = function(ngModule)
{
    function IndexArticlesController($controller, Article)
    {
        var vm = this;
        vm.base = $controller('BaseController');

        vm.getAll = function()
        {
            vm.articles = Article.find();
        }

        vm.dtOptions = vm.base.loadTable(vm.getAll);
    }

    ngModule.controller('IndexArticlesController', IndexArticlesController);
}