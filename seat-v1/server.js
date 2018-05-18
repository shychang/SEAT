// Dependencies 
var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');
var cors = require('cors');
const http = require('http');
var path = require('path');


// Variables
var app = express();
var db; 
var LISTINGS_COLLECTION = "testposts";
var ObjectID = mongodb.ObjectID;


// Express 
app.use(express.static(__dirname + '/src/'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to Database 
mongodb.MongoClient.connect("mongodb://0.0.0.0:27017/", function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 3001, function () {
    var port = server.address().port;
    console.log("App now running on port", port);  
});
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

// ROUTES 

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/api/listings", function(req, res) {
  db.collection(LISTINGS_COLLECTION).find().sort({"_id":-1}).limit(5).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get listings.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/listings", function(req, res) {
  var newListing = req.body;
  newListing.createDate = new Date();

  db.collection(LISTINGS_COLLECTION).insertOne(newListing, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new seat listing.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});


/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/api/listings/:id", function(req, res) {
  db.collection(LISTINGS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get listing.");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.delete("/api/listings/:id", function(req, res) {
  db.collection(LISTINGS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete listing");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/index'));
  //res.sendFile(path.join(__dirname, '/src/index.html'));
});



