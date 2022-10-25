const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    const newFlight = new Flight();
// Obtain the default date
const dt = newFlight.departs;
// Format the date for the value attribute of the input
let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
res.render('flights/new', { title: 'New Flight', departsDate });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { title: 'Flight Details', flight, tickets});
        });
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'Flight Index', flights });
    });
}