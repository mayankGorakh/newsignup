/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req, res){

        req.session.authenticate=true;
		console.log(req.session);
		res.view('session/new');
	}
	
};

