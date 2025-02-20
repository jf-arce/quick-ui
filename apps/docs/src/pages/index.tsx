import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/ui/HomepageFeatures";
import Heading from "@theme/Heading";

import "../css/custom.css";
import styles from "./index.module.css";
import { Hero } from "../components/ui/Hero/Hero";
import HomeFeatures from "../components/ui/HomeFeatures/HomeFeatures";
import { SocialNetworks } from "../components/ui/SocialNetworks/SocialNetworks";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Hero />
      <main>
        <HomeFeatures />
      </main>
      <footer>
        <SocialNetworks />
      </footer>
    </Layout>
  );
}
