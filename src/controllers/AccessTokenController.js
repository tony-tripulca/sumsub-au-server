import SumsubService from "../services/SumsubService.js";
import Logger from "../util/Logger.js";

const AccessToken = {
  generate: (req, res) => {
    SumsubService.getAccessToken({
      userId: `user-${Math.floor(Math.random() * 1001)}`,
      levelName: "KYC-AU",
    })
      .then((response) => {
        console.log(response.data);
        res.send(response.data);
      })
      .catch((error) => {
        console.error(error);
        res.send(error);
      });
  },
};

export default AccessToken;
