const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    // Agrega aquí las rutas adicionales si tienes archivos de estilos propios
  ],
  theme: {
    extend: {
      // Aquí puedes extender o personalizar el tema de Tailwind CSS si es necesario
    },
  },
  darkMode: "class", // Habilita el modo oscuro
  plugins: [
    nextui(), // Agrega el plugin de Next UI
  ],
};
