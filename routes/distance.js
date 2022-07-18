const express = require("express");

const { getAccToken } = require("../controllers/generateAuthUrl");
const { getStepsDistance } = require("../controllers/distance");

var router = express.Router();

router.get("/walking", async function (req, res, next) {
  const { start = 1655679600000, end = 1655766000000 } = req.query;
  try {
    const { token } = await getAccToken();
    const { data } = await getStepsDistance(
      token,
      Number.parseInt(start, 10),
      Number.parseInt(end, 10)
    );

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(400)
      .json({ message: error?.message, body: error?.response?.data });
  }
});

module.exports = router;
