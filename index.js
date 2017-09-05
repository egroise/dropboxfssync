module.exports = {
    test : function(token) {
        var Dropbox = require('dropbox');
        
        var dbx = new Dropbox({ accessToken: token });
        dbx.filesListFolder({path: ''})
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });        
    }
};