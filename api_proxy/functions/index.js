const functions = require("firebase-functions");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

const app = express();

var temporaryUID1 = "";
var temporaryUID2 = "";
var temporaryUID3 = "";

var temporaryTokenStore1 = "";
var temporaryTokenStore2 = "";
var temporaryTokenStore3 = "";

var temporaryDataObject1 = [];
var temporaryDataObject2 = [];
var temporaryDataObject3 = [];

var loginPingBoolean1 = false;
var loginPingBoolean2 = false;
var loginPingBoolean3 = false;

var queryPingBoolean1 = false;
var queryPingBoolean2 = false;
var queryPingBoolean2 = false;

app.use(cors({ origin: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//reference: https://stackoverflow.com/questions/17121846/node-js-how-to-send-headers-with-form-data-using-request-module
//"https://us-central1-PROJECT_NAME.cloudfunctions.net/app/loginForce?email=" # email # "&password=" # password;
app.get("/loginForce", (req, res) => {

	var requestTimeOut = 30000;
	var userEmail = req.query.email;
	var userPassword = req.query.password;
	const API_KEY = "AIzaSyB3bZIT7sW2Sy5wQfRzkZzoLbEOixGDF14"
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
			var user_id = data.localId;
			if (loginPingBoolean1 === false && user_id !== temporaryUID2 && user_id !== temporaryUID3){
				loginPingBoolean1 = true;
				temporaryTokenStore1 = data.idToken;
				temporaryUID1 = data.localId;
				setTimeout(() => {
					temporaryUID1 = "";
					temporaryTokenStore1 = "";
					loginPingBoolean1 = false;
				  },requestTimeOut
				);
			} else if (loginPingBoolean2 === false && user_id !== temporaryUID1 && user_id !== temporaryUID3){
				loginPingBoolean2 = true;
				temporaryTokenStore2 = data.idToken;
				temporaryUID2 = data.localId;
				setTimeout(() => {
					temporaryUID2 = "";
					temporaryTokenStore2 = "";
					loginPingBoolean2 = false;
				  },requestTimeOut
				);
			} else if (loginPingBoolean3 === false && user_id !== temporaryUID1 && user_id !== temporaryUID2){
				loginPingBoolean3 = true;
				temporaryTokenStore3 = data.idToken;
				temporaryUID3 = data.localId;
				setTimeout(() => {
					temporaryUID3 = "";
					temporaryTokenStore3 = "";
					loginPingBoolean3 = false;
				  },requestTimeOut
				);
			}
			if (user_id === temporaryUID1){
				let responseData = '{ "idToken": "' + temporaryTokenStore1 + '","localId": "' + temporaryUID1 + '"}'
				res.send(responseData);
			}
			if (user_id === temporaryUID2){
				let responseData = '{ "idToken": "' + temporaryTokenStore2 + '","localId": "' + temporaryUID2 + '"}'
				res.send(responseData);
			}
			if (user_id === temporaryUID3){
				let responseData = '{ "idToken": "' + temporaryTokenStore3 + '","localId": "' + temporaryUID3 + '"}'
				res.send(responseData);
			}
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
	    where: {
            fieldFilter: {
                field: {
                    fieldPath: 'timestamp'
                },
                op: 'LESS_THAN',
                value: {
                    doubleValue: query_end_time,
                }
            }
        },
	    limit: numberOfDocuments,
	  }, newTransaction: {}
	};

	var userID = req.query.userID;
	var token = req.query.idToken;

	var PROJECT_NAME = "FIREBASE_PROJECT_NAME";
	var COLLECTION_NAME = "FIREBASE_COLLECTION_NAME"

	const url = "https://firestore.googleapis.com/v1/projects/" + PROJECT_NAME + "/databases/(default)/documents/" + COLLECTION_NAME + "/" + userID + ":runQuery?key=API_KEY";

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
			if (queryPingBoolean1 === false && userID !== temporaryUID2 && userID !== temporaryUID3){
				queryPingBoolean1 = true;
				body.reverse();
				body.pop();
				for (let i = 0; i < body.length; i++) {
					let tmpDictionary = body[i];
					delete tmpDictionary['readTime'];
					body[i] = tmpDictionary;
				}
				temporaryDataObject1 = body;
				setTimeout(() => {
					queryPingBoolean1 = false;
					temporaryDataObject1 = [];
				  },requestTimeOut
				);
			} else if (queryPingBoolean2 === false && userID !== temporaryUID1 && userID !== temporaryUID3){
				queryPingBoolean2 = true;
				body.reverse();
				body.pop();
				for (let i = 0; i < body.length; i++) {
					let tmpDictionary = body[i];
					delete tmpDictionary['readTime'];
					body[i] = tmpDictionary;
				}
				temporaryDataObject2 = body;
				setTimeout(() => {
					queryPingBoolean2 = false;
					temporaryDataObject2 = [];
				  },requestTimeOut
				);
			} else if (queryPingBoolean3 === false && userID !== temporaryUID1 && userID !== temporaryUID2){
				queryPingBoolean3 = true;
				body.reverse();
				body.pop();
				for (let i = 0; i < body.length; i++) {
					let tmpDictionary = body[i];
					delete tmpDictionary['readTime'];
					body[i] = tmpDictionary;
				}
				temporaryDataObject3 = body;
				setTimeout(() => {
					queryPingBoolean3 = false;
					temporaryDataObject3 = [];
				  },requestTimeOut
				);
			};
			if (userID === temporaryUID1){
				res.send(temporaryDataObject1);
			}
			if (userID === temporaryUID2){
				res.send(temporaryDataObject2);
			}
			if (userID === temporaryUID3){
				res.send(temporaryDataObject3);
			}
		}
	});
	
})

app.get("/hello", (req, res) => {
    res.send("world!")
})

exports.app = functions.https.onRequest(app)