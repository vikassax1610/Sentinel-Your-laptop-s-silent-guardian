import express from "express";
import { successResponse } from "./utils/response.js"
const app = express()

app.use(express.json())
app.get("/", (req, res) => {
  successResponse(
    res,
    200,
    "sentinel is running",
  )
})

export default app;