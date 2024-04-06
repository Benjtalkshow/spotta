export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#FAFCFD",
        customBlue: "#5378F6",
        customBg2: "#F5F5F5",
        customGray: "#F3F7FE",
        customGreen: "#00A96E",
      },
      screens: {
        'miniDesktop': '1300px', 
        'superMedium': '975px', 
        // 'Desktop': '1300px', 
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "white",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
