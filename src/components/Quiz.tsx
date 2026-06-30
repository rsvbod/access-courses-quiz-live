import { useState, useEffect } from 'react';
import { generalQuestions, specificQuestions, calculateOutcome, type Outcome, type Category, type Question } from '../data/quizData';
import { ArrowRight, Sparkles, CheckSquare, Square, Briefcase, GraduationCap, Mail, Send, Check } from 'lucide-react';

export const Quiz: React.FC = () => {
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [enquirySent, setEnquirySent] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Track selected categories for the current question
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  
  const [scores, setScores] = useState<Record<Category, number>>({ 
    Tech_Logic: 0, Healthcare: 0, Science_Analysis: 0, People_Service: 0, Creative_Humanities: 0, Practical_Trades: 0 
  });
  
  const [isFinished, setIsFinished] = useState(false);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  
  const [animationKey, setAnimationKey] = useState(0);

  // Initialize randomized questions on mount
  useEffect(() => {
    // Pick 3 random general, 4 random specific
    const shuffledGeneral = [...generalQuestions].sort(() => 0.5 - Math.random()).slice(0, 3);
    const shuffledSpecific = [...specificQuestions].sort(() => 0.5 - Math.random()).slice(0, 4);
    
    setActiveQuestions([...shuffledGeneral, ...shuffledSpecific]);
  }, []);

  const toggleOption = (category: Category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleNextQuestion = () => {
    if (selectedCategories.length === 0) return; // Require at least one selection

    // Add points for all selected categories
    const newScores = { ...scores };
    selectedCategories.forEach(cat => {
      newScores[cat] += 1;
    });
    setScores(newScores);
    
    // Reset selection for next question
    setSelectedCategories([]);

    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnimationKey(prev => prev + 1);
    } else {
      const finalOutcome = calculateOutcome(newScores);
      setOutcome(finalOutcome);
      setIsFinished(true);
      setAnimationKey(prev => prev + 1);
    }
  };

  const restartQuiz = () => {
    const shuffledGeneral = [...generalQuestions].sort(() => 0.5 - Math.random()).slice(0, 3);
    const shuffledSpecific = [...specificQuestions].sort(() => 0.5 - Math.random()).slice(0, 4);
    setActiveQuestions([...shuffledGeneral, ...shuffledSpecific]);
    
    setCurrentIndex(0);
    setSelectedCategories([]);
    setScores({ Tech_Logic: 0, Healthcare: 0, Science_Analysis: 0, People_Service: 0, Creative_Humanities: 0, Practical_Trades: 0 });
    setIsFinished(false);
    setOutcome(null);
    setAnimationKey(prev => prev + 1);
  };

  if (activeQuestions.length === 0) {
    return <div className="glass-card">Loading...</div>;
  }

  if (isFinished && outcome) {
    return (
      <div className="glass-card animate-fade-in result-container" key={`result-${animationKey}`}>
        <div className="result-tag">Your Career Match</div>
        <h1 className="title result-course">{outcome.course}</h1>
        <h2 className="result-headline gradient-text" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600 }}>
          {outcome.headline}
        </h2>
        <p className="result-persona">{outcome.persona}</p>
        
        <div className="result-details" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <div className="detail-card" style={{ width: '100%' }}>
            <div className="detail-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
              <Briefcase size={16} /> Pathways
            </div>
            <div className="detail-value" style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>
              {outcome.pathwayInfo}
            </div>
          </div>
        </div>

        <button className="cta-button" onClick={() => window.open(outcome.url, '_blank')}>
          <GraduationCap size={20} />
          {outcome.cta}
        </button>
        
        <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {!showEnquiryForm && !enquirySent ? (
            <button 
              onClick={() => setShowEnquiryForm(true)}
              style={{ padding: '1rem', background: 'rgba(79, 70, 229, 0.1)', border: '1px solid var(--primary)', borderRadius: '8px', color: 'var(--text-light)', cursor: 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
            >
              Click Here to Enquire Now <ArrowRight size={18} />
            </button>
          ) : !enquirySent ? (
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-light)' }}>Student Enquiry Form</h3>
              <form onSubmit={(e) => { e.preventDefault(); setEnquirySent(true); setShowEnquiryForm(false); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" placeholder="Full Name" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.05)', color: 'var(--text-main)', outline: 'none' }} />
                <input type="email" placeholder="Email Address" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.05)', color: 'var(--text-main)', outline: 'none' }} />
                <textarea placeholder="How can we help you?" rows={3} required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.05)', color: 'var(--text-main)', outline: 'none', resize: 'vertical' }}></textarea>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Your enquiry will be sent to enquiries@accesscoursesonline.com</p>
                <button type="submit" style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 500 }}>
                  Send Enquiry <Send size={16} />
                </button>
              </form>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#10b981', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <Check size={20} />
              <span>Your enquiry has been sent successfully!</span>
            </div>
          )}
        </div>
        
        <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Need more guidance?</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.5' }}>
            Not sure which path is right for you? You can book a free 15-minute consultation with our careers advisor, Daniela Petrillo.
          </p>
          {!showBookingForm && !bookingSent ? (
            <button 
              onClick={() => setShowBookingForm(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 500 }}
            >
              <Mail size={18} />
              Book 15 Mins with Careers Advisor
            </button>
          ) : !bookingSent ? (
            <form onSubmit={(e) => { e.preventDefault(); setBookingSent(true); setShowBookingForm(false); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', marginTop: '1rem' }}>
              <input type="text" placeholder="Full Name" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.05)', color: 'var(--text-main)', outline: 'none' }} />
              <input type="email" placeholder="Email Address" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.05)', color: 'var(--text-main)', outline: 'none' }} />
              <input type="text" placeholder="Preferred Date/Time (Optional)" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.05)', color: 'var(--text-main)', outline: 'none' }} />
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Your request will be sent directly to daniela.petrillo@accesscoursesonline.com</p>
              <button type="submit" style={{ padding: '0.75rem 1.5rem', borderRadius: '8px', background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 500 }}>
                Request Booking <Send size={16} />
              </button>
            </form>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#10b981', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)', marginTop: '1rem' }}>
              <Check size={20} />
              <span>Your booking request has been sent! Daniela will be in touch shortly.</span>
            </div>
          )}
        </div>
        
        <div style={{ marginTop: '2rem' }}>
          <button className="restart-btn" onClick={restartQuiz}>
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = activeQuestions[currentIndex];
  const progress = ((currentIndex) / activeQuestions.length) * 100;
  
  // Is this a general or specific question?
  const isGeneral = currentIndex < 3; 

  return (
    <div className="glass-card" style={{ minHeight: '500px', display: 'flex', flexDirection: 'column' }}>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      
      <div className="animate-fade-in" key={`question-${animationKey}`} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="subtitle" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Sparkles size={18} className="gradient-text" />
          <span>{isGeneral ? "General Exploration" : "Specific Preferences"}</span>
        </div>
        
        <h2 className="question-text">{question.text}</h2>
        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          (Select all that apply)
        </p>
        
        <div className="options-grid" style={{ flex: 1 }}>
          {question.options.map((option, idx) => {
            const isSelected = selectedCategories.includes(option.category);
            return (
              <button 
                key={idx} 
                className={`option-btn ${isSelected ? 'selected' : ''}`}
                style={{ 
                  border: isSelected ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                  background: isSelected ? 'rgba(79, 70, 229, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
                onClick={() => toggleOption(option.category)}
              >
                {isSelected ? (
                  <CheckSquare className="option-icon" style={{ color: 'var(--primary)', flexShrink: 0 }} />
                ) : (
                  <Square className="option-icon" style={{ flexShrink: 0 }} />
                )}
                <span style={{ textAlign: 'left' }}>{option.text}</span>
              </button>
            )
          })}
        </div>
        
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <button 
            className="cta-button" 
            style={{ 
              opacity: selectedCategories.length > 0 ? 1 : 0.5,
              cursor: selectedCategories.length > 0 ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              width: 'auto',
              padding: '0.75rem 2rem'
            }}
            onClick={handleNextQuestion}
            disabled={selectedCategories.length === 0}
          >
            Next <ArrowRight size={18} />
          </button>
        </div>
      </div>
      
      <div style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        Question {currentIndex + 1} of {activeQuestions.length}
      </div>
    </div>
  );
};
