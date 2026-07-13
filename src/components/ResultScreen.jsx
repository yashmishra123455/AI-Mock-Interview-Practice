import React from 'react';

export default function ResultScreen({ answers, onRestart }) {
  const correctCount = answers.filter(a => a.isCorrect && !a.skipped).length;
  const skippedCount = answers.filter(a => a.skipped).length;
  const wrongCount = answers.length - correctCount - skippedCount;
  
  const scorePercentage = Math.round((correctCount / answers.length) * 100);

  let feedback = "Beginner";
  if (scorePercentage > 80) feedback = "Advanced";
  else if (scorePercentage > 50) feedback = "Intermediate";

  return (
    <div className="glass-panel" style={{ width: '100%', maxWidth: '900px' }}>
      <h1>Interview Complete</h1>
      
      <div className="score-display">
        <div className="score-circle" style={{ '--score': scorePercentage }}>
          <span className="score-text">{scorePercentage}%</span>
        </div>
        
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          Performance Level: <span style={{ color: 'var(--primary)' }}>{feedback}</span>
        </h2>

        <p style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '1.2rem', marginTop: '1.5rem' }}>
          <span style={{ color: 'var(--success)' }}>Correct: {correctCount}</span>
          <span style={{ color: 'var(--danger)' }}>Wrong: {wrongCount}</span>
          <span style={{ color: 'var(--warning)' }}>Skipped: {skippedCount}</span>
        </p>
      </div>

      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <button onClick={onRestart} className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
          Restart Interview
        </button>
      </div>
      
      <div style={{ marginTop: '3.5rem', borderTop: '1px solid var(--surface-border)', paddingTop: '2.5rem' }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Detailed Review</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {answers.map((ans, idx) => (
            <div 
              key={idx} 
              style={{ 
                padding: '1.5rem', 
                background: 'rgba(15, 23, 42, 0.4)', 
                borderRadius: '12px',
                borderLeft: `4px solid ${ans.isCorrect ? 'var(--success)' : ans.skipped ? 'var(--warning)' : 'var(--danger)'}`
              }}
            >
              <h4 style={{ marginBottom: '0.8rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                {idx + 1}. {ans.question}
              </h4>
              <p style={{ margin: '0.4rem 0', color: ans.isCorrect ? 'var(--success)' : (ans.skipped ? 'var(--warning)' : 'var(--danger)') }}>
                <strong>Your Answer:</strong> {ans.selected}
              </p>
              {!ans.isCorrect && (
                <p style={{ margin: '0.4rem 0', color: 'var(--success)' }}>
                  <strong>Correct Answer:</strong> {ans.correct}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
