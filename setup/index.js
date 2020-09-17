console.log("Set up script init.");

const yaml = require('js-yaml');
const fs   = require('fs');
const path   = require('path');
const { config } = require('process');

 
var rootPath=path.normalize(__dirname+'/../..');;
var configFileName = rootPath+"/.perses.yml";

console.log("Loading Perses Config ("+configFileName+")...");
try {
  const config = yaml.safeLoad(fs.readFileSync(configFileName, 'utf8'));

} catch (e) {
  console.error(e);
  process.exit(1);
}

config.apk_path = "Mipath!"

configYAML = yaml.safeDump(config);

// Write a string to another file and set the file mode to 0755
try {
    fs.writeFileSync(rootPath+'/.perses-full.yml', configYAML);
  } catch(err) {
    // An error occurred
    console.error(err);
  }


process.exit(0);