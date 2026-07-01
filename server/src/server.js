import app from "./app.js"
import dotenv from "dotenv/config"
import connectDB from "./config/db.js"
const PORT = process.env.PORT
connectDB()
app.listen(PORT, () => {
  console.log(`🚀 Sentinel Server is running on port: ${PORT}`)
})