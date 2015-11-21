module.exports = function(ngModule)
{
    require('./routes')(ngModule);
    require('./breadcrumbs')(ngModule);    
}