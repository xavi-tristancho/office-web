module.exports = function(ngModule)
{
    ngModule.config(function($translateProvider) {

        $translateProvider.preferredLanguage('es');

        $translateProvider.useStaticFilesLoader({
          prefix: 'modules/locale/',
          suffix: '.json'
        });
    });
}