module.exports = function(ngModule)
{
    require('./controllers')(ngModule);
    require('./directives')(ngModule);
	require('./factories')(ngModule); 
}