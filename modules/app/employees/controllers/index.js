module.exports = function(ngModule)
{
    require('./IndexEmployeesController')(ngModule);
    require('./CreateEmployeesController')(ngModule);
}