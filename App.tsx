import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AIVisibility } from './pages/AIVisibility';
import { LeadGen } from './pages/LeadGen';
import { VoiceAgents } from './pages/VoiceAgents';
import { EmailMarketing } from './pages/EmailMarketing';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-visibility" element={<AIVisibility />} />
          <Route path="/lead-generation" element={<LeadGen />} />
          <Route path="/voice-agents" element={<VoiceAgents />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
