module.exports = function(ngModule)
{
    function loopbackTable()
    {
        return {
            restrict: "A",
            transclude: true,
            template : require("./templates/loopback-table.html"),
            scope: {
                config: '='               
            },
            controller : function($scope, $injector)
            {
                var where = null;
                var model = $injector.get($scope.config.model);
                var vm = this;

                vm.offset = 0;
                vm.limit = 10;
                vm.search = '';                

                vm.getResources = function(){                    
                    $scope.config.data = model.find({
                        filter: { 
                            offset: vm.offset, 
                            limit: vm.limit,
                            where: where
                        }
                    });
                }            

                var constructWhereClause = function(){                                        
                    var clauses = [];

                    for (var property in $scope.config.searchableProperties) {
                        var clause = {};
                        clause[$scope.config.searchableProperties[property]] = { like: '%' + vm.search + '%'};
                        clauses.push(clause);
                    }

                    return { or : clauses };
                }

                vm.getSearch = function(){
                    if(vm.search.length >= 3){
                        where = constructWhereClause();
                        vm.getResources();
                        vm.getCount();
                    }
                    else if(vm.search.length == 0){
                        where = null;
                        vm.getResources();
                        vm.getCount();
                    }                    
                }

                vm.getCount = function(){
                    model.count({
                        where: where 
                    },function (response){
                        vm.count = response.count
                    });
                }

                vm.next = function(){
                    if(vm.offset + vm.limit >= vm.count) return
                    vm.offset += vm.limit;
                    vm.getResources();
                }

                vm.previous = function(){
                    if(vm.offset == 0) return
                    vm.offset -= vm.limit;
                    vm.getResources();
                }                

                vm.getResources();
                vm.getCount();

            },            
            controllerAs : 'table'
        }
    }

    ngModule.directive('loopbackTable', loopbackTable);
}