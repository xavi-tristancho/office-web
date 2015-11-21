module.exports = function(ngModule)
{
    ngModule.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('Dashboard', {
                url: "/",
                templateUrl: "modules/partials/dashboard.html",
                ncyBreadcrumb: {
                    label: 'Dashboard'
                }
            })
            .state('IndexCustomers', {
                url: "/customers",
                templateUrl: "/modules/app/customers/views/index.html",
                controller : "IndexCustomersController",
                controllerAs : "customers",
                ncyBreadcrumb: {
                    label: 'Customers'
                }
            })
            .state('CreateCustomers', {
                url: "/customers/create",
                templateUrl: "/modules/app/customers/views/create.html",
                controller : "CreateCustomersController",
                controllerAs : "customers",
                ncyBreadcrumb: {
                    label: 'Customers'
                }
            })
            .state('EditCustomers', {
                url: "/customers/:customerId/edit",
                templateUrl: "/modules/app/customers/views/create.html",
                controller : "CreateCustomersController",
                controllerAs : "customers",
                ncyBreadcrumb: {
                    label: 'Customers'
                }
            })
            .state('IndexEmployees', {
                url: "/employees",
                templateUrl: "/modules/app/employees/views/index.html",
                controller : "IndexEmployeesController",
                controllerAs : "employees",
                ncyBreadcrumb: {
                    label: 'Employees'
                }
            })
            .state('CreateEmployees', {
                url: "/employees/create",
                templateUrl: "/modules/app/employees/views/create.html",
                controller : "CreateEmployeesController",
                controllerAs : "employees",
                ncyBreadcrumb: {
                    label: 'Employees'
                }
            })
            .state('EditEmployees', {
                url: "/employees/:employeeId/edit",
                templateUrl: "/modules/app/employees/views/create.html",
                controller : "CreateEmployeesController",
                controllerAs : "employees",
                ncyBreadcrumb: {
                    label: 'Employees'
                }
            })
            .state('IndexEmployeesHours', {
                url: "/employees/:employeeId/hours",
                templateUrl: "/modules/app/employees/hours/views/index.html",
                controller : "IndexEmployeesHoursController",
                controllerAs : "hours",
                ncyBreadcrumb: {
                    label: 'Employees'
                }
            })
            .state('CreateEmployeesHours', {
                url: "/employees/:employeeId/hours/create",
                templateUrl: "/modules/app/employees/hours/views/create.html",
                controller : "CreateEmployeesHoursController",
                controllerAs : "hours",
                ncyBreadcrumb: {
                    label: 'Employees'
                }
            })
            .state('EditEmployeesHours', {
                url: "/employees/:employeeId/hours/:hourId/edit",
                templateUrl: "/modules/app/employees/hours/views/create.html",
                controller : "CreateEmployeesHoursController",
                controllerAs : "hours",
                ncyBreadcrumb: {
                    label: 'Employees'
                }
            });
    });
}