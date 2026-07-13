import { useState } from 'react';
import SetupScreen from './components/SetupScreen';
import InterviewScreen from './components/InterviewScreen';
import ResultScreen from './components/ResultScreen';

function App() {
  const [screen, setScreen] = useState('setup'); // 'setup', 'interview', 'result'
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const handleStart = (generatedQuestions) => {
    setQuestions(generatedQuestions);
    setScreen('interview');
  };

  const handleComplete = (userAnswers) => {
    setAnswers(userAnswers);
    setScreen('result');
  };

  const handleRestart = () => {
    setQuestions([]);
    setAnswers([]);
    setScreen('setup');
  };

  return (
    <>
      {screen === 'setup' && <SetupScreen onStart={handleStart} />}
      {screen === 'interview' && (
        <InterviewScreen 
          questions={questions} 
          onComplete={handleComplete} 
          onRestart={handleRestart}
        />
      )}
      {screen === 'result' && (
        <ResultScreen 
          answers={answers} 
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

export default App;
