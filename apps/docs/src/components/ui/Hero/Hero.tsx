import { Button } from "quick-ui-components";
import styles from "./Hero.module.css";
import Link from "@docusaurus/Link";

export const Hero = (): JSX.Element => {
  return (
    <section className={`bg-neutral-950 py-24 md:py-32 lg:py-40 relative`}>
      <div className="container px-4 md:px-6 m-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-pink-500 mb-4">
          Q<span className="text-purple-500">ui</span>ck <span className="text-purple-500">UI</span>
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl lg:text-3xl">
          A modern and minimalist UI library for React made with Tailwind CSS
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link className={styles.buttonHero} href="/docs/getting-started">
            Get Started
          </Link>
        </div>
      </div>
      <div className={styles.lines}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </section>
  );
};
