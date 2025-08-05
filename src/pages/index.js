import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const navButtons = [
    {label: 'Tutorial', to: '/docs/intro'},
    {label: 'Blog',     to: '/blog'},
  ];

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        {/* 左侧内容区 */}
        <div className={styles.heroLeft}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroDescription}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            {navButtons.map(btn => (
              <Link
                key={btn.to}
                className={styles.heroButton}
                to={btn.to}>
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* 右侧图片区 */}
        <div className={styles.heroRight}>
          <img
            className={styles.heroImage}
            src={useBaseUrl('/img/index_logo.svg')}
            alt="Hero Image"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* 页面其他内容可以放在这里 */}
      </main>
    </Layout>
  );
}