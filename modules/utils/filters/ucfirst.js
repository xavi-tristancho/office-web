module.exports = function(ngModule) {

    function ucfirst()
    {
        return function(word)
        {       
            var capital = word.charAt(0).toUpperCase();
            return (capital + word.substr(1,word.lenght));
        }
    }

    ngModule.filter('ucfirst', ucfirst);
}