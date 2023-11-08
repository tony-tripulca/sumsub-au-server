import SumsubService from "../services/SumsubService.js";
import Logger from "../util/Logger.js";

const WebhookController = {
  receive: (req, res) => {
    console.log(req.body);
    res.json(req.body);
  },
};

export default WebhookController;
