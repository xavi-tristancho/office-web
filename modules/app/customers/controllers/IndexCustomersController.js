module.exports = function(ngModule) {

  function IndexCustomersController(Api, DTOptionsBuilder)
  {
    var vm = this;

    vm.getAll = function()
    {
        Api.getAll('Customers')
            .then(function(customers)
            {
                vm.customers = customers;
            });        
    }

    vm.dtOptions = DTOptionsBuilder.fromSource(vm.getAll()).withBootstrap();    
  }

  ngModule.controller('IndexCustomersController', IndexCustomersController);
}