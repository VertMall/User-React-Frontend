import React, { useState, useEffect } from 'react';
import './LaunchInvitation.css';

const LaunchInvitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleOpen = () => setIsOpen(true);
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="invitation-container">
      <div className="particles-container">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${3 + p.delay % 3}s`
            }}
          />
        ))}
      </div>

      <div className="logo">
        <div className="logo-ring">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="2" className="logo-circle" />
            <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="1.5" className="logo-circle-delayed" />
            <path d="M24 8 L24 16 M24 32 L24 40 M8 24 L16 24 M32 24 L40 24" stroke="white" strokeWidth="2" className="logo-line" />
            <circle cx="24" cy="24" r="4" fill="white" className="logo-dot" />
          </svg>
        </div>
        <span className="logo-text">The Vert Mall</span>
      </div>

      <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`}>
        <div className={`envelope ${isGlowing ? 'glow' : ''}`}>
          <div className="envelope-front">
            <div className="envelope-flap"></div>
            <div className="envelope-body">
              <div className="address-block">
                <p className="address-line animate-text">You're Invited</p>
                <p className="address-line animate-text-delayed">To Our Launch</p>
              </div>
              <div className="stamp">✦</div>
            </div>
          </div>

          <div className={`letter ${isOpen ? 'slide-out' : ''}`}>
            <div className={`letter-content ${isFlipped ? 'flipped' : ''}`}>
              <div className="letter-front">
                <div className="letter-header">
                  <span className="letter-icon">✦</span>
                  <h2>YOU'RE INVITED</h2>
                  <span className="letter-icon">✦</span>
                </div>
                <h1 className="letter-title">The Vert Mall</h1>
                <p className="letter-subtitle">Grand Opening Celebration</p>
                <div className="letter-details">
                  <p>📅 <span>21st August 2026</span></p>
                  <p>📍 <span>53 Orlu Street, Umuahia</span></p>
                  <p>⏰ <span>10:00 AM</span></p>
                </div>
                <div className="letter-divider"></div>
                <p className="letter-message">
                  You are cordially invited to the grand opening of The Vert Mall.
                  Join us for a morning of celebration, networking, and exclusive previews.
                </p>
                <div className="address-details">
                  <p className="address-full">
                    53 Orlu Street by Enugu Road<br />
                    Umuahia, Abia State
                  </p>
                </div>
                <p className="letter-footer">✦ We look forward to welcoming you ✦</p>
              </div>
              <div className="letter-back">
                <div className="back-content">
                  <h3>We can't wait to see you!</h3>
                  <p>
                    Join us for this special morning event.
                    <br /><br />
                    For questions, reach out to us at:
                    <br />
                    <strong>support@thevertmall.com</strong>
                  </p>
                  <div className="back-divider"></div>
                  <div className="back-icons">
                    <span>🛍️</span>
                    <span>✦</span>
                    <span>🎉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="controls">
          {!isOpen && (
            <button className="open-btn shimmer" onClick={handleOpen}>
              Open Invitation ✦
            </button>
          )}
          {isOpen && (
            <button className="flip-btn" onClick={handleFlip}>
              {isFlipped ? 'Show Front' : 'Flip to Back'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaunchInvitation;
