// Dependencies
// =============================================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const reservation = require("reservation.js");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const reservationList = [
    {
        routeName: "make",
        ID: "reservationID",
        name: "MakeReservation",
        email: "reserve@mail.com",
        phone: "000-000-0000"
    }
];

const waitList = [
    {
        routeName: "make",
        ID: "reservationID",
        name: "MakeReservation",
        email: "reserve@mail.com",
        phone: "000-000-0000"
    }
]

//Default AJAX page user sees
app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "index.html"))
});

app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "/make.html"))
});

//Display all reservations
app.get("api/tables", function(req, res) {
    return res.json(reservationList);
});

//Create a new reservation from JSON input
app.post("api/reservationList", function(req, res) {
    let newReservation = req.body;


    newReservation.routeName = newCharacter.id.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservationList.push(newCharacter);

    res.json(newReservation);

})


















// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
