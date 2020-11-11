const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);
const MONGODB_URI = 'mongodb+srv://natg1010:Snickers8nat10@cluster0.pm8yq.mongodb.net/travelerdb?retryWrites=true&w=majority'
// Connect to the Mongo DB
mongoose.connect(MONGODB_URI || "mongodb://localhost/travelerDB",
     {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

//schema 
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model 
const Post = mongoose.model('Post', PostSchema);

//saving data to our mongo database
const data = {
    title: "testTitle1",
    body: "testBody1"
};

const newPost = new Post(data); //instance of the model

newPost.save((error) => {
    if(error) {
    console.log('oops, something went wrong');
    } else {
        console.log('Data has been saved!');
    }
});
// .save()
//Routes 
app.get('/api', (req, res) => {
    const data = {
        username: 'nat',
        age: 22
    };

    Post.find({})
        .then((data) => {
            console.log('Data', data);
        })
        .catch((error) => {
            console.log('error:', error)
        })
})
app.get('/api/name', (req, res) => {
    const data = {
        username: 'natalie',
        age: 44
    };
    res.json(data);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
