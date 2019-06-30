var fs = require("fs");
class Sensor {
	public static const SENSOR
	private shellCommand, sensorUrl, sensorEnv;
	private sensorType;
	public constructor(data) {

	}
	public getData() {

	}
};
function SensorConfig(onBuild) {
  fs.readFile("SensorConfig.json", function(err, data) {
    if(!err) {
    	this.buildConfig(JSON.parse(data));
    	onBuild(null);
    }
    else {
    	onBuild(err);
    }
  });
}
SensorConfig.prototype.config = null;
SensorConfig.prototype.buildConfig = function(config) {
  this.config = config;
}
SensorConfig.prototype.getSensor = async function(sensorName) {
	if(!this.config[sensorName]) {
		throw new Error("Sensor " + sensorName + " is not present");
		return new Sensor(this.config);
	}
}

