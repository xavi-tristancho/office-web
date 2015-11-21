var angular = require('angular');

require('angular-sanitize');
require('angular-ui-router');
require('angular-breadcrumb');
require('angular-translate');
require('angular-resource');
require('angular-animate');
require('angular-bootstrap');

var ngModule = angular.module('office', [
    'ui.router',
    'ncy-angular-breadcrumb',
    'ngSanitize',
    'pascalprecht.translate',
    'datatables',
    'datatables.bootstrap',
    'ngResource',
    'ngAnimate',
    'toaster',
    'ui.bootstrap'
]);

require('./app')(ngModule);
require('./config')(ngModule);
require('./locale')(ngModule);
require('./utils')(ngModule);
