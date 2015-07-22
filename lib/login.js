(function(){
  var path = require('path'),
      prompt = require('prompt'),
      argv = require('optimist').argv,
      fs = require('fs'),
      Q = require('q'),
      _ = require('lodash');

  var configFile = path.join(process.cwd(), 'chcp.json');
  var loginFile = path.join(process.cwd(), '.chcplogin');

  module.exports = {
    execute: execute
  };

  function execute(argv) {
    var config,
        schema = {
        properties: {
          key: {
            description: 'Amazon Access Key Id',
            message: 'You need to provide the Amazon Access Key Id',
            required: true
          },
          secret: {
            description: 'Amazon Secret Access Key',
            message: 'You need to provide the Secret Access Key',
            required: true
          }
        }
      };

    try {
      config = fs.readFileSync(configFile);
    } catch(e) {
      console.log('Cannot parse chcp.json');
    }

    if(!config) {
      console.log('You need to run "chcp init" before you can run "chcp login".');
      console.log('Both commands needs to be invoked in the root of the project directory.');
      process.exit(0);
    }

    prompt.override = argv;
    prompt.message = 'Please provide';
    prompt.delimiter = ': ';
    prompt.start();

    prompt.get(schema, function (err, result) {
      var json = JSON.stringify(result, null, 2);
      fs.writeFile(loginFile, json, function(err) {
        if(err) {
          return console.log(err);
        }
        console.log('Project initialized and .chcindex.plogin file created.');
        console.log('You SHOULD add .chcplogin to your .gitignore');
      });
    });
  }
})();