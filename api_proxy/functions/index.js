const functions = require("firebase-functions");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

const app = express()
var temporaryTokenStore = "";
var temporaryDataObject = [];
var loginPingCount = 0;
var queryPingCount = 0;
var loginPingBoolean = false;
var queryPingBoolean = false;

app.use(cors({ origin: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//reference: https://stackoverflow.com/questions/17121846/node-js-how-to-send-headers-with-form-data-using-request-module
//"https://us-central1-PROJECT_NAME.cloudfunctions.net/app/loginForce?email=" # email # "&password=" # password;
app.get("/loginForce", (req, res) => {

	var requestTimeOut = 30000;
	var userEmail = req.query.email;
	var userPassword = req.query.password;
	const API_KEY = "google_firebase_api_key"
	const apiURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY;

	var url = apiURL;
	var headers = { 
	    'Accept':  'application/json',
	    'Content-Type':  'application/json'
	};
	var formData = { email: userEmail, password: userPassword, returnSecureToken: 'true'};

	request.post({ url: url, form: formData, headers: headers }, function (err, httpResponse, body) {
	    if (err) {
			res.send(err);
		}
		// update the state of the component with the result here
		var data = JSON.parse(body);
		//console.log(data);
		if (!data["error"]) {
			if (loginPingBoolean === false){
				loginPingBoolean = true;
				temporaryTokenStore = data.idToken;
				setTimeout(() => {
					loginPingBoolean = false;
				  },requestTimeOut
				);
			}
			var user_id = data.localId
			let responseData = '{ "idToken": "' + temporaryTokenStore + '","localId": "' + user_id + '"}'
			res.send(responseData);
		} 
	});
	
})

app.get("/queryForce", (req, res) => {

	var requestTimeOut = 30000;
	var query_start_time = parseFloat(req.query.startMillis);
	var query_end_time = parseFloat(req.query.endMillis);
	var numberOfDocuments = parseInt((query_end_time - query_start_time) / 60.0, 10);
	// console.log(numberOfDocuments);
	if (numberOfDocuments < 1) {
		numberOfDocuments = 60
	}
	numberOfDocuments += 1

	var queryFormat = {
	  structuredQuery: {
	    from: [{ collectionId : 'time_data' }],
	    orderBy: { direction: 'DESCENDING', field: { fieldPath: 'timestamp'}},
	    limit: numberOfDocuments,
	  }, newTransaction: {}
	}

	const querySend = JSON.stringify(queryFormat);

	var userID = req.query.userID;
	var token = req.query.idToken;
	//set API_KEY value, PROJECT_NAME value, COLLECTION_ID value as setup with firebase database
	const API_KEY = "google_firebase_api_key"
	const PROJECT_COLLECTION_STRUCTURE = "PROJECT_NAME/databases/(default)/documents/COLLECTION_ID/"

	const url = "https://firestore.googleapis.com/v1/projects/" + PROJECT_COLLECTION_STRUCTURE + userID + ":runQuery?key="+API_KEY;

	var headers = { 
		"Authorization": "Bearer " + token,
	    "Content-Type": "application/json"
	};

	request.post({ url: url, json: true, body: queryFormat, headers: headers }, function (err, httpResponse, body) {
	    if (err) {
			res.send(err);
		}

		//remove last record in array "transaction": unique
		//remove potentially "readTime" from each record
		if (body.length > 2){
			if (queryPingBoolean === false){
				queryPingBoolean = true;
				body.reverse();
				body.pop();
				for (let i = 0; i < body.length; i++) {
					let tmpDictionary = body[i];
					delete tmpDictionary['readTime'];
					body[i] = tmpDictionary;
				}
				temporaryDataObject = body;
				setTimeout(() => {
					queryPingBoolean = false;
				  },requestTimeOut
				);
			}
			res.send(temporaryDataObject);
		}
	});
	
})

app.get("/hello", (req, res) => {
    res.send("world!")
})

exports.app = functions.https.onRequest(app)