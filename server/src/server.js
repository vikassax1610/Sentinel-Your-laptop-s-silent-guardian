import app from "./app.js"
import dotenv from "dotenv/config"
import connectDB from "./config/db.js"
const PORT = process.env.PORT

async function startServer() {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`🚀 Sentinel Server is running on port: ${PORT}`)
    })
  }
  catch (error) {
    console.log(`there some issue in starting server, please check the error: ${error.message}`)
    process.exit(1)
  }
}
startServer()