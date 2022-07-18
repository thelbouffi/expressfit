const homeRouter = require("./home");
const authRouter = require("./auth");
const usersRouter = require("./users");
const stepsRouter = require("./steps");
const distanceRouter = require("./distance");

module.exports = (app) => {
  app.use("/", homeRouter);
  app.use("/auth", authRouter);
  app.use("/users", usersRouter);
  app.use("/steps", stepsRouter);
  app.use("/distance", distanceRouter);
};
