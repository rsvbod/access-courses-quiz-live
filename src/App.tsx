import { useState } from 'react';
import { Quiz } from './components/Quiz';
import { Compass } from 'lucide-react';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>
      
      <div className="app-container">
        {!started ? (
          <div className="glass-card animate-fade-in" style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(79,70,229,0.2) 0%, rgba(16,185,129,0.2) 100%)',
                padding: '1.5rem',
                borderRadius: '50%',
                border: '1px solid var(--glass-border)'
              }}>
                <Compass size={48} className="gradient-text" style={{ color: '#818CF8' }} />
              </div>
            </div>
            
            <h1 className="title">Discover Your True <span className="gradient-text">Career Path</span></h1>
            <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              Take our interactive assessment to uncover the Access Diploma that perfectly aligns with your natural strengths, core values, and lifestyle goals.
            </p>
            
            <button className="cta-button" onClick={() => setStarted(true)}>
              Start Career Assessment
            </button>
          </div>
        ) : (
          <Quiz />
        )}
      </div>
    </>
  );
}

export default App;
