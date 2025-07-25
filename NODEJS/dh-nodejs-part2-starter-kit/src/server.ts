import express from "express";
import morgan from "morgan";
import "express-async-errors";
import dotenv from "dotenv";
import { router } from "./routes/routes.js";
import setupDb from "./setupDb.js";
import { router as routerUsers} from "./routes/users.js";

dotenv.config();

setupDb(); //per settare il database
const app = express();

const port = process.env.PORT;
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/planets", router)
app.use("/api/users", routerUsers)

app.listen(port, () => {
    console.log(`App listening on the port ${port}`)
})
