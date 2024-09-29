import React, { useState } from 'react';
import styles from './WaitlistPopup.module.css';
import countryCodes from '../utils/countryCodes';

function WaitlistPopup({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({
    socialMediaManager: false,
    inquirySpecialist: false,
    personalAssistant: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzV0NVXWKE6GyfJWizeL1Nq3-bY2M9jR0feMj9_bIXVY5ubVy2dZ3SnqlSvxotz0PJV/exec';

    const formData = {
      name,
      email,
      whatsappNumber: `${countryCode}${whatsappNumber}`,
      selectedOptions: getSelectedOptionsText()
    };

    const queryString = Object.keys(formData)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`)
      .join('&');

    const scriptURL = `${GOOGLE_SCRIPT_URL}?${queryString}&callback=jsonpCallback`;

    const script = document.createElement('script');
    script.src = scriptURL;

    window.jsonpCallback = (response) => {
      console.log('Response:', response);
      if (response.result === "Success") {
        setSuccessMessage('We have received your details. We will reach out to you very soon!');
        // Clear form fields
        setName('');
        setEmail('');
        setCountryCode('');
        setWhatsappNumber('');
        setSelectedOptions({
          socialMediaManager: false,
          inquirySpecialist: false,
          personalAssistant: false,
        });
      } else {
        setSuccessMessage('Submission failed. Please try again.');
      }
      setIsSubmitting(false);
      document.body.removeChild(script);
      delete window.jsonpCallback;
    };

    document.body.appendChild(script);
  };

  const toggleOption = (option) => {
    setSelectedOptions(prev => ({ ...prev, [option]: !prev[option] }));
  };

  const getSelectedOptionsText = () => {
    const selected = Object.keys(selectedOptions).filter(key => selectedOptions[key]);
    return selected.map(key => {
      switch(key) {
        case 'socialMediaManager': return 'The Social Media Manager';
        case 'inquirySpecialist': return 'The Inquiry Specialist';
        case 'personalAssistant': return 'Your Personal Assistant';
        default: return '';
      }
    }).join(', ');
  };

  const isFormValid = () => {
    return name.trim() !== '' && 
           email.trim() !== '' && 
           countryCode !== '' && 
           whatsappNumber.trim() !== '' && 
           Object.values(selectedOptions).some(value => value);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Join the Waitlist</h2>
        {successMessage ? (
          <div className={styles.successMessage}>
            <p>{successMessage}</p>
            <button onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className={styles.phoneInput}>
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                required
              >
                <option value="">Code</option>
                {countryCodes.sort((a, b) => a.name.localeCompare(b.name)).map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code} - {country.name}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                placeholder="WhatsApp Number"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                required
              />
            </div>
            <p className={styles.optionsTitle}>I want to try:</p>
            <div className={styles.checkboxGroup}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.socialMediaManager}
                  onChange={() => toggleOption('socialMediaManager')}
                />
                The Social Media Manager
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.inquirySpecialist}
                  onChange={() => toggleOption('inquirySpecialist')}
                />
                The Inquiry Specialist
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.personalAssistant}
                  onChange={() => toggleOption('personalAssistant')}
                />
                Your Personal Assistant
              </label>
            </div>
            {getSelectedOptionsText() && (
              <p className={styles.selectedOptions}>Selected: {getSelectedOptionsText()}</p>
            )}
            <button type="submit" disabled={!isFormValid() || isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default WaitlistPopup;