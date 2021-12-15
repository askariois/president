module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      body: ["Open Sans"],
    },
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1250px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../img/home.jpg')",
        "about-pattern": "url('../img/about.jpg')",
        "visual-pattern": "url('../img/visual.png')",
        "light-pattern": "url('../img/light.png')",
        "video-pattern": "url('../img/video.jpg')",
      },
    },
  },
  plugins: [],
};
