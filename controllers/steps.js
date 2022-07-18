const axios = require("axios");
// const { google } = require("googleapis");

// const stepsBody0 = {
//   startTimeMillis: long,
//   endTimeMillis: long,
//   aggregateBy: [
//     {
//       dataTypeName: string,
//       dataSourceId: string,
//     },
//   ],
//   filteredDataQualityStandard: [string],
//   bucketByTime: {
//     durationMillis: long,
//     period: {
//       type: string,
//       value: integer,
//       timeZoneId: string,
//     },
//   },
//   bucketBySession: {
//     minDurationMillis: long,
//   },
//   bucketByActivityType: {
//     minDurationMillis: long,
//     activityDataSourceId: string,
//   },
//   bucketByActivitySegment: {
//     minDurationMillis: long,
//     activityDataSourceId: string,
//   },
// };

const dailyStepsBody = {
  aggregateBy: [
    {
      dataTypeName: "com.google.step_count.delta",
      dataSourceId:
        "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
    },
  ],
  bucketByTime: {
    durationMillis: 86400000, // 24 hours
  },
  startTimeMillis: 1655679600000,
  endTimeMillis: 1655766000000
  // startTimeMillis: 1654038000000, // 01 june 2022 <=> '2022-05-31T23:00:00.000Z' with -60 offset or UTC+1 (new Date(1654038000000).toISOString() new Date(1654038000000).getTimezoneOffset() )
  // endTimeMillis: 1656630000000, // 01 july 2022 <=> '2022-06-30T23:00:00.000Z' with -60 offset or UTC+1
};
const weeklyStepsBody = {
  aggregateBy: [
    {
      dataTypeName: "com.google.step_count.delta",
      dataSourceId:
        "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
    },
  ],
  bucketByTime: {
    // durationMillis: 86400000,
    period: {
      type: 'day',
      value: 7,
      timeZoneId: 'Africa/Casablanca', // ??? to be checked
    },
  },
  startTimeMillis: 1654038000000, // 01 june 2022 in UTC+1 <=> '2022-05-31T23:00:00.000Z' with -60 offset or UTC+1 (new Date(1654038000000).toISOString() new Date(1654038000000).getTimezoneOffset() )
  endTimeMillis: 1656630000000, // 01 july 2022 in UTC+1 <=> '2022-06-30T23:00:00.000Z' with -60 offset or UTC+1
};

exports.formatSteps = ({ bucket }) => {
  return bucket.map((dataItem) => {
    const value = dataItem?.dataset
      ?.shift()
      ["point"]?.shift()
      ?.value?.shift()?.intVal;
    return {
      offset: new Date(
        Number.parseInt(dataItem.startTimeMillis, 10)
      ).getTimezoneOffset(),
      startDate: new Date(
        Number.parseInt(dataItem.startTimeMillis, 10)
      ).toISOString(),
      endDate: new Date(
        Number.parseInt(dataItem.endTimeMillis, 10)
      ).toISOString(),
      metric: "steps",
      value: value ? value : 0,
    };
  });
};

exports.getSteps = async (accToken, startTimeStamp, endTimeStamp) => {
  return axios.post(
    "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate",
    // dailyStepsBody,
    // weeklyStepsBody,
    {
      aggregateBy: [
        {
          dataTypeName: "com.google.step_count.delta",
          dataSourceId:
            "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
        },
      ],
      bucketByTime: {
        durationMillis: 86400000, // 24 hours
      },
      startTimeMillis: startTimeStamp,
      endTimeMillis: endTimeStamp,

    },
    {
      headers: {
        authorization: `Bearer ${accToken}`,
      },
    }
  );
};

