/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      roboto: ["Roboto"],
      josefin: ["Josefin Sans"],
      Montserrat: ["Montserrat"],
      Tenali: ["Tenali Ramakrishna"],
      Raleway: ["Raleway"],
    },
    extend: {
      colors: {
        border: "#0b383782",
        intro: "#c4ffb2",
        light: "#deefb7",
        main: "#092327",
        compliment: "#0b5351",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
    },
  },
  plugins: [],
};
