import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SocialMediaManager from './components/SocialMediaManager';
import InquirySpecialist from './components/InquirySpecialist';
import PersonalAssistant from './components/PersonalAssistant';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/social-media-manager" element={<SocialMediaManager />} />
          <Route path="/inquiry-specialist" element={<InquirySpecialist />} />
          <Route path="/personal-assistant" element={<PersonalAssistant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;