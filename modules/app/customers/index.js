module.exports = function(ngModule)
{
    require('./controllers')(ngModule);
    require('./CustomersFactory')(ngModule);
}