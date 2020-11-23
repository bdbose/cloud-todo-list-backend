const mongoose = require('mongoose');
let db = mongoose.createConnection(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
db.then((data) => {
  console.log('DB IS CONNECTED');
}).catch((err) => {
  console.log(err);
});
module.exports = db;
