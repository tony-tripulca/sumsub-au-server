module.exports = {
  apps: [
    {
      name: "SumsubAuServiceAPI",
      namespace: "sumsub-au-server",
      script: "./src/index.js",
      watch: ["./src", "./src/*.js"],
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
