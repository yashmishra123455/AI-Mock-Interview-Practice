import React, { useState } from 'react';
import { generateQuestions } from '../questionGenerator';

export default function SetupScreen({ onStart }) {
  const [jobPost, setJobPost] = useState('');
  const [error, setError] = useState('');

  const handleStart = (e) => {
    e.preventDefault();
    if (!jobPost.trim()) {
      setError("Please enter a job role.");
      return;
    }
    
    setError('');

    try {
      // Local generation is extremely fast, no loading state needed
      const questions = generateQuestions(jobPost);
      
      if (!questions || questions.length === 0) {
        throw new Error("Failed to generate questions. Please try another role.");
      }
      onStart(questions);
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  return (
    <div className="glass-panel">
      <h1>InterviewAI</h1>
      <p>Enter a job role to generate a personalized 15-question mock interview practice session.</p>
      
      {error && (
        <div style={{ color: 'var(--danger)', marginBottom: '1rem', background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '12px' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleStart}>
        <div className="input-group">
          <label htmlFor="jobPost">Job Role</label>
          <input 
            type="text"
            id="jobPost"
            value={jobPost} 
            onChange={(e) => setJobPost(e.target.value)} 
            placeholder="e.g. Data Analyst, Data Scientist, Software Engineer..." 
            autoComplete="off"
            required
            style={{ marginBottom: '1rem' }}
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
          Start Interview
        </button>
      </form>
    </div>
  );
}
