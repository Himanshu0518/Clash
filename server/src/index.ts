import express, { Response,Application } from "express";

import "dotenv/config";

const app: Application = express();

const port = process.env.PORT || 5000;

app.get("/", (_, res: Response) => {
    res.send("Hello World!");
});


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});