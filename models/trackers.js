const mongoose = require('mongoose');

const schema = new mongoose.Schema({ userId: 'string', stream: Object });
exports.Stream = mongoose.model('Stream', schema);
