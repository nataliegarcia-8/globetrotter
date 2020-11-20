import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  saveTrip: function(id, tripData) {
    console.log(tripData, id);
    return axios.post("/api/users/" + id, tripData);
  },
  getTrip: function(id) {
    return axios.get("/api/trips/" + id);
  },
  saveActivity: function(id, activityData) {
    console.log(activityData, id);
    return axios.post("/api/trips/" + id, activityData);
    
  },
  saveExpense: function(id, expensesData) {
    console.log(expensesData, id);
    return axios.post("/api/expenses/" + id, expensesData);
    
  },
  getTrips: function() {
    return axios.get("/api/trips");
  },


};


