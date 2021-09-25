import express, { json } from "express";
import router from "./routes/router";
const app = express();

app.use(json());
app.use(router);

app.listen(3000);

export default app;
