import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import WaitlistPopup from './WaitlistPopup';

function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>EXPLORE</li>
            <li>ABOUT</li>
            <li>BLOG</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>THE X AGENT</h1>
            <p>Let our AI Agents handle it all for you. And you just focus on building your business.</p>
            <button onClick={() => setShowPopup(true)} className={styles.waitlistButton}>JOIN THE WAITLIST</button>
          </div>
          <img src="/ImageReference/S1_HeroImage.png" alt="AI Agent Cat" className={styles.heroImage} />
        </section>

        <section className={styles.howItWorks}>
          <h2>HOW IT WORKS</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <img src="/ImageReference/S2_CheclistCat.png" alt="Checklist Cat" />
              <p>We will provide you a checklist to fill and submit all the necessary details to us</p>
            </div>
            <div className={styles.step}>
              <img src="/ImageReference/S2_WorkingCat.png" alt="Working Cat" />
              <p>An AI Agent will be assigned to you to proceed all the setup</p>
            </div>
            <div className={styles.step}>
              <img src="/ImageReference/S2_RelaxCat.png" alt="Relax Cat" />
              <p>Relax and let the AI Agent handle all the execution for you</p>
            </div>
          </div>
        </section>

        <section className={styles.aiAgents}>
          <h2>OUR AI AGENTS</h2>
          <div className={styles.agentCards}>
            <div className={styles.agentCard}>
              <img src="/ImageReference/S3_Socmed Manager.png" alt="Social Media Manager" />
              <h3>THE SOCIAL MEDIA MANAGER</h3>
              <Link to="/social-media-manager" className={styles.learnMoreButton}>LEARN MORE</Link>
            </div>
            <div className={styles.agentCard}>
              <img src="/ImageReference/S3_Enquiry Specialist.png" alt="Inquiry Specialist" />
              <h3>THE INQUIRY SPECIALIST</h3>
              <Link to="/inquiry-specialist" className={styles.learnMoreButton}>LEARN MORE</Link>
            </div>
            <div className={styles.agentCard}>
              <img src="/ImageReference/S3_PA.png" alt="Personal Assistant" />
              <h3>YOUR PERSONAL ASSISTANT</h3>
              <Link to="/personal-assistant" className={styles.learnMoreButton}>LEARN MORE</Link>
            </div>
          </div>
        </section>
      </main>

      {showPopup && <WaitlistPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default HomePage;