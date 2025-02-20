/** @type {import('tailwindcss').Config} */

import componentsConfig from "../../packages/components/tailwind.config";

export default {
  content: [
    "../../packages/components/src/**/*.{js,ts,jsx,tsx}",
    "../../packages/components/templates/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  presets: [componentsConfig],
};
