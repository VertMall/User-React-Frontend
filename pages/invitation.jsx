import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Invitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const handleOpen = () => setIsOpen(true);
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <>
      <Head>
        <title>You're Invited - VertMall Grand Launch</title>
        <meta name="description" content="Join us for the grand launch of VertMall on 31st August 2026 at 10:00 AM" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      <div className="invitation-container">
        {/* Particles */}
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
                animationDuration: `${4 + p.delay % 3}s`
              }}
            />
          ))}
        </div>

        {/* Decorative corner elements */}
        <div className="corner-decoration corner-tl"></div>
        <div className="corner-decoration corner-tr"></div>
        <div className="corner-decoration corner-bl"></div>
        <div className="corner-decoration corner-br"></div>

        <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`}>
          <div className="envelope">
            {/* Envelope front */}
            <div className="envelope-front">
              <div className="envelope-flap"></div>
              <div className="envelope-body">
                <div className="envelope-content">
                  <div className="envelope-logo">
                    <Image src="/logo.png" alt="VertMall" width={60} height={60} />
                  </div>
                  <div className="envelope-text">
                    <p className="envelope-title">You're Invited</p>
                    <p className="envelope-subtitle">VertMall Grand Launch</p>
                  </div>
                  <div className="envelope-seal">✦</div>
                </div>
              </div>
            </div>

            {/* Letter */}
            <div className={`letter ${isOpen ? 'slide-out' : ''}`}>
              <div className={`letter-content ${isFlipped ? 'flipped' : ''}`}>
                {/* Front of letter */}
                <div className="letter-front">
                  <div className="letter-pattern"></div>
                  
                  <div className="letter-inner">
                    <div className="letter-logo">
                      <Image src="/logo.png" alt="VertMall" width={70} height={70} />
                    </div>
                    
                    <div className="letter-greeting">
                      <span className="greeting-line">✦</span>
                      <h2>Dear Sir/Ma,</h2>
                      <span className="greeting-line">✦</span>
                    </div>

                    <p className="letter-invite">
                      You are specially invited to witness the official launch of <strong>VertMall</strong>.
                    </p>

                    <div className="letter-event-details">
                      <div className="event-item">
                        <span className="event-icon">📅</span>
                        <div>
                          <span className="event-label">Date</span>
                          <span className="event-value">Monday, 31st August 2026</span>
                        </div>
                      </div>
                      <div className="event-item">
                        <span className="event-icon">⏰</span>
                        <div>
                          <span className="event-label">Time</span>
                          <span className="event-value">10:00 AM - 10:45 AM</span>
                        </div>
                      </div>
                      <div className="event-item">
                        <span className="event-icon">📍</span>
                        <div>
                          <span className="event-label">Venue</span>
                          <span className="event-value">Umuahia</span>
                        </div>
                      </div>
                    </div>

                    <div className="letter-divider">
                      <span>✦</span>
                      <span>✦</span>
                      <span>✦</span>
                    </div>

                    <p className="letter-message">
                      Join us as we unveil a new way to shop, connect, and experience convenience in Umuahia.
                      <br /><br />
                      We would be honored to have you experience VertMall firsthand.
                    </p>

                    <div className="letter-tagline">
                      <span>The VertMall Xperience….</span>
                    </div>
                  </div>
                </div>

                {/* Back of letter */}
                <div className="letter-back">
                  <div className="back-inner">
                    <div className="back-logo">
                      <Image src="/logo.png" alt="VertMall" width={80} height={80} />
                    </div>
                    
                    <h3>We Look Forward to Welcoming You</h3>
                    
                    <div className="back-details">
                      <p>
                        <strong>VertMall</strong><br />
                        A new way to shop, connect, and experience convenience.
                      </p>
                    </div>

                    <div className="back-divider"></div>

                    <div className="back-contact">
                      <p>For questions, reach out to us at:</p>
                      <a href="mailto:support@thevertmall.com">support@thevertmall.com</a>
                    </div>

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

          {/* Controls */}
          <div className="controls">
            {!isOpen && (
              <button className="open-btn" onClick={handleOpen}>
                <span className="btn-text">Open Invitation</span>
                <span className="btn-icon">✦</span>
              </button>
            )}
            {isOpen && (
              <button className="flip-btn" onClick={handleFlip}>
                {isFlipped ? 'Show Front' : 'Flip to Back'}
              </button>
            )}
          </div>
        </div>

        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .invitation-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #0d1f12 0%, #1a4a2a 40%, #2d6b3f 100%);
            font-family: 'Playfair Display', 'Georgia', serif;
            padding: 20px;
            position: relative;
            overflow: hidden;
          }

          /* Particles */
          .particles-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
          }

          .particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 50%;
            animation: floatParticle linear infinite;
            pointer-events: none;
          }

          @keyframes floatParticle {
            0% {
              transform: translateY(100vh) rotate(0deg) scale(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateY(-100vh) rotate(720deg) scale(1);
              opacity: 0;
            }
          }

          /* Corner Decorations */
          .corner-decoration {
            position: fixed;
            width: 80px;
            height: 80px;
            border: 2px solid rgba(255, 255, 255, 0.06);
            z-index: 0;
            pointer-events: none;
          }

          .corner-tl { top: 30px; left: 30px; border-right: none; border-bottom: none; }
          .corner-tr { top: 30px; right: 30px; border-left: none; border-bottom: none; }
          .corner-bl { bottom: 30px; left: 30px; border-right: none; border-top: none; }
          .corner-br { bottom: 30px; right: 30px; border-left: none; border-top: none; }

          .envelope-wrapper {
            perspective: 1200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 30px;
            z-index: 1;
            position: relative;
          }

          .envelope {
            position: relative;
            width: 520px;
            height: 340px;
            transform-style: preserve-3d;
            transition: transform 0.6s ease;
            animation: floatEnvelope 5s ease-in-out infinite;
          }

          @keyframes floatEnvelope {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(0.3deg); }
          }

          .envelope-front {
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(145deg, #faf8f5, #f0ebe4);
            border-radius: 8px;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            z-index: 2;
            backface-visibility: hidden;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .envelope-flap {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50%;
            background: linear-gradient(145deg, #f5f0e8, #e8e0d6);
            clip-path: polygon(0 0, 100% 0, 50% 100%);
            border-bottom: 2px solid rgba(0, 0, 0, 0.08);
            transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
            transform-origin: top;
            z-index: 3;
          }

          .envelope.open .envelope-flap {
            transform: rotateX(180deg);
          }

          .envelope-body {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 55%;
            padding: 20px 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(180deg, #faf8f5, #f0ebe4);
            border-top: 2px solid rgba(0, 0, 0, 0.06);
          }

          .envelope-content {
            display: flex;
            align-items: center;
            gap: 25px;
            width: 100%;
            justify-content: center;
          }

          .envelope-logo {
            filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
          }

          .envelope-logo img {
            border-radius: 50%;
          }

          .envelope-text {
            text-align: left;
          }

          .envelope-title {
            font-size: 16px;
            letter-spacing: 6px;
            text-transform: uppercase;
            color: #8a7a6a;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            margin: 0;
          }

          .envelope-subtitle {
            font-size: 22px;
            font-weight: 700;
            color: #1a3a2a;
            font-family: 'Playfair Display', serif;
            margin: 4px 0 0 0;
            letter-spacing: 1px;
          }

          .envelope-seal {
            font-size: 28px;
            color: #c9a84c;
            opacity: 0.5;
            margin-left: auto;
          }

          /* Letter */
          .letter {
            position: absolute;
            top: 20px;
            left: 30px;
            width: calc(100% - 60px);
            height: calc(100% - 40px);
            background: #ffffff;
            border-radius: 6px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.12);
            transform: translateY(0) scale(0.92);
            transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1;
            overflow: hidden;
            transform-origin: bottom center;
            opacity: 0;
            pointer-events: none;
            border: 1px solid rgba(0, 0, 0, 0.06);
          }

          .letter.slide-out {
            transform: translateY(-130px) scale(1);
            opacity: 1;
            pointer-events: all;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
            z-index: 5;
            animation: letterReveal 0.9s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes letterReveal {
            0% {
              transform: translateY(-60px) scale(0.85) rotate(-2deg);
              opacity: 0;
            }
            100% {
              transform: translateY(-130px) scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          .letter-content {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .letter-content.flipped {
            transform: rotateY(180deg);
          }

          .letter-front,
          .letter-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
          }

          .letter-front {
            background: linear-gradient(160deg, #fcfaf7, #f5f0eb);
            padding: 30px 35px;
            position: relative;
            overflow-y: auto;
          }

          .letter-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              radial-gradient(circle at 20% 50%, rgba(201, 168, 76, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(201, 168, 76, 0.03) 0%, transparent 50%);
            pointer-events: none;
          }

          .letter-inner {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
          }

          .letter-logo {
            margin-bottom: 12px;
            filter: drop-shadow(0 2px 12px rgba(26, 74, 42, 0.15));
          }

          .letter-logo img {
            border-radius: 50%;
          }

          .letter-greeting {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 12px;
          }

          .greeting-line {
            color: #c9a84c;
            font-size: 14px;
            opacity: 0.5;
          }

          .letter-greeting h2 {
            font-family: 'Playfair Display', serif;
            font-size: 22px;
            font-weight: 600;
            color: #1a3a2a;
            margin: 0;
            letter-spacing: 0.5px;
          }

          .letter-invite {
            font-size: 16px;
            color: #2d3d3a;
            text-align: center;
            line-height: 1.7;
            max-width: 420px;
            margin: 0 0 14px 0;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
          }

          .letter-invite strong {
            color: #1a4a2a;
            font-weight: 600;
          }

          .letter-event-details {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;
            max-width: 380px;
            background: rgba(255, 255, 255, 0.6);
            padding: 14px 20px;
            border-radius: 10px;
            margin: 6px 0 12px 0;
            border: 1px solid rgba(201, 168, 76, 0.15);
          }

          .event-item {
            display: flex;
            align-items: center;
            gap: 14px;
          }

          .event-icon {
            font-size: 18px;
            width: 30px;
            text-align: center;
          }

          .event-item div {
            display: flex;
            flex-direction: column;
          }

          .event-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #8a7a6a;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
          }

          .event-value {
            font-size: 14px;
            color: #1a3a2a;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
          }

          .letter-divider {
            display: flex;
            gap: 12px;
            margin: 8px 0;
            color: #c9a84c;
            font-size: 12px;
            opacity: 0.4;
          }

          .letter-message {
            font-size: 14px;
            color: #2d3d3a;
            text-align: center;
            line-height: 1.8;
            max-width: 380px;
            margin: 0 0 10px 0;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
          }

          .letter-tagline {
            font-family: 'Playfair Display', serif;
            font-size: 18px;
            font-style: italic;
            color: #c9a84c;
            letter-spacing: 1px;
            margin-top: 4px;
          }

          /* Back of letter */
          .letter-back {
            background: linear-gradient(160deg, #f5f0eb, #ece6de);
            transform: rotateY(180deg);
            padding: 35px;
            justify-content: center;
            align-items: center;
          }

          .back-inner {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .back-logo {
            margin-bottom: 16px;
          }

          .back-logo img {
            border-radius: 50%;
            filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.08));
          }

          .back-inner h3 {
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            color: #1a3a2a;
            margin: 0 0 12px 0;
            font-weight: 600;
          }

          .back-details {
            max-width: 320px;
            margin: 0 auto 12px;
          }

          .back-details p {
            font-size: 15px;
            color: #2d3d3a;
            line-height: 1.8;
            font-family: 'Inter', sans-serif;
            font-weight: 300;
          }

          .back-details strong {
            color: #1a4a2a;
            font-weight: 600;
          }

          .back-divider {
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, transparent, #c9a84c, transparent);
            margin: 12px auto;
          }

          .back-contact {
            margin: 8px 0;
          }

          .back-contact p {
            font-size: 13px;
            color: #6a5a4a;
            font-family: 'Inter', sans-serif;
            margin: 0 0 4px 0;
          }

          .back-contact a {
            color: #1a4a2a;
            text-decoration: none;
            font-weight: 500;
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            transition: color 0.3s ease;
          }

          .back-contact a:hover {
            color: #c9a84c;
          }

          .back-icons {
            display: flex;
            gap: 20px;
            font-size: 22px;
            margin-top: 10px;
          }

          .back-icons span {
            animation: bounceIcon 2s ease-in-out infinite;
          }

          .back-icons span:nth-child(2) { animation-delay: 0.3s; }
          .back-icons span:nth-child(3) { animation-delay: 0.6s; }

          @keyframes bounceIcon {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          /* Controls */
          .controls {
            display: flex;
            gap: 16px;
            margin-top: 10px;
          }

          .open-btn,
          .flip-btn {
            padding: 14px 36px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #f5f0eb;
            font-size: 15px;
            letter-spacing: 2px;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.4s ease;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .open-btn:hover,
          .flip-btn:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: translateY(-3px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
            border-color: rgba(255, 255, 255, 0.3);
          }

          .btn-text {
            font-weight: 300;
          }

          .btn-icon {
            font-size: 14px;
            transition: transform 0.3s ease;
          }

          .open-btn:hover .btn-icon {
            transform: rotate(90deg);
          }

          /* Responsive */
          @media (max-width: 580px) {
            .envelope {
              width: 340px;
              height: 240px;
            }

            .envelope-body {
              padding: 15px 20px;
            }

            .envelope-content {
              gap: 14px;
              flex-wrap: wrap;
              justify-content: center;
              text-align: center;
            }

            .envelope-text {
              text-align: center;
            }

            .envelope-title {
              font-size: 12px;
              letter-spacing: 4px;
            }

            .envelope-subtitle {
              font-size: 16px;
            }

            .envelope-seal {
              display: none;
            }

            .letter {
              top: 12px;
              left: 18px;
              width: calc(100% - 36px);
              height: calc(100% - 24px);
            }

            .letter.slide-out {
              transform: translateY(-75px) scale(1);
            }

            @keyframes letterReveal {
              0% {
                transform: translateY(-35px) scale(0.85) rotate(-2deg);
                opacity: 0;
              }
              100% {
                transform: translateY(-75px) scale(1) rotate(0deg);
                opacity: 1;
              }
            }

            .letter-front,
            .letter-back {
              padding: 20px 18px;
            }

            .letter-greeting h2 {
              font-size: 18px;
            }

            .letter-invite {
              font-size: 14px;
            }

            .letter-event-details {
              padding: 10px 14px;
            }

            .event-value {
              font-size: 12px;
            }

            .letter-message {
              font-size: 13px;
            }

            .letter-tagline {
              font-size: 15px;
            }

            .controls {
              flex-direction: column;
              align-items: center;
            }

            .open-btn,
            .flip-btn {
              padding: 12px 28px;
              font-size: 13px;
            }

            .particle {
              display: none;
            }

            .corner-decoration {
              width: 40px;
              height: 40px;
            }
          }

          @media (max-width: 380px) {
            .envelope {
              width: 290px;
              height: 210px;
            }

            .envelope-logo img {
              width: 40px;
              height: 40px;
            }

            .envelope-title {
              font-size: 10px;
            }

            .envelope-subtitle {
              font-size: 13px;
            }

            .letter.slide-out {
              transform: translateY(-60px) scale(1);
            }

            @keyframes letterReveal {
              0% {
                transform: translateY(-30px) scale(0.85);
                opacity: 0;
              }
              100% {
                transform: translateY(-60px) scale(1);
                opacity: 1;
              }
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Invitation;
