module.exports = function(ngModule)
{
    require('./IndexEmployeesHoursController')(ngModule);
    require('./CreateEmployeesHoursController')(ngModule);
    require('./MonthlyEmployeesHoursController')(ngModule);
}