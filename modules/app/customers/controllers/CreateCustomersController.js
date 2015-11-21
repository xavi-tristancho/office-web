module.exports = function(ngModule) {

  function CreateCustomersController(Api, $state, $stateParams)
  {
    var vm = this;
    vm.form = {};

    vm.find = function()
    {
      Api.find('Customers', {customerId : $stateParams.customerId })
        .then(function(customer)
        {
            vm.form = customer;
        });
    }    

    vm.save = function()
    {
        if(typeof vm.form.id != 'undefined')
        {
            Api.update('Customers', vm.form, { customerId : vm.form.id })
            .then(function()
            {
                $state.go('IndexCustomers');
            });
        }
        else
        {
            Api.save('Customers', vm.form)
            .then(function()
            {
                $state.go('IndexCustomers');
            });
        }        
    }

    if(typeof $stateParams.customerId != 'undefined')
    {
        vm.action = "edit";
        vm.find();
    }
    else
    {
        vm.action = "add";        
    }   
  }

  ngModule.controller('CreateCustomersController', CreateCustomersController);
}