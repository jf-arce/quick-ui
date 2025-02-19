"use strict";
const fs = require("fs");
const path = require("path");
if (process.argv.length !== 3) {
    console.error("Uso: ts-node scripts/create-component.ts <NombreDelComponente>");
    process.exit(1);
}
const componentName = process.argv[2];
const componentDir = path.join(__dirname, "..", "packages/components/src", componentName);
// Crea la carpeta del componente si no existe
if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
}
const tsxContent = `

const ${componentName}: React.FC = () => {
  return (
    <div>
      ${componentName} component
    </div>
  );
};

export default ${componentName};
`;
const indexTsContent = `export { default } from './${componentName}';
`;
const typesTsContent = `export interface ${componentName}Props {
  // Define your props here
}`;
// Escribe los archivos
fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), tsxContent);
fs.writeFileSync(path.join(componentDir, "index.ts"), indexTsContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.stories.tsx`), "");
fs.writeFileSync(path.join(componentDir, `${componentName}.types.ts`), typesTsContent);
console.log(`${componentName} component created successfully!`);
//# sourceMappingURL=create-component.js.map