module.exports = function(ngModule) {

  function CreateArticlesController($state, $stateParams, Article, Notifications){
    var vm = this;
    vm.form = { id: null };

    vm.find = function(){
      vm.form = Article.findById({ id: $stateParams.articleId });      
    }    

    vm.save = function(){              
      Article.upsert(vm.form, function(success){
        $state.go('IndexArticles');
      }, function(error){
        Notifications.error(error);
      });                
    }

    if(typeof $stateParams.articleId != 'undefined'){
        vm.action = "edit";
        vm.find();
    } else {
        vm.action = "add";        
    }   
  }

  ngModule.controller('CreateArticlesController', CreateArticlesController);
}