/** @type {import('tailwindcss').Config} */

import componentsConfig from "@quick-ui/components/tailwind.config";

export default {
  content: ["../../packages/components/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [componentsConfig],
};
