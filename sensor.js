var fs = require("fs");
function SensorConfig(onBuild) {
  fs.readFile("SensorConfig.json", function(err, data) {
    if(err) {
    this.buildConfig(JSON.parse(data));
    }
  });
}
SensorConfig.prototype.config = null;
SensorConfig.prototype.buildConfig = function(config) {
  this.config = config;
}
SensorConfig.prototype.

