/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "45%": { transform: "rotate(14deg)" },
          "60%": { transform: "rotate(-4deg)" },
          "75%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        wave: "wave 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};
