module.exports = function(ngModule)
{
    ngModule.config(function($breadcrumbProvider) {
        $breadcrumbProvider.setOptions({
            templateUrl: 'modules/partials/breadcrumb.html',
        });
    });
}

