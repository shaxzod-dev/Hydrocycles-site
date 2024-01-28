const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "title-color": "#2F3035",
      "title-gray": "#F0F0F4",
      "primary-color": "#1C62CD",
    },
  },
  plugins: [],
});
