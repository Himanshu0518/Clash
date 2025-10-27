import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 5000;
app.get("/", (_, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
