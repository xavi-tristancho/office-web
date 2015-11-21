module.exports = function(ngModule)
{
    require('./IndexCustomersController')(ngModule);
    require('./CreateCustomersController')(ngModule);
}