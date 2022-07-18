const axios = require("axios");
const google = require("googleapis");

// 1654038000000 2022-05-31T23:00:00.000Z
// 1656630000000 2022-06-30T23:00:00.000Z

// 1655679600000 2022-06-20T00:00:00.000Z
// 1655766000000 2022-06-20T23:00:00.000Z

exports.getStepsDistance = (accToken, startDate, endDate) => {
  return axios.post(
    "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
    {
      aggregateBy: [
        {
          dataTypeName: "com.google.distance.delta",
          // dataSourceId:
          //   "derived:com.google.distance.delta:com.google.android.gms:merge_distance_delta",
          //   "raw:com.google.distance.delta:com.google.android.apps.fitness:user_input",
          //   
        },
      ],
      bucketByTime: {
        // durationMillis: 86400000,
        period: {
          type: 'day',
          value: 1,
          timeZoneId: 'Africa/Casablanca', // ??? to be checked
        },
      },
      // startTimeMillis: 1654038000000, // 01 june 2022 in UTC+1 <=> '2022-05-31T23:00:00.000Z' with -60 offset or UTC+1 (new Date(1654038000000).toISOString() new Date(1654038000000).getTimezoneOffset() )
      // endTimeMillis: 1656630000000, // 01 july 2022 in UTC+1 <=> '2022-06-30T23:00:00.000Z' with -60 offset or UTC+1
      // startTimeMillis: 1655679600000,
      // endTimeMillis: 1655766000000,
      
      startTimeMillis: startDate,
      endTimeMillis: endDate,

    },
    {
      headers: {
        authorization: `Bearer ${accToken}`,
      },
    }
  );
}
// exports.getWalkingDistance = (token) => {}
// exports.getRunningDistance = (token) => {}

