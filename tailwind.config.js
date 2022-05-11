module.exports = {
  content: ["./pages/**/*.{tsx,jsx}", "./components/**/*.{tsx,jsx}"],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
