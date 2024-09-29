import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './InquirySpecialist.module.css';

function InquirySpecialist() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const renderSection = (title, items) => (
    <div className={styles.section}>
      <h3 onClick={() => toggleSection(title)}>
        ✅ {title}
        <span className={styles.dropdownIcon}>{openSections[title] ? '▲' : '▼'}</span>
      </h3>
      {openSections[title] && (
        <ul className={styles.subList}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>THE X AGENT</Link>
      </header>
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <img src="/ImageReference/S3_Enquiry Specialist.png" alt="Inquiry Specialist" className={styles.agentImage} />
        </div>
        <h2 className={styles.title}>THE INQUIRY SPECIALIST</h2>
        {renderSection("FAQ and General Inquiries", [
          "Provide instant answers to frequently asked questions about the business",
          "Offer information on products, services, and company policies",
          "Explain complex terms or processes in simpler language"
        ])}
        {renderSection("Quote Extraction and Generation", [
          "Pull relevant quotes from documents for proposals or reports",
          "Generate custom quotes based on predefined parameters and pricing information",
          "Compare quotes across different documents or time periods"
        ])}
        {renderSection("Human Resources Support", [
          "Answer questions about company policies and procedures",
          "Provide information on benefits and employee programs",
          "Assist with onboarding by explaining key documents"
        ])}
        {renderSection("Customer Service Enhancement", [
          "Provide detailed product information from manuals and spec sheets",
          "Answer questions about warranties and return policies",
          "Assist with order tracking and shipping inquiries"
        ])}
        {renderSection("Training and Development", [
          "Answer questions about training materials and courses",
          "Provide summaries of learning content",
          "Assist employees in finding relevant training resources"
        ])}
      </main>
    </div>
  );
}

export default InquirySpecialist;