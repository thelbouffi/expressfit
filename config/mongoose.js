const mongoose = require("mongoose");

// Initialize Mongoose
exports.connect = async (db) => {
  try {
    await mongoose.connect(db);
  } catch (error) {
    // console.error(red('Could not connect to MongoDB!'));
    console.error('Could not connect to MongoDB!');
    console.log(error);
  }
};

exports.disconnect = (cb) => {
  mongoose.connection.close((err) => {
    // console.info(yellow("Disconnected from MongoDB."));
    console.info("Disconnected from MongoDB.");
    return cb(err);
  });
};
