module.exports = function(ngModule)
{
    ngModule.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('Dashboard', {
                url: "/",
                templateUrl: "modules/partials/dashboard.html",
                ncyBreadcrumb: {
                    label: 'resources.dashboard.title'
                }
            })
            .state('IndexCustomers', {
                url: "/customers",
                templateUrl: "/modules/app/customers/views/index.html",
                controller : "IndexCustomersController",
                controllerAs : "customers",
                ncyBreadcrumb: {
                    label: 'resources.customers.title'
                }
            })
            .state('CreateCustomers', {
                url: "/customers/create",
                templateUrl: "/modules/app/customers/views/create.html",
                controller : "CreateCustomersController",
                controllerAs : "customers",
                ncyBreadcrumb: {
                    label: 'resources.customers.title'
                }
            })
            .state('EditCustomers', {
                url: "/customers/:customerId/edit",
                templateUrl: "/modules/app/customers/views/create.html",
                controller : "CreateCustomersController",
                controllerAs : "customers",
                ncyBreadcrumb: {
                    label: 'resources.customers.title'
                }
            })
            .state('IndexEmployees', {
                url: "/employees",
                templateUrl: "/modules/app/employees/views/index.html",
                controller : "IndexEmployeesController",
                controllerAs : "employees",
                ncyBreadcrumb: {
                    label: 'resources.employees.title'
                }
            })
            .state('CreateEmployees', {
                url: "/employees/create",
                templateUrl: "/modules/app/employees/views/create.html",
                controller : "CreateEmployeesController",
                controllerAs : "employees",
                ncyBreadcrumb: {
                    label: 'resources.employees.title'
                }
            })
            .state('EditEmployees', {
                url: "/employees/:employeeId/edit",
                templateUrl: "/modules/app/employees/views/create.html",
                controller : "CreateEmployeesController",
                controllerAs : "employees",
                ncyBreadcrumb: {
                    label: 'resources.employees.title'
                }
            })
            .state('IndexEmployeesHours', {
                url: "/employees/:employeeId/hours",
                templateUrl: "/modules/app/employees/hours/views/index.html",
                controller : "IndexEmployeesHoursController",
                controllerAs : "hours",
                ncyBreadcrumb: {
                    label: 'resources.employees.title'
                }
            })
            .state('MonthlyEmployeesHours', {
                url: "/employees/:employeeId/hours/show/monthly",
                templateUrl: "/modules/app/employees/hours/views/monthly.html",
                controller : "MonthlyEmployeesHoursController",
                controllerAs : "monthlyHours",
                ncyBreadcrumb: {
                    label: 'resources.employees.hours.monthly.title'
                }
            })
            .state('CreateEmployeesHours', {
                url: "/employees/:employeeId/hours/create",
                templateUrl: "/modules/app/employees/hours/views/create.html",
                controller : "CreateEmployeesHoursController",
                controllerAs : "hours",
                ncyBreadcrumb: {
                    label: 'resources.employees.title'
                }
            })
            .state('EditEmployeesHours', {
                url: "/employees/:employeeId/hours/:hourId/edit",
                templateUrl: "/modules/app/employees/hours/views/create.html",
                controller : "CreateEmployeesHoursController",
                controllerAs : "hours",
                ncyBreadcrumb: {
                    label: 'resources.employees.title'
                }
            });
    });
}