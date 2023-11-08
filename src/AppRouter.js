import { app } from "./Server.js";
import AdController from "./controllers/AdController.js";

import Logger from "./util/Logger.js";

app.get("/", (req, res) => {
  res.json({ service: process.env.APP_NAME });
});

app.get("/ads", AdController.list);
