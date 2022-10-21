const Flight = require('../models/movie');
module.exports = {
    index,

}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}