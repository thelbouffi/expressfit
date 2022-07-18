const express = require("express");

const { getAccToken } = require("../controllers/generateAuthUrl");
const { getSteps, formatSteps } = require("../controllers/steps");
const Stream = require("../models/trackers");

var router = express.Router();

router.get("/daily", async function (req, res, next) {
  const { start = 1654038000000, end = 1656630000000 } = req.query;
  try {
    const { token } = await getAccToken();
    const { data } = await getSteps(
      token,
      Number.parseInt(start, 10),
      Number.parseInt(end, 10)
    );

    // return res.status(200).json(formatSteps(data));
    return res.status(200).json(data);
  } catch (error) {
    console.log({ error });
    return res
      .status(400)
      .json({ message: error?.message, body: error?.response?.data });
  }
});

router.get("/streams", async (req, res) => {
  const rsult = await Stream.Stream.find({});

  return res.json(rsult);
});

module.exports = router;
