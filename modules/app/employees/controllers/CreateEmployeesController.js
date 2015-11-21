module.exports = function(ngModule) {

  function CreateEmployeesController(Api, $state, $stateParams)
  {
    var vm = this;

    vm.find = function()
    {
      Api.find('Employees', {employeeId : $stateParams.employeeId })
        .then(function(employee)
        {
            vm.form = employee;
        });
    }    

    vm.save = function()
    {
        if(typeof vm.form.id != 'undefined')
        {
            Api.update('Employees', vm.form, { employeeId : vm.form.id })
            .then(function()
            {
                $state.go('IndexEmployees');
            });
        }
        else
        {
            Api.save('Employees', vm.form)
            .then(function()
            {
                $state.go('IndexEmployees');
            });
        }        
    }

    if(typeof $stateParams.employeeId != 'undefined')
    {
        vm.action = "edit";
        vm.find();
    }
    else
    {
        vm.action = "add";        
    }   
  }

  ngModule.controller('CreateEmployeesController', CreateEmployeesController);
}