module.exports = {
  apps: [
    {
      name: "AdsMonitorService",
      namespace: "ads-monitor-server",
      script: "./src/index.js",
      watch: ["./src", "./src/*.js"],
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
