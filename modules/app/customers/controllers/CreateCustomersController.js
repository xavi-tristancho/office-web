module.exports = function(ngModule) {

  function CreateCustomersController($state, $stateParams, Customer, Notifications){
    var vm = this;
    vm.form = {};

    vm.find = function(){
      vm.form = Customer.findById({ id: $stateParams.customerId});      
    }    

    vm.save = function(){              
      Customer.upsert(vm.form, function(result){
        $state.go('IndexCustomers');
      }, function(error){
        Notifications.error(error);
      });                
    }

    if(typeof $stateParams.customerId != 'undefined'){
        vm.action = "edit";
        vm.find();
    } else {
        vm.action = "add";        
    }   
  }

  ngModule.controller('CreateCustomersController', CreateCustomersController);
}