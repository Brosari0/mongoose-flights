const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
}

function create(req, res) {
    const ticket = req.body;
    ticket.flight = req.params.id;
    Ticket.create(ticket, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`);
    });
}

function newTicket(req, res) {
    res.render('tickets/new', { title: 'Add Ticket', flightId: req.params.id});
}