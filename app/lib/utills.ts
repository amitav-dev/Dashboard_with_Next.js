import mongoose from "mongoose";

let connection: any;
export const connectToDB = async () => {
  const connectionUrl = process.env.MONGODB_URL;
  try {
    if (connection?.isConnected) return;
    const db = await mongoose.connect(connectionUrl);
    console.log(db);
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
