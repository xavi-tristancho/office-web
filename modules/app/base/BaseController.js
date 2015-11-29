module.exports = function(ngModule) {

    function BaseController(DTOptionsBuilder, datatablesLanguages, $translate)
    {
        var vm = this;
        vm.order = [[0, "asc"]];

        this.loadTable = function(getAll)
        {
            var language = $translate.use();
            return DTOptionsBuilder
                .fromSource(getAll()).withBootstrap()
                .withOption('language', eval('datatablesLanguages.' + language))
                .withOption('order', vm.order);
        }
    }

    ngModule.controller('BaseController', BaseController);
}