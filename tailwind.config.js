module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        success: "#00C48C",
        "success-2": "#7FE1C5",
        "success-3": "#BFF0E2",

        error: "#FF617D",
        "error-2": "#FFB0BE",
        "error-3": "#FFD7DE",

        warning: "##FFB76B",
        "warning-2": "#FFDBB4",
        "warning-3": "#FFEDDA",

        primary: "#0084F4",
        "primary-2": "#7FC1F9",
        "primary-3": "#BFE0FC",

        dark: "#000000",
        "dark-2": "#4A4A4A",
        "dark-3": "#626262",

        med: "#666666",

        light: "#EEEEEE",
        light: "#BBBBBB",
        light: "#EEEEEE",
      },
      fontSize: {
        h1: "48px",
        h2: "36px",
        h3: "30px ",
        h4: "24px",
        h5: "20px",
        h6: "18px ",
        "body-1": "16px",
        "body-2 ": "14px",
        "body-3 ": "13px",
      },
      fontFamily: { sans: ["Roboto"] },
      fontWeight: {
        thin: 300,
        regular: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
