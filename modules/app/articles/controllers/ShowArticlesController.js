module.exports = function(ngModule)
{
    function ShowArticlesController($state, $stateParams, $translate, Article, Alerts)
    {
        var vm = this;

        vm.article = Article.findById({
            id: $stateParams.articleId,
            filter: {
                include: ['family', 'provider'],
            }
        });

        vm.delete = function()
        {
            var text = $translate.instant('alerts.confirm.message', { message: $translate.instant('resources.articles.title') });
            Alerts.confirm(text, function()
            {
                Article.deleteById({ id: $stateParams.articleId })
                  .$promise
                  .then(function() {
                        $state.go('IndexArticles');
                  });
            });
        }
    }

    ngModule.controller('ShowArticlesController', ShowArticlesController);
}