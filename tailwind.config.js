/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background': "url('assets/background.png')",
      }),
      boxShadow: {
        '2xl': '0px 0px 30px 10px',
        'sm': '3px 0px 30px 5px',
      },
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
        },
        slideLeft: {
          "from": {
            transform: "translateX(-100%)"
          },
          "to": {
            transform: "translateX(0)"
          }
        },
        slideRight: {
          "from": {
            transform: "translateX(100%)"
          },
          "to": {
            transform: "translateX(0)"
          }
        },
      },
      animation: {
        pulse: 'pulse 2s ease-in-out infinite',
        bounce: 'bounce 2s ease-in infinite',
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        slideLeft: "slideLeft 2s ease-out",
        slideRight: "slideRight 2s ease-out",
      }
    },
  },
  plugins: [],
};
