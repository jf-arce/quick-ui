import { Code } from "@/components/Code";
import '../effects.css';

export default function page() {

  const cssCode =`
\`\`\`css
.sibling{
  transition: transform 200ms, filter 200ms;
}
.sibling:hover{
  transform: scale(1.1);
}
.container-siblings:has(.sibling:hover) > .sibling:not(:hover){
  filter: brightness(0.5) saturate(0.5) contrast(0.5) blur(1px);
  transform: scale(0.9);
} 
\`\`\`
`
  const htmlCode = `
\`\`\`html
<div class="container-siblings">
  <div class="sibling"></div>
  <div class="sibling"></div>
  <div class="sibling"></div>
</div>
\`\`\`
`
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-4xl font-bold">Fading Siblings</h1>
      <p>
        Permite que al pasar el mouse por encima de un elemento, los demás elementos hermanos se desenfoquen y se reduzcan de tamaño.
      </p>
      <section className="flex flex-col gap-5">
        <h3 className="font-bold text-xl">Preview</h3>
        <div>
          <div className="container-siblings flex gap-4">
            <div className="sibling cursor-pointer bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 w-32 h-32 rounded-lg rotate-effect hover:scale-125 transition-transform"></div>
            <div className="sibling cursor-pointer bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 w-32 h-32 rounded-lg rotate-effect hover:scale-125 transition-transform"></div>
            <div className="sibling cursor-pointer bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 w-32 h-32 rounded-lg rotate-effect hover:scale-125 transition-transform"></div>
          </div>  
        </div>
        <p>
          Se debe colocar la clase 'container-siblings' al contenedor padre y la clase'sibling' a cada div hijo
        </p>
        <h3 className="font-bold text-xl">HTML</h3>
        <div>
          <Code
            code={htmlCode}
          />
        </div>
        <h3 className="font-bold text-xl">CSS</h3>
        <div>
          <Code
            code={cssCode}
          />
        </div>
      </section>
    </div>
  );
}
