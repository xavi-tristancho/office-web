module.exports = function(ngModule)
{
	require('./alerts')(ngModule);
	require('./api')(ngModule);
	require('./directives')(ngModule);
    require('./filters')(ngModule);   
    require('./notifications')(ngModule);
}