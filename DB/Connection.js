const mongoose = require("mongoose");

const URI =
  "mongodb://shery:shery123@cluster0-shard-00-00.ryder.mongodb.net:27017,cluster0-shard-00-01.ryder.mongodb.net:27017,cluster0-shard-00-02.ryder.mongodb.net:27017/crudapp?ssl=true&replicaSet=atlas-6szcyn-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected");
};

module.exports = connectDB;
