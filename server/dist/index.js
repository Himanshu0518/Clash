import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import ejs from "ejs";
import { emailQueue } from "./jobs/EmailJob.js";
const app = express();
const port = process.env.PORT || 5000;
// middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.get("/", async (_, res) => {
    const html = await ejs.renderFile(path.resolve(__dirname, "./views/emails/welcome.ejs"), { name: "Rohit" });
    await emailQueue.add("welcome", {
        "to": "23226@iiitu.ac.in",
        "subject": "Welcome to Clash",
        "body": html
    });
    return res.json({ message: "Email sent" });
});
import "./jobs/index.js";
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
