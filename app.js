import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: ["*"],
        scriptSrc: ["* data: 'unsafe-eval' 'unsafe-inline' blob:"],
        connectSrc: ["* data: 'unsafe-eval'  blob:"],
      },
    },
  })
);

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

import authenticationRouter from "./routes/authenticationRoutes.js";
import viewRouter from "./routes/viewRoutes.js";
import expenseRouter from "./routes/expenseRoutes.js";
import farmInputRouter from "./routes/farmInputRoutes.js";
import activityRouter from "./routes/activityRoutes.js";
import farmGuideRouter from "./routes/farmGuideRoutes.js";
import farmProduceRouter from "./routes/produceRoutes.js";

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "dist")));
app.set("views", path.join(__dirname, "/views"));

app.use("/", viewRouter);
app.use("/api/v1/authentication", authenticationRouter);
app.use("/api/v1/expenses", expenseRouter);
app.use("/api/v1/farmInputs", farmInputRouter);
app.use("/api/v1/activities", activityRouter);
app.use("/api/v1/farmGuide", farmGuideRouter);
app.use("/api/v1/farmProduce", farmProduceRouter);

export default app;
