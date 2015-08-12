"use strict";

module.exports = function(Plugin) {

	// filter:admin.header.build
	Plugin.addAdminNavigation = function(header, callback) {
		header.plugins.push({
			route: '/paycoin-admin',
			icon: 'fa-tint',
			name: 'Paycoin Tipping'
		});

		callback(null, header);
	};
};
