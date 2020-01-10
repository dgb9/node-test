const fs = require('fs');

if (! process.env.hasOwnProperty('CONFIG_FOLDER')) {
    throw "CONFIG_FOLDER environment variable not found";
}

const configFile = process.env["CONFIG_FOLDER"] + "config.json";
const configTxt = fs.readFileSync(configFile); // only code executed when loading a package should be synchronous

const configData = JSON.parse(configTxt);

module.exports = configData;

