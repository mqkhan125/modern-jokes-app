import express from "express"
import cors from "cors"
import jokeRoutes from "./routes/jokes.routes"

 const app = express()
 app.use(cors())

 app.use(express.json())

 app.use("/api/jokes", jokeRoutes)

const PORT = 5000;

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
})