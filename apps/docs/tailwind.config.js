/** @type {import('tailwindcss').Config} */

import componentsConfig from "@quick-ui/components/tailwind.config";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../../packages/components/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  presets: [componentsConfig],
};
