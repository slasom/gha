console.log("Set up script init.");

const yaml = require('js-yaml');
const fs   = require('fs');
const path   = require('path');

 
var rootPath=path.normalize(__dirname__+'/../..');;
var configFileName = rootPath+".perses.yml";

console.log("Loading Perses Config (${configFileName})...");
try {
  const doc = yaml.safeLoad(fs.readFileSync(configFileName, 'utf8'));
  console.log(doc);
} catch (e) {
  console.error(e);
  process.exit(1);
}

process.exit(0);