/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background': "url('assets/background.png')",
      }),
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
        bounce: 'bounce 2s ease-in-out infinite',
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      }
    },
  },
  plugins: [],
};
