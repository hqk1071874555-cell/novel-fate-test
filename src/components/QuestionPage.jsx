import React, { useState, useCallback } from 'react';
import { questions } from '../data/questions.js';
import { identities } from '../data/identities.js';

export default function QuestionPage({ identityId, onComplete }) {
  const identity = identities.find((i) => i.id === identityId);
  const identityQuestions = questions[identityId] || [];
  const totalQuestions = identityQuestions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = identityQuestions[currentIndex];
  const hasAnswered = selectedOption !== null;

  const handleSelect = useCallback((optionIndex) => {
    if (hasAnswered) return;

    setSelectedOption(optionIndex);

    setTimeout(() => {
      const newAnswers = [...answers, { questionId: currentQuestion.id, selectedIndex: optionIndex }];

      if (currentIndex < totalQuestions - 1) {
        setAnswers(newAnswers);
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
      } else {
        onComplete(newAnswers);
      }
    }, 300);
  }, [hasAnswered, currentIndex, currentQuestion, answers, totalQuestions, onComplete]);

  if (!currentQuestion) {
    return (
      <div className="page">
        <p style={{ color: 'var(--text-muted)' }}>题目加载失败</p>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="page page--top">
      <div className="page-inner">
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
          animation: 'slideUpShort 0.3s ease'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            color: 'var(--text-secondary)'
          }}>
            <span>{identity?.icon}</span>
            <span>{identity?.name}</span>
          </div>
          <span style={{
            fontSize: 13,
            color: 'var(--text-muted)',
            fontVariantNumeric: 'tabular-nums'
          }}>
            {currentIndex + 1} / {totalQuestions}
          </span>
        </div>

        {/* Progress bar */}
        <div className="progress-bar" style={{ marginBottom: 32, animation: 'slideUpShort 0.3s ease 0.05s both' }}>
          <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Question */}
        <div key={currentIndex} style={{ animation: 'slideUp 0.4s ease' }}>
          <h3 style={{
            fontSize: 20,
            fontWeight: 500,
            marginBottom: 12,
            color: 'var(--text-primary)'
          }}>
            {currentQuestion.text}
          </h3>

          <p style={{
            fontSize: 15,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: 28,
            padding: '16px 20px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: 'var(--radius-md)',
            borderLeft: '3px solid var(--border-light)'
          }}>
            {currentQuestion.scenario}
          </p>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const labels = ['A', 'B', 'C'];
              return (
                <button
                  key={idx}
                  className={`option-btn ${isSelected ? 'option-btn--selected' : ''}`}
                  onClick={() => handleSelect(idx)}
                  style={{
                    animation: `slideUpShort 0.3s ease ${0.1 + idx * 0.08}s both`,
                    pointerEvents: hasAnswered ? 'none' : 'auto'
                  }}
                >
                  <span className="option-btn__indicator">{labels[idx]}</span>
                  <span>{option.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
