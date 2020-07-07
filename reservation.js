const reservations = [
    {
        routeName: "make",
        ID: "reservationID",
        name: "MakeReservation",
        email: "reserve@mail.com",
        phone: "000-000-0000"
    }
];

//Default AJAX page user sees
app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "index.html"))
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "/make.html"))
});

//Display all reservations
app.get("api/tables", function(req, res) {
    return res.json(reservations);
});

//Create a new reservation from JSON input
app.post("api/reservations", function(req, res) {
    let newReservation = req.body;


    newReservation.routeName = newCharacter.id.replace(/\s+/g, "").toLowerCase();

})

module.exports = reservations;