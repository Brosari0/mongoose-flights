const Flight = require('../models/flight');
module.exports = {
    index,
    
}

module.exports = {
    index,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}