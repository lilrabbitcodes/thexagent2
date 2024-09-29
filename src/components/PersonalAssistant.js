import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PersonalAssistant.module.css';

function PersonalAssistant() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>THE X AGENT</Link>
      </header>
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <img src="/ImageReference/S3_PA.png" alt="Personal Assistant" className={styles.agentImage} />
          <div className={styles.comingSoon}>COMING SOON</div>
        </div>
        <h2 className={styles.title}>YOUR PERSONAL ASSISTANT</h2>
        <ul className={styles.featureList}>
          <li>✅ Send quick email replies or auto-responses</li>
          <li>✅ Schedule appointments and meetings automatically</li>
          <li>✅ Send event reminders</li>
          <li>✅ View and manage your daily/weekly schedule</li>
          <li>✅ Get daily weather forecasts</li>
          <li>✅ Fetch and summarise news articles</li>
          <li>✅ Automate your expense tracking and generate expense report</li>
        </ul>
      </main>
    </div>
  );
}

export default PersonalAssistant;