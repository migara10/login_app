import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import config from './../config.js'


async function connect() {
    try {
      const db = await mongoose.connect(config.DB_URI, {
        // Remove useNewUrlParser and useUnifiedTopology
        // They are no longer needed in the newer versions
      });
      console.log("Connected to MongoDB");
      return db;
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
  
  export default connect;
/* async function connect(){
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    mongoose.set('strictQuery', true);

    const db = await mongoose.connect(getUri);
    console.log("Database connected");

    return db;
}
 */

