import React, { useState } from 'react';
import { identities } from './data/identities.js';
import { deaths } from './data/deaths.js';
import { calculateDeath } from './data/scoring.js';
import WelcomePage from './components/WelcomePage.jsx';
import IdentitySelect from './components/IdentitySelect.jsx';
import QuestionPage from './components/QuestionPage.jsx';
import ResultPage from './components/ResultPage.jsx';

export default function App() {
  const [step, setStep] = useState('welcome');
  const [selectedIdentity, setSelectedIdentity] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleStart = () => {
    setStep('identity');
  };

  const handleIdentitySelect = (identityId) => {
    setSelectedIdentity(identityId);
    setAnswers([]);
    setResult(null);
    setStep('questions');
  };

  const handleQuestionsComplete = (finalAnswers) => {
    setAnswers(finalAnswers);
    const deathResult = calculateDeath(selectedIdentity, finalAnswers, identities, deaths);
    setResult(deathResult);
    setStep('result');
  };

  const handleRestart = () => {
    setStep('welcome');
    setSelectedIdentity(null);
    setAnswers([]);
    setResult(null);
  };

  const handleRetry = () => {
    handleIdentitySelect(selectedIdentity);
  };

  return (
    <div style={{ height: '100%' }}>
      {step === 'welcome' && (
        <WelcomePage onStart={handleStart} />
      )}
      {step === 'identity' && (
        <IdentitySelect onSelect={handleIdentitySelect} />
      )}
      {step === 'questions' && (
        <QuestionPage
          identityId={selectedIdentity}
          onComplete={handleQuestionsComplete}
        />
      )}
      {step === 'result' && (
        <ResultPage
          identityId={selectedIdentity}
          result={result}
          onRestart={handleRestart}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
}
