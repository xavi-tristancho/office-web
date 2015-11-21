module.exports = function(ngModule)
{
    require('./controllers')(ngModule);
    require('./factories')(ngModule);
    require('./hours')(ngModule);
}