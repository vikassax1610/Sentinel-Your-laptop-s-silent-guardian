import mongoose from "mongoose"


async function connectDB() {
  const DB_URI = process.env.MONGO_URI
  try {
    await mongoose.connect(DB_URI)
    console.log("✅ MongoDB Connected Successfully",)
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);

  }

}
export default connectDB