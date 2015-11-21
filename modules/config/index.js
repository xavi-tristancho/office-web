module.exports = function(ngModule)
{
    require('./routes')(ngModule);
    require('./constants')(ngModule);
    require('./breadcrumbs')(ngModule);    
}