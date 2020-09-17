console.log("Set up script init.");

const yaml = require('js-yaml');
const fs   = require('fs');
const { argv } = require('process');
 
if (process.argv.length != 3){
    console.error("Fatal use of steup script, you should provide ONE parameter with the root path of the project");
    process.exit(1);
}

var rootPath=process.argv[2];

console.log("Loading Perses Config...");
try {
  const doc = yaml.safeLoad(fs.readFileSync(rootPath+'/.perses.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.error(e);
  process.exit(1);
}

process.exit(0);