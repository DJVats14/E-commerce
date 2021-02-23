const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
const stripe = require('stripe')('sk_test_51I7xlyAkZiPHiocxUiRuE53SbzRFV2PMQi7TGfRFFkCYLPPrIz3qSjuyQitmnzTReXR6Fpyz6HGek2HcbsOm0IYW00xZmXcixa')

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//-API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total; 

    console.log('payment request received for this amount: ', total)

    const paymentIntent =  await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency : "INR",
    });

    //OK created
    response.status(201).send ({
        clientSecret : paymentIntent.client_secret,
    })
} )

//-Listen command
exports.api = functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/clone-778d0/us-central1/api



