"use strict";


function renderAdmin(req, res, next) {
	/*
	Make sure the route matches your path to template exactly.

	If your route was:
		myforum.com/some/complex/route/
	your template should be:
		templates/some/complex/route.tpl
	and you would render it like so:
		res.render('some/complex/route');    */

	res.render('admin/paycoin-admin', {});
}


module.exports = function(app, middleware, controllers) {
	// We create two routes for every view. One API call, and the actual route itself.
	// Just add the buildHeader middleware to your route and NodeBB will take care of everything for you.

	app.get('/admin/paycoin-admin', middleware.admin.buildHeader, renderAdmin);
	app.get('/api/admin/paycoin-admin', renderAdmin);
};
