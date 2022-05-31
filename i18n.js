module.exports = {
  locales: ["en", "tr"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
  },
  loadLocaleFrom: (locale, ns) => {
    let messages;
    try {
      messages = require(`./public/locales/${locale}/${ns}.json`);
    } catch (error) {
      console.error(`Fail to load locale file: ${locale}/${ns}.json`);
    }
    return messages || {};
  },
};
