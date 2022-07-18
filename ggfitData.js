// https://developers.google.com/fit/rest/v1/reference/users/dataSources/get
/*
Users handling:
Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
*/
// https://www.googleapis.com/fitness/v1/users/me/dataSources
const a = {
  dataSource: [
    {
      dataStreamId:
        "derived:com.google.active_minutes:com.google.android.fit:Xiaomi:Redmi Note 7:d20be412:top_level",
      dataStreamName: "top_level",
      type: "derived",
      dataType: {
        name: "com.google.active_minutes",
        field: [
          {
            name: "duration",
            format: "integer",
          },
        ],
      },
      device: {
        uid: "d20be412",
        type: "phone",
        version: "",
        model: "Redmi Note 7",
        manufacturer: "Xiaomi",
      },
      application: {
        packageName: "com.google.android.fit",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.active_minutes:com.google.android.gms:merge_active_minutes",
      dataStreamName: "merge_active_minutes",
      type: "derived",
      dataType: {
        name: "com.google.active_minutes",
        field: [
          {
            name: "duration",
            format: "integer",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.activity.segment:com.google.android.apps.fitness:session_activity_segment",
      dataStreamName: "session_activity_segment",
      type: "derived",
      dataType: {
        name: "com.google.activity.segment",
        field: [
          {
            name: "activity",
            format: "integer",
          },
        ],
      },
      application: {
        packageName: "com.google.android.apps.fitness",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.activity.segment:com.google.android.fit:Xiaomi:Redmi Note 7:d20be412:top_level",
      dataStreamName: "top_level",
      type: "derived",
      dataType: {
        name: "com.google.activity.segment",
        field: [
          {
            name: "activity",
            format: "integer",
          },
        ],
      },
      device: {
        uid: "d20be412",
        type: "phone",
        version: "",
        model: "Redmi Note 7",
        manufacturer: "Xiaomi",
      },
      application: {
        packageName: "com.google.android.fit",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.activity.segment:com.google.android.gms:merge_activity_segments",
      dataStreamName: "merge_activity_segments",
      type: "derived",
      dataType: {
        name: "com.google.activity.segment",
        field: [
          {
            name: "activity",
            format: "integer",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.activity.segment:com.google.android.gms:session_activity_segment",
      dataStreamName: "session_activity_segment",
      type: "derived",
      dataType: {
        name: "com.google.activity.segment",
        field: [
          {
            name: "activity",
            format: "integer",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.calories.bmr:com.google.android.gms:merged",
      dataStreamName: "merged",
      type: "derived",
      dataType: {
        name: "com.google.calories.bmr",
        field: [
          {
            name: "calories",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.calories.expended:com.google.android.fit:Xiaomi:Redmi Note 7:d20be412:top_level",
      dataStreamName: "top_level",
      type: "derived",
      dataType: {
        name: "com.google.calories.expended",
        field: [
          {
            name: "calories",
            format: "floatPoint",
          },
        ],
      },
      device: {
        uid: "d20be412",
        type: "phone",
        version: "",
        model: "Redmi Note 7",
        manufacturer: "Xiaomi",
      },
      application: {
        packageName: "com.google.android.fit",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended",
      dataStreamName: "merge_calories_expended",
      type: "derived",
      dataType: {
        name: "com.google.calories.expended",
        field: [
          {
            name: "calories",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.distance.delta:com.google.android.fit:Xiaomi:Redmi Note 7:d20be412:top_level",
      dataStreamName: "top_level",
      type: "derived",
      dataType: {
        name: "com.google.distance.delta",
        field: [
          {
            name: "distance",
            format: "floatPoint",
          },
        ],
      },
      device: {
        uid: "d20be412",
        type: "phone",
        version: "",
        model: "Redmi Note 7",
        manufacturer: "Xiaomi",
      },
      application: {
        packageName: "com.google.android.fit",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.distance.delta:com.google.android.gms:merge_distance_delta",
      dataStreamName: "merge_distance_delta",
      type: "derived",
      dataType: {
        name: "com.google.distance.delta",
        field: [
          {
            name: "distance",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.heart_minutes:com.google.android.fit:Xiaomi:Redmi Note 7:d20be412:top_level",
      dataStreamName: "top_level",
      type: "derived",
      dataType: {
        name: "com.google.heart_minutes",
        field: [
          {
            name: "intensity",
            format: "floatPoint",
          },
        ],
      },
      device: {
        uid: "d20be412",
        type: "phone",
        version: "",
        model: "Redmi Note 7",
        manufacturer: "Xiaomi",
      },
      application: {
        packageName: "com.google.android.fit",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.heart_minutes:com.google.android.gms:merge_heart_minutes",
      dataStreamName: "merge_heart_minutes",
      type: "derived",
      dataType: {
        name: "com.google.heart_minutes",
        field: [
          {
            name: "intensity",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.height:com.google.android.gms:merge_height",
      dataStreamName: "merge_height",
      type: "derived",
      dataType: {
        name: "com.google.height",
        field: [
          {
            name: "height",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.sleep.segment:com.google.android.gms:merged",
      dataStreamName: "merged",
      type: "derived",
      dataType: {
        name: "com.google.sleep.segment",
        field: [
          {
            name: "sleep_segment_type",
            format: "integer",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.speed:com.google.android.fit:Xiaomi:Redmi Note 7:d20be412:top_level",
      dataStreamName: "top_level",
      type: "derived",
      dataType: {
        name: "com.google.speed",
        field: [
          {
            name: "speed",
            format: "floatPoint",
          },
        ],
      },
      device: {
        uid: "d20be412",
        type: "phone",
        version: "",
        model: "Redmi Note 7",
        manufacturer: "Xiaomi",
      },
      application: {
        packageName: "com.google.android.fit",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.speed:com.google.android.gms:merge_speed",
      dataStreamName: "merge_speed",
      type: "derived",
      dataType: {
        name: "com.google.speed",
        field: [
          {
            name: "speed",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.step_count.delta:com.google.android.fit:Xiaomi:Redmi Note 7:d20be412:top_level",
      dataStreamName: "top_level",
      type: "derived",
      dataType: {
        name: "com.google.step_count.delta",
        field: [
          {
            name: "steps",
            format: "integer",
          },
        ],
      },
      device: {
        uid: "d20be412",
        type: "phone",
        version: "",
        model: "Redmi Note 7",
        manufacturer: "Xiaomi",
      },
      application: {
        packageName: "com.google.android.fit",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
      dataStreamName: "estimated_steps",
      type: "derived",
      dataType: {
        name: "com.google.step_count.delta",
        field: [
          {
            name: "steps",
            format: "integer",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.step_count.delta:com.google.android.gms:merge_step_deltas",
      dataStreamName: "merge_step_deltas",
      type: "derived",
      dataType: {
        name: "com.google.step_count.delta",
        field: [
          {
            name: "steps",
            format: "integer",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "derived:com.google.weight:com.google.android.gms:merge_weight",
      dataStreamName: "merge_weight",
      type: "derived",
      dataType: {
        name: "com.google.weight",
        field: [
          {
            name: "weight",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.gms",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "raw:com.google.active_minutes:com.google.android.apps.fitness:user_input",
      dataStreamName: "user_input",
      type: "raw",
      dataType: {
        name: "com.google.active_minutes",
        field: [
          {
            name: "duration",
            format: "integer",
          },
        ],
      },
      application: {
        packageName: "com.google.android.apps.fitness",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "raw:com.google.activity.segment:com.google.android.apps.fitness:user_input",
      dataStreamName: "user_input",
      type: "raw",
      dataType: {
        name: "com.google.activity.segment",
        field: [
          {
            name: "activity",
            format: "integer",
          },
        ],
      },
      application: {
        packageName: "com.google.android.apps.fitness",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "raw:com.google.distance.delta:com.google.android.apps.fitness:user_input",
      dataStreamName: "user_input",
      type: "raw",
      dataType: {
        name: "com.google.distance.delta",
        field: [
          {
            name: "distance",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.apps.fitness",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "raw:com.google.heart_minutes:com.google.android.apps.fitness:user_input",
      dataStreamName: "user_input",
      type: "raw",
      dataType: {
        name: "com.google.heart_minutes",
        field: [
          {
            name: "intensity",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.apps.fitness",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "raw:com.google.height:com.google.android.apps.fitness:user_input",
      dataStreamName: "user_input",
      type: "raw",
      dataType: {
        name: "com.google.height",
        field: [
          {
            name: "height",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.apps.fitness",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:d20be412:Step Counter",
      dataStreamName: "Step Counter",
      type: "raw",
      dataType: {
        name: "com.google.step_count.cumulative",
        field: [
          {
            name: "steps",
            format: "integer",
          },
        ],
      },
      device: {
        uid: "d20be412",
        type: "phone",
        version: "",
        model: "Redmi Note 7",
        manufacturer: "Xiaomi",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "raw:com.google.step_count.delta:com.google.android.apps.fitness:user_input",
      dataStreamName: "user_input",
      type: "raw",
      dataType: {
        name: "com.google.step_count.delta",
        field: [
          {
            name: "steps",
            format: "integer",
          },
        ],
      },
      application: {
        packageName: "com.google.android.apps.fitness",
      },
      dataQualityStandard: [],
    },
    {
      dataStreamId:
        "raw:com.google.weight:com.google.android.apps.fitness:user_input",
      dataStreamName: "user_input",
      type: "raw",
      dataType: {
        name: "com.google.weight",
        field: [
          {
            name: "weight",
            format: "floatPoint",
          },
        ],
      },
      application: {
        packageName: "com.google.android.apps.fitness",
      },
      dataQualityStandard: [],
    },
  ],
};

/*
 * Scopes
 */
const scopes = {
  access_token:
    "ya29.a0ARrdaM8Fjn-PCMNeNeC87_4fMujE5jw1wSZutZmFC0vuQAmg5vIibb_CJIMqgVNgNwM0uFjBsTaS62saShPL3NVrCarwpYFkaOTz9X7idzRh9m4KN3hZLYWGvO1CkMPcDJE3gTmEAZZq6JsGlehN5SBrr66B",
  scope: `
  https://www.googleapis.com/auth/fitness.heart_rate.write
  https://www.googleapis.com/auth/fitness.location.read
  https://www.googleapis.com/auth/fitness.activity.write
  https://www.googleapis.com/auth/fitness.heart_rate.read
  https://www.googleapis.com/auth/fitness.reproductive_health.write
  https://www.googleapis.com/auth/fitness.blood_pressure.write
  https://www.googleapis.com/auth/fitness.blood_pressure.read
  https://www.googleapis.com/auth/fitness.reproductive_health.read
  https://www.googleapis.com/auth/fitness.activity.read
  https://www.googleapis.com/auth/fitness.body_temperature.write
  https://www.googleapis.com/auth/fitness.nutrition.write
  https://www.googleapis.com/auth/fitness.nutrition.read
  https://www.googleapis.com/auth/fitness.body_temperature.read
  https://www.googleapis.com/auth/fitness.oxygen_saturation.write
  https://www.googleapis.com/auth/fitness.sleep.write
  https://www.googleapis.com/auth/fitness.oxygen_saturation.read
  https://www.googleapis.com/auth/fitness.body.write
  https://www.googleapis.com/auth/fitness.body.read
  https://www.googleapis.com/auth/fitness.sleep.read
  https://www.googleapis.com/auth/fitness.blood_glucose.write
  https://www.googleapis.com/auth/fitness.location.write
  https://www.googleapis.com/auth/fitness.blood_glucose.read
  `,
  token_type: "Bearer",
  expires_in: 3599,
  refresh_token:
    "1//047o5EAVU-1f8CgYIARAAGAQSNwF-L9Irvf-STGET0Ct87ZdtvGhLM9Z6mstp-q-J8Jy1mPi7hfi8rHddgEQ5nKlObyhChiSsE94",
};

/*
 * datasets
 */
// POST https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate
// body
const body = {
  aggregateBy: [
    {
      dataTypeName: "com.google.step_count.delta",
      dataSourceId:
        "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
    },
  ],

  startTimeMillis: 1654038000000, // 01june2022
  endTimeMillis: 1656630000000, // 01 july 2022
};
//response
const res00 = {
  bucket: [
    {
      startTimeMillis: "1654038000000",
      endTimeMillis: "1656630000000",
      dataset: [
        {
          dataSourceId:
            "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
          point: [
            {
              startTimeNanos: "1654045440000000000",
              originDataSourceId:
                "raw:com.google.step_count.delta:com.google.android.apps.fitness:user_input",
              endTimeNanos: "1654047240000000000",
              value: [
                {
                  mapVal: [],
                  intVal: 15000,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655190960000000000",
              originDataSourceId:
                "raw:com.google.activity.segment:com.google.android.apps.fitness:user_input",
              endTimeNanos: "1655192760000000000",
              value: [
                {
                  mapVal: [],
                  intVal: 5100,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655207280743000000",
              originDataSourceId:
                "raw:com.google.activity.segment:com.google.android.apps.fitness:user_input",
              endTimeNanos: "1655209080743000000",
              value: [
                {
                  mapVal: [],
                  intVal: 5100,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655210809968624962",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655210869968624962",
              value: [
                {
                  mapVal: [],
                  intVal: 20,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655269680000000000",
              originDataSourceId:
                "raw:com.google.step_count.delta:com.google.android.apps.fitness:user_input",
              endTimeNanos: "1655273280000000000",
              value: [
                {
                  mapVal: [],
                  intVal: 26330,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655280587060232314",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655280647060232314",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655283600000000000",
              originDataSourceId:
                "raw:com.google.step_count.delta:com.google.android.apps.fitness:user_input",
              endTimeNanos: "1655285400000000000",
              value: [
                {
                  mapVal: [],
                  intVal: 10000,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655301784324291136",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655301844324291136",
              value: [
                {
                  mapVal: [],
                  intVal: 24,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655301851447975576",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655301921447976600",
              value: [
                {
                  mapVal: [],
                  intVal: 35,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655302007328639752",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655302067328639752",
              value: [
                {
                  mapVal: [],
                  intVal: 19,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655311198872592145",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655311244629045749",
              value: [
                {
                  mapVal: [],
                  intVal: 29,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655315501185915234",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655315561185915234",
              value: [
                {
                  mapVal: [],
                  intVal: 17,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655323519528977696",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655323579528977696",
              value: [
                {
                  mapVal: [],
                  intVal: 25,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655371335843041207",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655371395843041207",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655371759001037961",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655371819001037961",
              value: [
                {
                  mapVal: [],
                  intVal: 19,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655397550354938439",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655397610354938439",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655397610354938439",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655397612431252100",
              value: [
                {
                  mapVal: [],
                  intVal: 3,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655399030327606629",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655399090327606629",
              value: [
                {
                  mapVal: [],
                  intVal: 25,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655399094031155436",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655399154031155436",
              value: [
                {
                  mapVal: [],
                  intVal: 10,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655403731157786859",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655403791157786859",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655404830418002570",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655404890418002570",
              value: [
                {
                  mapVal: [],
                  intVal: 17,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655404920914108341",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655404980914108341",
              value: [
                {
                  mapVal: [],
                  intVal: 21,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655404980914108341",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655405009108262955",
              value: [
                {
                  mapVal: [],
                  intVal: 22,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655405034396246268",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655405094396246268",
              value: [
                {
                  mapVal: [],
                  intVal: 12,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655494587364001636",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655494647364001636",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655494647364001636",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655494707580349806",
              value: [
                {
                  mapVal: [],
                  intVal: 36,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655495131917986967",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655495191917986967",
              value: [
                {
                  mapVal: [],
                  intVal: 29,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655495191917986967",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655495262294132570",
              value: [
                {
                  mapVal: [],
                  intVal: 77,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655495280333245476",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655495380333243428",
              value: [
                {
                  mapVal: [],
                  intVal: 50,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655495380333243428",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655495408884993336",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655495408884993336",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655495550251527821",
              value: [
                {
                  mapVal: [],
                  intVal: 87,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655495550251527821",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655495670840788290",
              value: [
                {
                  mapVal: [],
                  intVal: 89,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655495670840788290",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655495743148252890",
              value: [
                {
                  mapVal: [],
                  intVal: 84,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655495743148252890",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655495781179128926",
              value: [
                {
                  mapVal: [],
                  intVal: 53,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655495801505001203",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655495929505009395",
              value: [
                {
                  mapVal: [],
                  intVal: 64,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655495929505009395",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655496004016495933",
              value: [
                {
                  mapVal: [],
                  intVal: 95,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655496004016495933",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655496064904591802",
              value: [
                {
                  mapVal: [],
                  intVal: 83,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655496064904591802",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655496091268345785",
              value: [
                {
                  mapVal: [],
                  intVal: 21,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655496101326260279",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655496207326259255",
              value: [
                {
                  mapVal: [],
                  intVal: 53,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655496207326259255",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655496257930202126",
              value: [
                {
                  mapVal: [],
                  intVal: 40,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655496257930202126",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655496297043849587",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655496434943639520",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655496494943639520",
              value: [
                {
                  mapVal: [],
                  intVal: 25,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655496615764307975",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655496743764316167",
              value: [
                {
                  mapVal: [],
                  intVal: 64,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655496743764316167",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655496781982913579",
              value: [
                {
                  mapVal: [],
                  intVal: 61,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655505350598950250",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655505578598956394",
              value: [
                {
                  mapVal: [],
                  intVal: 114,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655505578598956394",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655505593709518359",
              value: [
                {
                  mapVal: [],
                  intVal: 24,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655507408468277139",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655507468468277139",
              value: [
                {
                  mapVal: [],
                  intVal: 16,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655507468468277139",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655507532007148085",
              value: [
                {
                  mapVal: [],
                  intVal: 106,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655507532007148085",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655507570494522544",
              value: [
                {
                  mapVal: [],
                  intVal: 57,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655511842375564460",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655511902375564460",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655546944220022144",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655547004220022144",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655548707640882014",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655548767640882014",
              value: [
                {
                  mapVal: [],
                  intVal: 17,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655555905901408913",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655555965901408913",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655564955231283233",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655565015231283233",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655565603134578614",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655565663134578614",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655566882227015518",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655566942227015518",
              value: [
                {
                  mapVal: [],
                  intVal: 12,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655569688188441579",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655569748188441579",
              value: [
                {
                  mapVal: [],
                  intVal: 18,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655569756313469079",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655569816313469079",
              value: [
                {
                  mapVal: [],
                  intVal: 20,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655572645419628510",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655572705419628510",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655572705419628510",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655572729857982123",
              value: [
                {
                  mapVal: [],
                  intVal: 17,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655575919011434383",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655575979011434383",
              value: [
                {
                  mapVal: [],
                  intVal: 12,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655579614669306702",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655579674669306702",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655579892028611386",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655579952028611386",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655580004701200538",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655580074701201562",
              value: [
                {
                  mapVal: [],
                  intVal: 35,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655580188243494007",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655580228885000000",
              value: [
                {
                  mapVal: [],
                  intVal: 20,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655581521601000000",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655581526657549720",
              value: [
                {
                  mapVal: [],
                  intVal: 2,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655581526657549720",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655581613379758251",
              value: [
                {
                  mapVal: [],
                  intVal: 75,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655581613379758251",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655581672996945751",
              value: [
                {
                  mapVal: [],
                  intVal: 96,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655581672996945751",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655581735032956493",
              value: [
                {
                  mapVal: [],
                  intVal: 69,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655581735032956493",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655581794972714794",
              value: [
                {
                  mapVal: [],
                  intVal: 90,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655581794972714794",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655581856465480674",
              value: [
                {
                  mapVal: [],
                  intVal: 96,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655581856465480674",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655581915478359092",
              value: [
                {
                  mapVal: [],
                  intVal: 95,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655581915478359092",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582042404079307",
              value: [
                {
                  mapVal: [],
                  intVal: 212,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582042404079307",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582158984739455",
              value: [
                {
                  mapVal: [],
                  intVal: 171,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582158984739455",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582279395383986",
              value: [
                {
                  mapVal: [],
                  intVal: 194,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582279395383986",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582401391191163",
              value: [
                {
                  mapVal: [],
                  intVal: 203,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582401391191163",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582463332627931",
              value: [
                {
                  mapVal: [],
                  intVal: 102,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582463332627931",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582522634294190",
              value: [
                {
                  mapVal: [],
                  intVal: 98,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582522634294190",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582584741777100",
              value: [
                {
                  mapVal: [],
                  intVal: 105,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582584741777100",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582643965989747",
              value: [
                {
                  mapVal: [],
                  intVal: 101,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582643965989747",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582707138105881",
              value: [
                {
                  mapVal: [],
                  intVal: 106,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582707138105881",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582827314078981",
              value: [
                {
                  mapVal: [],
                  intVal: 193,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582827314078981",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582886313346559",
              value: [
                {
                  mapVal: [],
                  intVal: 93,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582886313346559",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655582949024650270",
              value: [
                {
                  mapVal: [],
                  intVal: 107,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655582949024650270",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655583069918540651",
              value: [
                {
                  mapVal: [],
                  intVal: 190,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655583069918540651",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655583129083663822",
              value: [
                {
                  mapVal: [],
                  intVal: 102,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655583129083663822",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655583250563003422",
              value: [
                {
                  mapVal: [],
                  intVal: 204,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655583250563003422",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655583311709701420",
              value: [
                {
                  mapVal: [],
                  intVal: 94,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655583628582782863",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655583688582782863",
              value: [
                {
                  mapVal: [],
                  intVal: 12,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655583688582782863",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655583798667539841",
              value: [
                {
                  mapVal: [],
                  intVal: 57,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655583852946012742",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655583912946012742",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655583912946012742",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655583991082823045",
              value: [
                {
                  mapVal: [],
                  intVal: 73,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655583991082823045",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584040673008931",
              value: [
                {
                  mapVal: [],
                  intVal: 53,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584040760000000",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584100261815083",
              value: [
                {
                  mapVal: [],
                  intVal: 54,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584100261815083",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584221587548068",
              value: [
                {
                  mapVal: [],
                  intVal: 206,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584221587548068",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584283983971407",
              value: [
                {
                  mapVal: [],
                  intVal: 94,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584283983971407",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584354399911568",
              value: [
                {
                  mapVal: [],
                  intVal: 105,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584354399911568",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584464609170602",
              value: [
                {
                  mapVal: [],
                  intVal: 202,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584464609170602",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584586311441109",
              value: [
                {
                  mapVal: [],
                  intVal: 220,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584586311441109",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584644616133859",
              value: [
                {
                  mapVal: [],
                  intVal: 95,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584644616133859",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584707759230783",
              value: [
                {
                  mapVal: [],
                  intVal: 77,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584707759230783",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584829018962727",
              value: [
                {
                  mapVal: [],
                  intVal: 177,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584829018962727",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584891635173664",
              value: [
                {
                  mapVal: [],
                  intVal: 102,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584891635173664",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655584962660555454",
              value: [
                {
                  mapVal: [],
                  intVal: 120,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655584962660555454",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655585013970943133",
              value: [
                {
                  mapVal: [],
                  intVal: 87,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655585013970943133",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655585134377612723",
              value: [
                {
                  mapVal: [],
                  intVal: 200,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655585134377612723",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655585179418719900",
              value: [
                {
                  mapVal: [],
                  intVal: 67,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655585363358897165",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655585443358905357",
              value: [
                {
                  mapVal: [],
                  intVal: 40,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655585443358905357",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655585565363269371",
              value: [
                {
                  mapVal: [],
                  intVal: 188,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655585565363269371",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655585627698260826",
              value: [
                {
                  mapVal: [],
                  intVal: 108,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655585627698260826",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655585750196152857",
              value: [
                {
                  mapVal: [],
                  intVal: 207,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655585750196152857",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655585870618066159",
              value: [
                {
                  mapVal: [],
                  intVal: 203,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655585870618066159",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655585930067712155",
              value: [
                {
                  mapVal: [],
                  intVal: 107,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655585930067712155",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586002561547604",
              value: [
                {
                  mapVal: [],
                  intVal: 123,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655586002561547604",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586050843163815",
              value: [
                {
                  mapVal: [],
                  intVal: 79,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655586050843163815",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586103966485348",
              value: [
                {
                  mapVal: [],
                  intVal: 82,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655586103966485348",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586156039721884",
              value: [
                {
                  mapVal: [],
                  intVal: 36,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655586192283308055",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586306283311127",
              value: [
                {
                  mapVal: [],
                  intVal: 57,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655586306283311127",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586355532029389",
              value: [
                {
                  mapVal: [],
                  intVal: 71,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655586355532029389",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586429514036874",
              value: [
                {
                  mapVal: [],
                  intVal: 95,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655586429514036874",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586535948408834",
              value: [
                {
                  mapVal: [],
                  intVal: 177,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655586535948408834",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586599487837545",
              value: [
                {
                  mapVal: [],
                  intVal: 89,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655586599487837545",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586719128920309",
              value: [
                {
                  mapVal: [],
                  intVal: 168,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655586719128920309",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655586728160044858",
              value: [
                {
                  mapVal: [],
                  intVal: 9,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655588644851072204",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655589052851109068",
              value: [
                {
                  mapVal: [],
                  intVal: 204,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655589052851109068",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655589090245073629",
              value: [
                {
                  mapVal: [],
                  intVal: 19,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655589090245073629",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655589154624476420",
              value: [
                {
                  mapVal: [],
                  intVal: 33,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655595884241503747",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655595944241503747",
              value: [
                {
                  mapVal: [],
                  intVal: 27,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655595944241503747",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655595952398180993",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655632424482461014",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655632484482461014",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655635349991438997",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655635409991438997",
              value: [
                {
                  mapVal: [],
                  intVal: 18,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655640945979557343",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655641005979557343",
              value: [
                {
                  mapVal: [],
                  intVal: 20,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655641005979557343",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655641052279881670",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655641200858144979",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655641260858144979",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655641260858144979",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655641295044435640",
              value: [
                {
                  mapVal: [],
                  intVal: 30,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655650023388135855",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655650083388135855",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655650083388135855",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655650140198691999",
              value: [
                {
                  mapVal: [],
                  intVal: 54,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655650208141173203",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655650268141173203",
              value: [
                {
                  mapVal: [],
                  intVal: 28,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655651426955719952",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655651488955720976",
              value: [
                {
                  mapVal: [],
                  intVal: 31,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655666221368145988",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655666281368145988",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655670401677100862",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655670461677100862",
              value: [
                {
                  mapVal: [],
                  intVal: 24,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655686800000000000",
              originDataSourceId:
                "raw:com.google.step_count.delta:com.google.android.apps.fitness:user_input",
              endTimeNanos: "1655687700000000000",
              value: [
                {
                  mapVal: [],
                  intVal: 2000,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655690400000000000",
              originDataSourceId:
                "raw:com.google.activity.segment:com.google.android.apps.fitness:user_input",
              endTimeNanos: "1655691300000000000",
              value: [
                {
                  mapVal: [],
                  intVal: 1500,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655697600000000000",
              originDataSourceId:
                "raw:com.google.activity.segment:com.google.android.apps.fitness:user_input",
              endTimeNanos: "1655698500000000000",
              value: [
                {
                  mapVal: [],
                  intVal: 2550,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655712919548727574",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655712979548727574",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655730240775192619",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655730300775192619",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655730300775192619",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655730381975842679",
              value: [
                {
                  mapVal: [],
                  intVal: 62,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655730543984238087",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655730603984238087",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655731801891766708",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655731861891766708",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655732297456012690",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655732369456016786",
              value: [
                {
                  mapVal: [],
                  intVal: 36,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655732369456016786",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655732408037618176",
              value: [
                {
                  mapVal: [],
                  intVal: 43,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655733345823202087",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655733405823202087",
              value: [
                {
                  mapVal: [],
                  intVal: 16,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655733830158121567",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655733902158125663",
              value: [
                {
                  mapVal: [],
                  intVal: 36,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655733902158125663",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655733916654164599",
              value: [
                {
                  mapVal: [],
                  intVal: 17,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655744052558130017",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655744112558130017",
              value: [
                {
                  mapVal: [],
                  intVal: 22,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655748214641091351",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655748274641091351",
              value: [
                {
                  mapVal: [],
                  intVal: 16,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655748274641091351",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655748276618987473",
              value: [
                {
                  mapVal: [],
                  intVal: 2,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655753977081477882",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655754037081477882",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655754537484076907",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655754615484073835",
              value: [
                {
                  mapVal: [],
                  intVal: 39,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655754615484073835",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655754638553044287",
              value: [
                {
                  mapVal: [],
                  intVal: 10,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655795407512142015",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655795467512142015",
              value: [
                {
                  mapVal: [],
                  intVal: 17,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655839316569201256",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655839376569201256",
              value: [
                {
                  mapVal: [],
                  intVal: 19,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655906534933685459",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655906594933685459",
              value: [
                {
                  mapVal: [],
                  intVal: 23,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655921506901565032",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655921568901566056",
              value: [
                {
                  mapVal: [],
                  intVal: 31,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655926128316692026",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655926200316696122",
              value: [
                {
                  mapVal: [],
                  intVal: 36,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655929862615082651",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655929926615086747",
              value: [
                {
                  mapVal: [],
                  intVal: 32,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655929926615086747",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655929932078075993",
              value: [
                {
                  mapVal: [],
                  intVal: 7,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1655932471347042338",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1655932597347039266",
              value: [
                {
                  mapVal: [],
                  intVal: 63,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656009237210476229",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656009297210476229",
              value: [
                {
                  mapVal: [],
                  intVal: 18,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656011417087192207",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656011477087192207",
              value: [
                {
                  mapVal: [],
                  intVal: 16,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656011477087192207",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656011528493230892",
              value: [
                {
                  mapVal: [],
                  intVal: 45,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656011528493230892",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656011549506410284",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656012096337899094",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656012156337899094",
              value: [
                {
                  mapVal: [],
                  intVal: 16,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656012581807298090",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656012641807298090",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656012641807298090",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656012660120264288",
              value: [
                {
                  mapVal: [],
                  intVal: 27,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656013656510785461",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656013716510785461",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656015534968109703",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656015602968111751",
              value: [
                {
                  mapVal: [],
                  intVal: 34,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656059393567924167",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656059467567931335",
              value: [
                {
                  mapVal: [],
                  intVal: 37,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656066897179668475",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656067019179667451",
              value: [
                {
                  mapVal: [],
                  intVal: 61,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656067019179667451",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656067076965504393",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656067076965504393",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656067079262663117",
              value: [
                {
                  mapVal: [],
                  intVal: 4,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656072644773645107",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656072704773645107",
              value: [
                {
                  mapVal: [],
                  intVal: 19,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656072704773645107",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656072708706462825",
              value: [
                {
                  mapVal: [],
                  intVal: 5,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656076500030976382",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656076560030976382",
              value: [
                {
                  mapVal: [],
                  intVal: 12,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656077940453760051",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656078000453760051",
              value: [
                {
                  mapVal: [],
                  intVal: 21,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656078000453760051",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656078012315668010",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656084034947642077",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656084094947642077",
              value: [
                {
                  mapVal: [],
                  intVal: 10,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656090029238360813",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656090089238360813",
              value: [
                {
                  mapVal: [],
                  intVal: 10,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656090089238360813",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656090148880718126",
              value: [
                {
                  mapVal: [],
                  intVal: 33,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656090148880718126",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656090180506966577",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656090452511787484",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656090512511787484",
              value: [
                {
                  mapVal: [],
                  intVal: 12,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656090512511787484",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656090542668972490",
              value: [
                {
                  mapVal: [],
                  intVal: 20,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656093445899398866",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656093505899398866",
              value: [
                {
                  mapVal: [],
                  intVal: 29,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656093505899398866",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656093525528892398",
              value: [
                {
                  mapVal: [],
                  intVal: 28,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656104867020616990",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656104927020616990",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656120290178816883",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656120350178816883",
              value: [
                {
                  mapVal: [],
                  intVal: 16,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656147510135442276",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656147570135442276",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656147570135442276",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656147623833915904",
              value: [
                {
                  mapVal: [],
                  intVal: 37,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656147628220621146",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656147698220622170",
              value: [
                {
                  mapVal: [],
                  intVal: 35,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656147698220622170",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656147727636944052",
              value: [
                {
                  mapVal: [],
                  intVal: 51,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656148973188000000",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656148996803623454",
              value: [
                {
                  mapVal: [],
                  intVal: 36,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656149012404579793",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656149192404577745",
              value: [
                {
                  mapVal: [],
                  intVal: 90,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656149192404577745",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656149328107136831",
              value: [
                {
                  mapVal: [],
                  intVal: 198,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656149328107136831",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656149391008477541",
              value: [
                {
                  mapVal: [],
                  intVal: 40,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656149404030530395",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656149518030533467",
              value: [
                {
                  mapVal: [],
                  intVal: 57,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656149518030533467",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656149577562149678",
              value: [
                {
                  mapVal: [],
                  intVal: 58,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656149624428732631",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656149694428733655",
              value: [
                {
                  mapVal: [],
                  intVal: 35,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656149694428733655",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656149820418771514",
              value: [
                {
                  mapVal: [],
                  intVal: 141,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656149820418771514",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656149873653543242",
              value: [
                {
                  mapVal: [],
                  intVal: 78,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656150014035236295",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656150074035236295",
              value: [
                {
                  mapVal: [],
                  intVal: 23,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656150074035236295",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656150093203402167",
              value: [
                {
                  mapVal: [],
                  intVal: 30,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656151634025000000",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656151664755961735",
              value: [
                {
                  mapVal: [],
                  intVal: 9,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656151664755961735",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656151674363397399",
              value: [
                {
                  mapVal: [],
                  intVal: 17,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656151868409588329",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656151928409588329",
              value: [
                {
                  mapVal: [],
                  intVal: 19,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656152017790319345",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656152077790319345",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656152077790319345",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656152150381315262",
              value: [
                {
                  mapVal: [],
                  intVal: 74,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656152150381315262",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656152187636889197",
              value: [
                {
                  mapVal: [],
                  intVal: 25,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656152187636889197",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656152273348290245",
              value: [
                {
                  mapVal: [],
                  intVal: 75,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656152273348290245",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656152323055414357",
              value: [
                {
                  mapVal: [],
                  intVal: 45,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656152323055414357",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656152373711010782",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656152875382260506",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656152935382260506",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656152935382260506",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656152942221432869",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656153986217408520",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154152217409544",
              value: [
                {
                  mapVal: [],
                  intVal: 83,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154152217409544",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154194982998005",
              value: [
                {
                  mapVal: [],
                  intVal: 63,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154222533749453",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154282533749453",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154282533749453",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154345039382991",
              value: [
                {
                  mapVal: [],
                  intVal: 58,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154345039382991",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154373251865496",
              value: [
                {
                  mapVal: [],
                  intVal: 28,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154373251865496",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154459209887584",
              value: [
                {
                  mapVal: [],
                  intVal: 64,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154459209887584",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154476629260143",
              value: [
                {
                  mapVal: [],
                  intVal: 23,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154610253195680",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154670253195680",
              value: [
                {
                  mapVal: [],
                  intVal: 19,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154670253195680",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154701108969606",
              value: [
                {
                  mapVal: [],
                  intVal: 16,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154747497397340",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154807497397340",
              value: [
                {
                  mapVal: [],
                  intVal: 24,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154819208490504",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154889208491528",
              value: [
                {
                  mapVal: [],
                  intVal: 35,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154929360953253",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656154993360957349",
              value: [
                {
                  mapVal: [],
                  intVal: 32,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656154993360957349",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656155036572718823",
              value: [
                {
                  mapVal: [],
                  intVal: 39,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656155036572718823",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656155072236050642",
              value: [
                {
                  mapVal: [],
                  intVal: 17,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656155217443053423",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656155301443051375",
              value: [
                {
                  mapVal: [],
                  intVal: 42,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656155330067685888",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656155422067687936",
              value: [
                {
                  mapVal: [],
                  intVal: 46,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656155422067687936",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656155482193450875",
              value: [
                {
                  mapVal: [],
                  intVal: 68,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656155482193450875",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656155490747619577",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656155490747619577",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656155550071441598",
              value: [
                {
                  mapVal: [],
                  intVal: 16,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656155606570299314",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656155736570310578",
              value: [
                {
                  mapVal: [],
                  intVal: 65,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656155775857091515",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656155851857093563",
              value: [
                {
                  mapVal: [],
                  intVal: 38,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656155851857093563",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656155898176795712",
              value: [
                {
                  mapVal: [],
                  intVal: 52,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656156041297704992",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656156191297714208",
              value: [
                {
                  mapVal: [],
                  intVal: 75,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656156191297714208",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656156332687545751",
              value: [
                {
                  mapVal: [],
                  intVal: 104,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656156332687545751",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656156396299011218",
              value: [
                {
                  mapVal: [],
                  intVal: 74,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656156413666261436",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656156529666259388",
              value: [
                {
                  mapVal: [],
                  intVal: 58,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656156529666259388",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656156596428039173",
              value: [
                {
                  mapVal: [],
                  intVal: 131,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656157124740000000",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656157139629885254",
              value: [
                {
                  mapVal: [],
                  intVal: 3,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656157139629885254",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656157195821067065",
              value: [
                {
                  mapVal: [],
                  intVal: 34,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656157195821067065",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656157202543723315",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656159012869000000",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656159025335821419",
              value: [
                {
                  mapVal: [],
                  intVal: 4,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656159025335821419",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656159068915182015",
              value: [
                {
                  mapVal: [],
                  intVal: 82,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656159166357449338",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656159282357447290",
              value: [
                {
                  mapVal: [],
                  intVal: 58,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656159282357447290",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656159315312310165",
              value: [
                {
                  mapVal: [],
                  intVal: 47,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656159315312310165",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656159372451470321",
              value: [
                {
                  mapVal: [],
                  intVal: 44,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656159436925670056",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656159500925674152",
              value: [
                {
                  mapVal: [],
                  intVal: 32,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656159534791107634",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656159636791116850",
              value: [
                {
                  mapVal: [],
                  intVal: 51,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656159636791116850",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656159641079586628",
              value: [
                {
                  mapVal: [],
                  intVal: 6,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656162659591096555",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656162719591096555",
              value: [
                {
                  mapVal: [],
                  intVal: 16,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656164664608506743",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656164724608506743",
              value: [
                {
                  mapVal: [],
                  intVal: 11,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656164910336965954",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656164970336965954",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656164970629897993",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656165030629897993",
              value: [
                {
                  mapVal: [],
                  intVal: 19,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656165358000661831",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656165418000661831",
              value: [
                {
                  mapVal: [],
                  intVal: 25,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656181544143949730",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656181604143949730",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656182035269790805",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656182095269790805",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656186737246755711",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656186797246755711",
              value: [
                {
                  mapVal: [],
                  intVal: 24,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656191757819829782",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656191817819829782",
              value: [
                {
                  mapVal: [],
                  intVal: 18,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656197797581945214",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656197857581945214",
              value: [
                {
                  mapVal: [],
                  intVal: 20,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656239314152098858",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656239382152100906",
              value: [
                {
                  mapVal: [],
                  intVal: 34,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656239953354428084",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656240013354428084",
              value: [
                {
                  mapVal: [],
                  intVal: 24,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656244917803911791",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656244993803913839",
              value: [
                {
                  mapVal: [],
                  intVal: 38,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656244993803913839",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656245000874678290",
              value: [
                {
                  mapVal: [],
                  intVal: 7,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656252774814377195",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656252834814377195",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656268141185845506",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656268201185845506",
              value: [
                {
                  mapVal: [],
                  intVal: 24,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656269917804013641",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656269977804013641",
              value: [
                {
                  mapVal: [],
                  intVal: 18,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656325713727396098",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656325773727396098",
              value: [
                {
                  mapVal: [],
                  intVal: 16,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656341524088065409",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656341584088065409",
              value: [
                {
                  mapVal: [],
                  intVal: 10,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656413809186107348",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656413869186107348",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656435993764548175",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656436053764548175",
              value: [
                {
                  mapVal: [],
                  intVal: 26,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656453104697060318",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656453164697060318",
              value: [
                {
                  mapVal: [],
                  intVal: 14,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656492746757830068",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656492806757830068",
              value: [
                {
                  mapVal: [],
                  intVal: 20,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656505329430304778",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656505389430304778",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656517001564150794",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656517061564150794",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656517178848074381",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656517238848074381",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656517238848074381",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656517260403575109",
              value: [
                {
                  mapVal: [],
                  intVal: 21,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656517543309686530",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656517603309686530",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656517631193534795",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656517691193534795",
              value: [
                {
                  mapVal: [],
                  intVal: 13,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656528837670115622",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656528897670115622",
              value: [
                {
                  mapVal: [],
                  intVal: 12,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656534407689120352",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656534467689120352",
              value: [
                {
                  mapVal: [],
                  intVal: 10,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656539182628523747",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656539242628523747",
              value: [
                {
                  mapVal: [],
                  intVal: 12,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656600063953197382",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656600123953197382",
              value: [
                {
                  mapVal: [],
                  intVal: 24,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656608422526318508",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656608482526318508",
              value: [
                {
                  mapVal: [],
                  intVal: 15,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656612698727038419",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656612764727041491",
              value: [
                {
                  mapVal: [],
                  intVal: 33,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656615058688038897",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656615118688038897",
              value: [
                {
                  mapVal: [],
                  intVal: 12,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
            {
              startTimeNanos: "1656622853146009952",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:49c04e89:Step Counter",
              endTimeNanos: "1656622947146015072",
              value: [
                {
                  mapVal: [],
                  intVal: 47,
                },
              ],
              dataTypeName: "com.google.step_count.delta",
            },
          ],
        },
      ],
    },
  ],
};

// // on 14 jully => steps from tracker counter are 3102 steps and distance is 1874.3676035404205 meter

/* http://localhost:3000/distance/walking?start=1657756800000&end=1657843199000 */
const res01 = {
  bucket: [
    {
      startTimeMillis: "1657756800000",
      endTimeMillis: "1657843199000",
      dataset: [
        {
          dataSourceId:
            "derived:com.google.distance.delta:com.google.android.gms:aggregated",
          point: [
            {
              startTimeNanos: "1657758431202670641",
              endTimeNanos: "1657834944042744697",
              dataTypeName: "com.google.distance.delta",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:d20be412:Step Counter",
              value: [{ fpVal: 1874.3676035404205, mapVal: [] }],
            },
          ],
        },
      ],
    },
  ],
};

// http://localhost:3000/steps/daily?start=1657756800000&end=1657843199000
const res02 = {
  bucket: [
    {
      startTimeMillis: "1657756800000",
      endTimeMillis: "1657843199000",
      dataset: [
        {
          dataSourceId:
            "derived:com.google.step_count.delta:com.google.android.gms:aggregated",
          point: [
            {
              startTimeNanos: "1657758431202670641",
              endTimeNanos: "1657834944042744697",
              dataTypeName: "com.google.step_count.delta",
              originDataSourceId:
                "raw:com.google.step_count.cumulative:Xiaomi:Redmi Note 7:d20be412:Step Counter",
              value: [
                {
                  intVal: 3102,
                  mapVal: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// // after adding manually 4000 steps (walking activity) on 14 july 2022
// http://localhost:3000/steps/daily?start=1657756800000&end=1657843199000
const res03 = {
  bucket: [
    {
      startTimeMillis: "1657756800000",
      endTimeMillis: "1657843199000",
      dataset: [
        {
          dataSourceId:
            "derived:com.google.step_count.delta:com.google.android.gms:aggregated",
          point: [
            {
              startTimeNanos: "1657758431202670641",
              endTimeNanos: "1657834944042744697",
              dataTypeName: "com.google.step_count.delta",
              originDataSourceId:
                "raw:com.google.step_count.delta:com.google.android.apps.fitness:user_input",
              value: [
                {
                  intVal: 7102,
                  mapVal: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// http://localhost:3000/distance/walking?start=1657756800000&end=1657843199000
const res04 = {
  bucket: [
    {
      startTimeMillis: "1657756800000",
      endTimeMillis: "1657843199000",
      dataset: [
        {
          dataSourceId:
            "derived:com.google.distance.delta:com.google.android.gms:aggregated",
          point: [
            {
              startTimeNanos: "1657758431202670641",
              endTimeNanos: "1657834944042744697",
              dataTypeName: "com.google.distance.delta",
              originDataSourceId:
                "raw:com.google.step_count.delta:com.google.android.apps.fitness:user_input",
              value: [
                {
                  fpVal: 5442.7645761966705,
                  mapVal: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
