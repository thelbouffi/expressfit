const { default: axios } = require("axios");
const express = require("express");
const {
  getAuthorizationUrl,
  setToken,
  getAccToken,
} = require("../controllers/generateAuthUrl");

const router = express.Router();

router.get("/authorize", async function (req, res, next) {
  const authUrl = getAuthorizationUrl();
  return res.status(301).redirect(authUrl);
});

router.get("/oauth2callback", async function (req, res, next) {
  const { code } = req.query;

  if (!code) return res.status(400).send("Bad request");

  // Get access and refresh tokens (if access_type is offline)
  const userCredentials = await setToken(code);

  return res.json(userCredentials);
});

module.exports = router;

/*
authorization url
https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.activity.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.blood_glucose.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.blood_pressure.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.body.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.body_temperature.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.heart_rate.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.location.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.nutrition.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.oxygen_saturation.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.reproductive_health.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.sleep.read&include_granted_scopes=true&response_type=code&client_id=444750955940-0361i5iv3ccskop9obj5ncbdp5k72gbs.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000

url after consent
http://localhost:3000/?code=4/0AdQt8qhwrx0UUFeMqjId9Vl9kMCNBYFq7t9o2KKOCKev5HaJQSwSawxLVTSnphqEmakDDw&scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/fitness.activity.read%20https://www.googleapis.com/auth/fitness.blood_glucose.read%20https://www.googleapis.com/auth/fitness.blood_pressure.read%20https://www.googleapis.com/auth/fitness.body.read%20https://www.googleapis.com/auth/fitness.body_temperature.read%20https://www.googleapis.com/auth/fitness.heart_rate.read%20https://www.googleapis.com/auth/fitness.location.read%20https://www.googleapis.com/auth/fitness.nutrition.read%20https://www.googleapis.com/auth/fitness.oxygen_saturation.read%20https://www.googleapis.com/auth/fitness.reproductive_health.read%20https://www.googleapis.com/auth/fitness.sleep.read&authuser=0&hd=vo2-consultants.com&prompt=consent
*/
