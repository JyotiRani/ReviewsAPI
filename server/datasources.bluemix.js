var dataSources = {};

var credentials;

function initDBConnection() {
    //When running on Bluemix, this variable will be set to a json object
    //containing all the service credentials of all the bound services
    if (process.env.VCAP_SERVICES) {
		
		var vcapServices = JSON.parse(process.env.VCAP_SERVICES);
		// Pattern match to find the first instance of a dash service in
		// VCAP_SERVICES. If you know your service key, you can access the
		// service credentials directly by using the vcapServices object.
		for (var vcapService in vcapServices) {
			if (vcapService.match(/dash/i)) {
				credentials = vcapServices[vcapService][0].credentials;
			}
		}
	} 
}

initDBConnection();


 dataSources['tasks'] = {
          name: 'tasks',
          connector: 'dashdb',
          dsn: credentials.dsn,
          host: credentials.hostname,
          port: credentials.port,
		  database: credentials.db,
          user: credentials.username,
          password: credentials.password
        };        

module.exports = dataSources;