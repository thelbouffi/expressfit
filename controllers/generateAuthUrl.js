const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  JSON.parse(process.env.GOOGLE_REDIRECT_URIS).shift()
);

const scopes = [
  'openid',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/fitness.activity.read',
  'https://www.googleapis.com/auth/fitness.blood_glucose.read',
  'https://www.googleapis.com/auth/fitness.blood_pressure.read',
  'https://www.googleapis.com/auth/fitness.body.read',
  'https://www.googleapis.com/auth/fitness.body_temperature.read',
  'https://www.googleapis.com/auth/fitness.heart_rate.read',
  'https://www.googleapis.com/auth/fitness.location.read',
  'https://www.googleapis.com/auth/fitness.nutrition.read',
  'https://www.googleapis.com/auth/fitness.oxygen_saturation.read',
  'https://www.googleapis.com/auth/fitness.reproductive_health.read',
  'https://www.googleapis.com/auth/fitness.sleep.read',
];

exports.getAuthorizationUrl = () => {
  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
    scope: scopes,
    include_granted_scopes: true
  });

  return authorizationUrl;
}

exports.setToken = async (code) => {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  
  return tokens;
}

exports.getAccToken = async (cb) => {
  const at = await oauth2Client.getAccessToken(cb);
  return at;
}

// exports.getUserInfo = async (code) => {
//   goo
// }