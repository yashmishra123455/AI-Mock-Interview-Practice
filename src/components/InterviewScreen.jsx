import React, { useState } from 'react';

export default function InterviewScreen({ questions, onComplete, onRestart }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questions[currentIndex];
  
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    const isCorrect = selectedOption === currentQuestion.correctAnswerIndex;
    const newAnswers = [...answers, { 
      question: currentQuestion.question,
      selected: selectedOption !== null ? currentQuestion.options[selectedOption] : "Skipped",
      correct: currentQuestion.options[currentQuestion.correctAnswerIndex],
      isCorrect: selectedOption !== null ? isCorrect : false,
      skipped: selectedOption === null
    }];

    setAnswers(newAnswers);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      onComplete(newAnswers);
    }
  };

  const handleSkip = () => {
    setSelectedOption(null);
    handleNext();
  };

  const progressPercentage = ((currentIndex) / questions.length) * 100;

  return (
    <div className="glass-panel" style={{ width: '100%' }}>
      <div className="header-controls">
        <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
          Question {currentIndex + 1} of {questions.length}
        </span>
        <button onClick={onRestart} className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
          Restart Interview
        </button>
      </div>
      
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <h2 style={{ fontSize: '1.4rem' }}>{currentQuestion.question}</h2>

      <div className="options-grid">
        {currentQuestion.options.map((option, idx) => (
          <button 
            key={idx} 
            className={`option-btn ${selectedOption === idx ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(idx)}
          >
            <span style={{ fontWeight: 'bold', marginRight: '10px', opacity: 0.7 }}>
              {String.fromCharCode(65 + idx)}.
            </span>
            {option}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
        <button 
          onClick={handleSkip} 
          className="btn btn-secondary"
        >
          Skip Question
        </button>
        
        <button 
          onClick={handleNext} 
          className="btn btn-primary"
          disabled={selectedOption === null}
        >
          {currentIndex === questions.length - 1 ? "Finish Interview" : "Next Question"}
        </button>
      </div>
    </div>
  );
}
