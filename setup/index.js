console.log("Set up script init.");

const yaml = require('js-yaml');
const fs   = require('fs');
const path   = require('path');

var rootPath=path.normalize(__dirname+'/../..');;
var configFileName = rootPath+"/.perses.yml";
var config = "";

console.log("Loading Perses Config ("+configFileName+").");
try {
    config = yaml.safeLoad(fs.readFileSync(configFileName, 'utf8'));

} catch (e) {
  console.error(e);
  process.exit(1);
}

config.apk_path = rootPath+"/app/build/outputs/apk/app-debug.apk" 

configYAML = yaml.safeDump(config);

// Write a string to another file and set the file mode to 0755
try {
    fs.writeFileSync(rootPath+'/.perses-full.yml', configYAML);
  } catch(err) {
    // An error occurred
    console.error(err);
  }

console.log("MY_SECRET = <"+process.env.MY_SECRET+">");  

process.exit(0);