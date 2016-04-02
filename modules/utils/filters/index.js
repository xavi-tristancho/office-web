module.exports = function(ngModule)
{
    require('./url')(ngModule);
    require('./singular')(ngModule);
    require('./plural')(ngModule);
    require('./lowercase')(ngModule);
    require('./ucfirst')(ngModule);
    require('./range')(ngModule);
}