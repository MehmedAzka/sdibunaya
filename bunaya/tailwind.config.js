/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rowdies: ["Sans", "Rowdies"],
        poppins: ["Sans", "Poppins"],
        montserrat: ["Sans", "Montserrat"],
      },
      backgroundImage: {
        bgAbout: "url('src/assets/bg-about-hero.jpeg')",
        bgProgram: "url(src/assets/bg-program-hero.jpg)",
        aboutImg1: "url('src/assets/about_img/1.jpeg')",
        aboutImg2: "url('src/assets/about_img/2.jpeg')",
        aboutImg3: "url('src/assets/about_img/3.jpeg')",
        aboutImg4: "url('src/assets/about_img/4.jpeg')",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
};
