module.exports =  function (req, res) {

	res.locals.flash = {};

	if (!req.session.flash) return next ();
		res.locals.flash = _.clone(req.session.flash);
		
		res.session.flash ={};

		next();
	};