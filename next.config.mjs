// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

//Configuracion de next para soportar MDX y rehype-pretty-code

import fs from "node:fs";
import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
 
/** @type {import('rehype-pretty-code').Options} */
const options = {
  keepBackground: true, // Keep the background color of the code block. 
};
 
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
 
/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };
 
export default withMDX(nextConfig);