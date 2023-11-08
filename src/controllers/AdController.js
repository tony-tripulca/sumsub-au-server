import fs from "fs";

import Logger from "../util/Logger.js";

const AdController = {
  list: (req, res) => {
    fs.readFile("../database/ads.json", "utf8", function (error, data) {
      if (error) Logger.error([error]);
      Logger.out([JSON.parse(data)]);
      res.json(JSON.parse(data));
    });
  },
};

export default AdController;
