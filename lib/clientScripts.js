"use strict";

var nconf = require('nconf');

module.exports = function(Plugin) {
	// filter:admin.scripts.get
	Plugin.addAdminScripts = function(scripts, callback) {
		scripts.push('/plugins/nodebb-plugin-paycoin/lib/admin.js');
		callback(null, scripts);
	};
};
