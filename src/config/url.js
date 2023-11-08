class URL {
  static sumsub() {
    let env = process.env.APP_ENV;

    /** Change the links respective to environments */
    if (env === "dev") {
      return "https://api.sumsub.com";
    } else if (env === "uat") {
      return "https://api.sumsub.com";
    } else if (env === "prod") {
      return "https://api.sumsub.com";
    }

    return "https://api.sumsub.com";
  }
}

export default URL;
