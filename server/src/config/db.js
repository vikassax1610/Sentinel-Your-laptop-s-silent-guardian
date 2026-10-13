import mongoose from "mongoose"


async function connectDB() {
  const DB_URI = process.env.MONGO_URI
  try {
    if (!DB_URI) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }
    await mongoose.connect(DB_URI)
    console.log("✅ MongoDB Connected Successfully",)



  } catch (error) {
    console.error("Database connection failed:", error.message);

  }

}
export default connectDB