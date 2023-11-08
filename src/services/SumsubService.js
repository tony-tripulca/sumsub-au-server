import axios from "axios";
import URL from "../config/url.js";
import { createSignature, toQueryString } from "../util/Hash.js";

const TOKEN = process.env.SUMSUB_TOKEN;
const SECRET_KEY = process.env.SUMSUB_SECRET_KEY;

const SumsubService = {
  getAccessToken: (payload) => {
    let data = {
      endpoint: "/resources/accessTokens",
      method: "POST",
      timestamp: Math.floor(Date.now() / 1000),
    };

    console.log(
      `${data.timestamp}${data.method}${data.endpoint}?${toQueryString(
        payload
      )}`
    );

    let signature = createSignature(
      SECRET_KEY,
      `${data.timestamp}${data.method}${data.endpoint}?${toQueryString(
        payload
      )}`
    );

    console.log(signature);

    return axios({
      method: "POST",
      baseURL: URL.sumsub(),
      url: `${data.endpoint}?${toQueryString(payload)}`,
      headers: {
        "X-App-Token": TOKEN,
        "X-App-Access-Sig": signature,
        "X-App-Access-Ts": data.timestamp,
        "Content-Type": "application/json",
      },
    });
  },
};

export default SumsubService;
