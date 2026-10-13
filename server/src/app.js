import express from "express";
import { successResponse } from "./utils/response.js"
import authRoutes from "./routes/auth.routes.js"
const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  successResponse(
    res,
    200,
    "sentinel is running",
  )
})

export default app;