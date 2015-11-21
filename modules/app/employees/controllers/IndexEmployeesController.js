module.exports = function(ngModule) {

  function IndexEmployeesController(Api, DTOptionsBuilder)
  {
    var vm = this;

    vm.getAll = function()
    {
        Api.getAll('Employees')
            .then(function(employees)
            {
                vm.employees = employees;
            });        
    }

    vm.dtOptions = DTOptionsBuilder.fromSource(vm.getAll()).withBootstrap();    
  }

  ngModule.controller('IndexEmployeesController', IndexEmployeesController);
}