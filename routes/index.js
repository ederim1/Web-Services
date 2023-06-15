const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

// add oath0 code here
const { auth } = require('express-openid-connect');


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.secret,
  baseURL: 'http://localhost:3000',
  clientID: 'YeuNFyvuWrDwTYJULK7JeIMq6sZDVkVg',
  issuerBaseURL: 'https://dev-ggz053ev4nk8ly5c.us.auth0.com'
};


// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});


router.use("/players",requiresAuth(), require("./players"));
router.use("/teams", require("./teams"));

module.exports = router;

