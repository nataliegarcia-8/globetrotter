const mongoose = require("mongoose");
const db = require("../models");

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/globetrotter"
);

const usersSeed = [
  {
    name: "ya boi",
    id: "asd3asd442as",
    date: new Date(Date.now())
  },
  
];
const tripsSeed = [
  {
  city: "Atlanta",
  lat: 33.7490,
  long: 84.3880,
  departure: "11/14/2020",
  return: "11/24/2020"
  },
  {
    city: "NewYork",
    lat: 40.748817,
    long: -73.985428,
    departure: "11/14/2020",
    return: "11/24/2020"
    },
  
];

db.Users
  .remove({})
  .then(() => db.Users.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Trips
  .remove({})
  .then(() => db.Trips.collection.insertMany(tripsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
