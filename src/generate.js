var path = require('path');
module.exports = {
  run: function (type, obj) {
    var fs = require('fs');
    var file = path.resolve(obj.args[0] + obj.args[1])
    fs.access(file, fs.constants.F_OK, (err) => {
      if (!err) {
        return console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
      }
      fs.writeFile(file, "hello world!", function(err) {
          if(err) {
              return console.log(err);
          }
      });
    });
   
  }
  
}
