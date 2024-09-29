import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SocialMediaManager.module.css';

function SocialMediaManager() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>THE X AGENT</Link>
      </header>
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <img src="/ImageReference/S3_Socmed Manager.png" alt="Social Media Manager" className={styles.agentImage} />
        </div>
        <h2 className={styles.title}>THE SOCIAL MEDIA MANAGER</h2>
        <ul className={styles.featureList}>
          <li>✅ Generate blog content</li>
          <li>✅ Generate captions for socials</li>
          <li>✅ Automate scheduling and posting for any social media platforms</li>
          <li>✅ Platforms: Facebook, Instagram, Twitter, LinkedIn</li>
        </ul>
      </main>
    </div>
  );
}

export default SocialMediaManager;