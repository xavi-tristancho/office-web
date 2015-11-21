module.exports = function(ngModule)
{
	require('./customers')(ngModule);
	require('./employees')(ngModule)
}