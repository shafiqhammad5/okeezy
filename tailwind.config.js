module.exports = {
  content: ["./*.html", "./assets/js/*.js"],

  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "540px",
      // => @media (min-width: 540px) { ... }

      md: "720px",
      // => @media (min-width: 720px) { ... }

      lg: "960px",
      // => @media (min-width: 960px) { ... }

      xl: "1140px",
      // => @media (min-width: 1240px) { ... }

      // "2xl": "1320px",
      // => @media (min-width: 1320px) { ... }
    },
    extend: {
      colors: {
        black: "#060d22",
        light: "#3d4c79",
        gradient1: "#deff03",
        gradient2: "#aeff08",
      },

      boxShadow: {
        one: "0px 20px 15px rgba(0, 0, 0, .1), 2px 0px 15px rgba(0, 0, 0, .1)",
        team: "0px 0px 5px rgba(0, 0, 0, .05)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
