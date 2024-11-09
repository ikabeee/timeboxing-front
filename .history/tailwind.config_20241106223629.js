/** @type {import('tailwindcss').Config} */
//NextUI
const { nextui } = require("@nextui-org/react");
//Flowbite
const flowbite = require("flowbite-react/tailwind");
//Material tailwind
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(),
    flowbite.plugin(),]
});

