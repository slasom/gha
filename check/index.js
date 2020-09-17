console.log("Check script.");

const fs   = require('fs');
const path   = require('path');
const yaml = require('js-yaml');

var rootPath=path.normalize(__dirname+'/../..');;

var configFileName = rootPath+"/.perses-full.yml";
var config = {};

var resultFileName = rootPath+"/.perses-result.json";
var result = {};

console.log("Loading Perses Config ("+configFileName+").");
try {
    config = yaml.safeLoad(fs.readFileSync(configFileName, 'utf8'));

} catch (e) {
  console.error(e);
  process.exit(1);
}

console.log("Loading Perses Results ("+resultFileName+").");
try {
    result = JSON.parse(fs.readFileSync(resultFileName, 'utf8'));

} catch (e) {
  console.error(e);
  process.exit(1);
}

if (result.mean > config.max_avg){
  console.error("TEST FAILED: result > max --> "+result.mean+ ">"+config.max_avg);
  process.exit(1);
}