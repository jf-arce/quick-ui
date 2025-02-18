#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs";
import path from "path";
import inquirer from "inquirer";

const program = new Command();

program.version("1.0.0").description("CLI para copiar componentes de Quick UI");

program
  .command("add <component>")
  .description("Copia el código de un componente a src/components/ui/")
  .action(async (component) => {
    const sourcePath = path.join(__dirname, "templates", component);
    const destPath = path.join(process.cwd(), "src", "components", "ui", component);

    if (!fs.existsSync(sourcePath)) {
      console.error(`❌ El componente "${component}" no existe.`);
      process.exit(1);
    }

    // Si la carpeta ya existe, preguntar antes de sobrescribir
    if (fs.existsSync(destPath)) {
      const { overwrite } = await inquirer.prompt([
        {
          type: "confirm",
          name: "overwrite",
          message: `⚠️ El componente "${component}" ya existe. ¿Quieres sobrescribirlo?`,
          default: false,
        },
      ]);

      if (!overwrite) {
        console.log(`❌ Copia cancelada.`);
        process.exit(0);
      }
    }

    fs.mkdirSync(destPath, { recursive: true });
    fs.cpSync(sourcePath, destPath, { recursive: true });

    console.log(`✅ Componente "${component}" copiado a src/components/ui/${component}`);
  });

program.parse(process.argv);
