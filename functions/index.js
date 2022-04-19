const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KmqNJKqoei519IR83nKqb1JjBbsoagNw0BXSOB925N12DlEkmOeyLzZlWWn2RyHxXv0ml11GMzTkrtxEDjk4f5T00zJmxRm5m')

// API

// - App config
const app = express();
// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// - API routes
app.get('/',(request, response) => response.status(200).send('hello word'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Paymnet request recived BOOM for this amunt >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// - Listen command
exports.api = functions.https.onRequest(app)
//http://localhost:5001/clone-fe323/us-central1/api
// firebase emulators:start
// luego aparecer lo que dice en el localhost