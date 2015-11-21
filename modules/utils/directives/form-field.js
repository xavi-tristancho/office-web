module.exports = function(ngModule)
{
    function formField()
    {
        return {
            restrict: "E",
            template : require("./templates/form-field.html"),
            scope: {
                model: '=',
                default: '@',
                title: '@',
                type: '@',
            },
            controller : function($scope)
            {
                var vm = this;

                vm.getPlaceholder = function()
                {
                    var placeholder = null;

                    if(typeof $scope.place == 'undefined')
                    {
                        placeholder = $scope.title;
                    }
                    else
                    {
                        placeholder = $scope.place;
                    }

                    return placeholder;
                }
            },
            controllerAs : 'field'
        }
    }

    ngModule.directive('formField', formField);
}