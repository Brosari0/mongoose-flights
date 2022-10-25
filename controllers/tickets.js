const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
}

function create(req, res) {
    req.body.flight = req.params.id
    Ticket.create(req.body, function(err, ticket) {
        res.redirect(`/flights/${req.params.id}`)
        console.log(err);
    });
}

function newTicket(req, res) {
    Ticket.find({})
    .exec(function(err, tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            tickets
        });
    });
}