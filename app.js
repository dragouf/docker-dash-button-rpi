var dash_button = require('node-dash-button');

var macAdress = '18:74:2e:26:95:d9';
var mqttServer = "192.168.1.14";
var topic = "";
var payload = 2;
var options = {
	keepalive: 10,
	clientId: 'docker-dash',
	protocolId: 'MQTT',
	protocolVersion: 4,
	clean: true,
	reconnectPeriod: 1000,
	connectTimeout: 30 * 1000,
	will: {
		topic: 'WillMsg',
		payload: 'Connection Closed abnormally..!',
		qos: 0,
		retain: false
	},
	rejectUnauthorized: false
};

var dash = dash_button(macAdress, null, null, "all");
dash.on("detected", function (btn){
  console.log("Button found with mac address :", btn);
  var client = mqtt.connect(mqttServer, options);
  client.on('connect', () => {
      client.publish(topic, payload.toString(), {}, () => client.end());
  });
});
