module.exports = function(ngModule)
{
    require('./base')(ngModule)
	require('./customers')(ngModule);
	require('./employees')(ngModule);
}