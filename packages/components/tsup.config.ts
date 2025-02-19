import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  name: "quick-ui-components",
  dts: true, // Para que se genere el archivo de definición de tipos
  clean: true,
  sourcemap: true,
  target: "esnext",
  shims: true, // Para mejor compatibilidad entre los archivos js y cjs
  splitting: true, // Para que se genere un archivo por cada componente
  minify: true, // Reduce el tamaño del código
});
