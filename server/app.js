require('dotenv').config();
const express = require("express");
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
const stripe = require('stripe')(process.env.StripeKey); // Load your Stripe secret key

app.use(cors()); 
app.use(express.json()); 

app.post('/create-checkout-session', async (req, res) => {
    const { image,title, price } = req.body;
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            images: [image],
            name: title,
          },
          unit_amount: price,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:5173/Success',
      cancel_url: 'http://localhost:5173/Cancel',
      shipping_address_collection: {
        allowed_countries: ['IN'], 
      },
      billing_address_collection: 'required', 
      customer_creation: 'always', 
    });
  
    res.json({ id: session.id });
  });
  
  app.get('/session-status', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  
    res.send({
      status: session.status,
      customer_email: session.customer_details.email
    });
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
