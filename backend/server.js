import express from "express";
import cors from "cors"
import jokesRouter from "./routes/jokes.routes.js";

 const app = express()
 app.use(cors())

 app.use(express.json())

 app.use("/api/jokes", jokesRouter)

const PORT = 5000;

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
})