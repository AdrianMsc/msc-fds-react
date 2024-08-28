/** @type {import('tailwindcss').Config} */
const colors = require("./src/utilities/tailwind/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      keyframes: {
        dotFlashing1: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        dotFlashing2: {
          "0%": { opacity: "0.6" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dotFlashing3: {
          "0%": { opacity: "0.3" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        dotFlashing1: "dotFlashing1 2s infinite linear alternate",
        dotFlashing2: "dotFlashing2 2s infinite linear alternate 0.4s",
        dotFlashing3: "dotFlashing3 2s infinite linear alternate 0.6s",
      },
    },
  },
  plugins: [
    require("./src/utilities/tailwind/components/msc-buttons"),
    // require("src/utilities/tailwind/components/msc-checkbox"),
    // require("src/utilities/tailwind/components/msc-dropdown"),
    // require("src/utilities/tailwind/components/msc-inputs"),
    // require("src/utilities/tailwind/components/msc-modals"),
    // require("src/utilities/tailwind/components/msc-radio"),
    // require("src/utilities/tailwind/components/msc-toggle"),
    // require("src/utilities/tailwind/components/msc-icons"),
    // require("src/utilities/tailwind/components/msc-dividers"),
    // require("src/utilities/tailwind/components/msc-spinner"),
    // require("src/utilities/tailwind/components/msc-link"),
    // require("src/utilities/tailwind/components/msc-typography"),
    // require("src/utilities/tailwind/components/msc-pager"),
    // require("src/utilities/tailwind/components/msc-filter"),
    // require("src/utilities/tailwind/components/msc-dialog"),
    // require("src/utilities/tailwind/components/msc-grey-button"),
    // require("src/utilities/tailwind/components/msc-tabs"),
    // require("src/utilities/tailwind/components/msc-cart-action-bar"),
    // require("src/utilities/tailwind/components/msc-index"),
    // require("src/utilities/tailwind/components/msc-breadcrumb"),
    // require("src/utilities/tailwind/components/msc-alert"),
    // require("src/utilities/tailwind/components/msc-pagination"),
  ],
};
