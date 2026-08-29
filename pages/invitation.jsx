import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Invitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => setIsOpen(true);
  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <>
      <Head>
        <title>VertMall Grand Launch</title>
        <meta
          name="description"
          content="You are invited to witness the official launch of VertMall. Monday, 31st August 2026, 10:00 AM — 10:45 AM, Umuahia."
        />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container">
        <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`}>
          {/* Envelope */}
          <div className="envelope">
            <div className="envelope-front">
              <div className="envelope-flap"></div>
              <div className="envelope-body">
                <div className="envelope-content">
                  <div className="envelope-logo">
                    <Image src="/logo.png" alt="VertMall" width={56} height={56} />
                  </div>
                  <div className="envelope-text">
                    <span className="envelope-label">Invitation</span>
                    <span className="envelope-title">VertMall</span>
                  </div>
                  <div className="envelope-accent"></div>
                </div>
              </div>
            </div>

            {/* Letter */}
            <div className={`letter ${isOpen ? 'reveal' : ''}`}>
              <div className={`letter-inner ${isFlipped ? 'flipped' : ''}`}>
                {/* Front */}
                <div className="letter-front">
                  <div className="letter-content-front">
                    <div className="letter-header">
                      <span className="letter-brand">VertMall</span>
                      <span className="letter-rule"></span>
                      <span className="letter-event">Grand Launch</span>
                    </div>

                    <h1 className="letter-headline">
                      You are invited<br />
                      to witness the<br />
                      official launch
                    </h1>

                    <div className="letter-details">
                      <div className="detail-block">
                        <span className="detail-label">Date</span>
                        <span className="detail-value">Monday, 31st August 2026</span>
                      </div>
                      <div className="detail-block">
                        <span className="detail-label">Time</span>
                        <span className="detail-value">10:00 AM — 10:45 AM</span>
                      </div>
                      <div className="detail-block">
                        <span className="detail-label">Venue</span>
                        <span className="detail-value">Umuahia</span>
                      </div>
                    </div>

                    <div className="letter-divider"></div>

                    <p className="letter-body">
                      Join us as we unveil a new way to shop, connect,<br />
                      and experience convenience in Umuahia.
                    </p>

                    <p className="letter-body-secondary">
                      We would be honored to have you experience<br />
                      VertMall firsthand.
                    </p>

                    <div className="letter-footer">
                      <span className="letter-tagline">The VertMall Xperience….</span>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="letter-back">
                  <div className="letter-content-back">
                    <div className="back-logo">
                      <Image src="/logo.png" alt="VertMall" width={64} height={64} />
                    </div>

                    <h3 className="back-headline">We Look Forward<br />to Welcoming You</h3>

                    <p className="back-body">
                      VertMall is redefining the shopping experience<br />
                      in Umuahia and beyond.
                    </p>

                    <div className="back-divider"></div>

                    <div className="back-contact">
                      <span className="back-contact-label">For questions</span>
                      <a href="mailto:support@thevertmall.com" className="back-contact-email">
                        support@thevertmall.com
                      </a>
                    </div>

                    <div className="back-brand">VertMall</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="controls">
            {!isOpen ? (
              <button className="btn-open" onClick={handleOpen}>
                <span className="btn-label">Open Invitation</span>
                <span className="btn-arrow">→</span>
              </button>
            ) : (
              <button className="btn-flip" onClick={handleFlip}>
                {isFlipped ? 'Front' : 'Back'}
                <span className="btn-flip-icon">⟳</span>
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

          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: #0d1f12;
            font-family: 'Inter', -apple-system, sans-serif;
            padding: 24px;
            position: relative;
          }

          .envelope-wrapper {
            perspective: 1400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 32px;
            width: 100%;
            max-width: 520px;
          }

          /* Envelope */
          .envelope {
            position: relative;
            width: 100%;
            aspect-ratio: 1.45 / 1;
            transform-style: preserve-3d;
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .envelope-front {
            position: absolute;
            inset: 0;
            background: #f7f3ed;
            border-radius: 4px;
            box-shadow: 0 16px 64px rgba(0, 0, 0, 0.35);
            overflow: hidden;
            z-index: 2;
            backface-visibility: hidden;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .envelope-flap {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50%;
            background: #f0e9e0;
            clip-path: polygon(0 0, 100% 0, 50% 100%);
            border-bottom: 1px solid rgba(0, 0, 0, 0.04);
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
            padding: 20px 32px;
            display: flex;
            align-items: center;
            background: #f7f3ed;
            border-top: 1px solid rgba(0, 0, 0, 0.04);
          }

          .envelope-content {
            display: flex;
            align-items: center;
            gap: 20px;
            width: 100%;
          }

          .envelope-logo {
            flex-shrink: 0;
          }

          .envelope-logo img {
            border-radius: 50%;
            opacity: 0.9;
          }

          .envelope-text {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .envelope-label {
            font-size: 10px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #8a7a6a;
            font-weight: 400;
          }

          .envelope-title {
            font-family: 'Playfair Display', serif;
            font-size: 22px;
            font-weight: 600;
            color: #1a3a2a;
            letter-spacing: 1px;
          }

          .envelope-accent {
            margin-left: auto;
            width: 28px;
            height: 28px;
            border: 1px solid rgba(201, 168, 76, 0.25);
            border-radius: 50%;
            position: relative;
          }

          .envelope-accent::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            background: rgba(201, 168, 76, 0.3);
            border-radius: 50%;
          }

          /* Letter */
          .letter {
            position: absolute;
            top: 16px;
            left: 24px;
            right: 24px;
            bottom: 16px;
            background: #fcfaf7;
            border-radius: 3px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
            transform: translateY(0) scale(0.94);
            transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1;
            overflow: hidden;
            transform-origin: bottom center;
            opacity: 0;
            pointer-events: none;
            border: 1px solid rgba(0, 0, 0, 0.04);
          }

          .letter.reveal {
            transform: translateY(-48px) scale(1);
            opacity: 1;
            pointer-events: all;
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
            z-index: 5;
            transition-delay: 0.1s;
          }

          .letter-inner {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .letter-inner.flipped {
            transform: rotateY(180deg);
          }

          .letter-front,
          .letter-back {
            position: absolute;
            inset: 0;
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            padding: 28px 32px;
            overflow-y: auto;
          }

          .letter-front {
            background: #fcfaf7;
          }

          .letter-back {
            background: #f7f3ed;
            transform: rotateY(180deg);
            justify-content: center;
            align-items: center;
          }

          .letter-content-front {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            max-width: 420px;
            margin: 0 auto;
            width: 100%;
          }

          .letter-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 18px;
          }

          .letter-brand {
            font-size: 10px;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #1a3a2a;
            font-weight: 500;
          }

          .letter-rule {
            flex: 1;
            height: 1px;
            background: rgba(201, 168, 76, 0.2);
            max-width: 40px;
          }

          .letter-event {
            font-size: 9px;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #8a7a6a;
            font-weight: 400;
          }

          .letter-headline {
            font-family: 'Playfair Display', serif;
            font-size: 32px;
            font-weight: 600;
            color: #0d1f12;
            line-height: 1.2;
            margin: 0 0 20px 0;
            letter-spacing: -0.5px;
          }

          .letter-details {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 16px;
            padding: 16px 0;
            border-top: 1px solid rgba(0, 0, 0, 0.04);
            border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          }

          .detail-block {
            display: flex;
            align-items: baseline;
            gap: 20px;
          }

          .detail-label {
            font-size: 9px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #8a7a6a;
            font-weight: 500;
            min-width: 48px;
          }

          .detail-value {
            font-size: 14px;
            color: #1a3a2a;
            font-weight: 400;
          }

          .letter-divider {
            width: 32px;
            height: 1px;
            background: rgba(201, 168, 76, 0.25);
            margin: 4px 0 12px 0;
          }

          .letter-body {
            font-size: 14px;
            line-height: 1.7;
            color: #2d3d3a;
            font-weight: 300;
            margin: 0 0 6px 0;
          }

          .letter-body-secondary {
            font-size: 14px;
            line-height: 1.7;
            color: #2d3d3a;
            font-weight: 300;
            margin: 0 0 16px 0;
          }

          .letter-footer {
            margin-top: auto;
            padding-top: 12px;
            border-top: 1px solid rgba(0, 0, 0, 0.04);
          }

          .letter-tagline {
            font-family: 'Playfair Display', serif;
            font-size: 15px;
            font-style: italic;
            color: #c9a84c;
            letter-spacing: 0.5px;
          }

          /* Back */
          .letter-content-back {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 320px;
          }

          .back-logo {
            margin-bottom: 16px;
          }

          .back-logo img {
            border-radius: 50%;
            opacity: 0.85;
          }

          .back-headline {
            font-family: 'Playfair Display', serif;
            font-size: 22px;
            font-weight: 600;
            color: #0d1f12;
            line-height: 1.3;
            margin: 0 0 12px 0;
          }

          .back-body {
            font-size: 14px;
            line-height: 1.7;
            color: #2d3d3a;
            font-weight: 300;
            margin: 0 0 16px 0;
          }

          .back-divider {
            width: 32px;
            height: 1px;
            background: rgba(201, 168, 76, 0.2);
            margin: 4px 0 16px 0;
          }

          .back-contact {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 20px;
          }

          .back-contact-label {
            font-size: 9px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #8a7a6a;
            font-weight: 400;
          }

          .back-contact-email {
            font-size: 14px;
            color: #1a3a2a;
            text-decoration: none;
            font-weight: 400;
            transition: color 0.3s ease;
          }

          .back-contact-email:hover {
            color: #c9a84c;
          }

          .back-brand {
            font-size: 10px;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: #1a3a2a;
            font-weight: 500;
            opacity: 0.3;
            margin-top: 4px;
          }

          /* Controls */
          .controls {
            display: flex;
            gap: 16px;
            margin-top: 4px;
          }

          .btn-open,
          .btn-flip {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 28px;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: rgba(255, 255, 255, 0.7);
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.4s ease;
            border-radius: 2px;
            font-weight: 400;
          }

          .btn-open:hover,
          .btn-flip:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: rgba(255, 255, 255, 0.2);
            color: #ffffff;
          }

          .btn-arrow {
            font-size: 16px;
            transition: transform 0.4s ease;
            display: inline-block;
          }

          .btn-open:hover .btn-arrow {
            transform: translateX(4px);
          }

          .btn-label {
            font-weight: 300;
          }

          .btn-flip-icon {
            font-size: 16px;
            opacity: 0.5;
            transition: transform 0.6s ease;
            display: inline-block;
          }

          .btn-flip:hover .btn-flip-icon {
            transform: rotate(180deg);
          }

          /* Responsive */
          @media (max-width: 600px) {
            .envelope-wrapper {
              max-width: 400px;
            }

            .envelope-body {
              padding: 16px 20px;
            }

            .envelope-content {
              gap: 14px;
            }

            .envelope-title {
              font-size: 18px;
            }

            .envelope-logo img {
              width: 40px;
              height: 40px;
            }

            .envelope-accent {
              width: 22px;
              height: 22px;
            }

            .envelope-accent::after {
              width: 6px;
              height: 6px;
            }

            .letter {
              top: 12px;
              left: 16px;
              right: 16px;
              bottom: 12px;
            }

            .letter.reveal {
              transform: translateY(-32px) scale(1);
            }

            .letter-front,
            .letter-back {
              padding: 20px 18px;
            }

            .letter-content-front {
              max-width: 100%;
            }

            .letter-headline {
              font-size: 24px;
            }

            .letter-details {
              gap: 6px;
              padding: 12px 0;
            }

            .detail-block {
              flex-direction: column;
              gap: 2px;
            }

            .detail-label {
              min-width: auto;
              font-size: 8px;
            }

            .detail-value {
              font-size: 13px;
            }

            .letter-body,
            .letter-body-secondary {
              font-size: 13px;
            }

            .letter-tagline {
              font-size: 14px;
            }

            .back-headline {
              font-size: 19px;
            }

            .back-body {
              font-size: 13px;
            }

            .btn-open,
            .btn-flip {
              padding: 10px 20px;
              font-size: 10px;
              letter-spacing: 1.2px;
            }
          }

          @media (max-width: 420px) {
            .envelope-wrapper {
              max-width: 320px;
            }

            .container {
              padding: 16px;
            }

            .envelope-body {
              padding: 12px 16px;
            }

            .envelope-content {
              gap: 10px;
            }

            .envelope-title {
              font-size: 15px;
            }

            .envelope-label {
              font-size: 8px;
              letter-spacing: 2px;
            }

            .envelope-logo img {
              width: 32px;
              height: 32px;
            }

            .envelope-accent {
              width: 18px;
              height: 18px;
            }

            .envelope-accent::after {
              width: 4px;
              height: 4px;
            }

            .letter {
              top: 8px;
              left: 12px;
              right: 12px;
              bottom: 8px;
            }

            .letter.reveal {
              transform: translateY(-24px) scale(1);
            }

            .letter-front,
            .letter-back {
              padding: 16px 14px;
            }

            .letter-headline {
              font-size: 20px;
              margin-bottom: 14px;
            }

            .letter-header {
              margin-bottom: 14px;
              gap: 8px;
            }

            .letter-brand {
              font-size: 8px;
              letter-spacing: 3px;
            }

            .letter-event {
              font-size: 7px;
              letter-spacing: 2px;
            }

            .detail-value {
              font-size: 12px;
            }

            .letter-body,
            .letter-body-secondary {
              font-size: 12px;
            }

            .back-headline {
              font-size: 17px;
            }

            .btn-open,
            .btn-flip {
              padding: 8px 16px;
              font-size: 9px;
              gap: 8px;
            }
          }

          @media (min-width: 1200px) {
            .envelope-wrapper {
              max-width: 560px;
            }

            .letter-headline {
              font-size: 38px;
            }

            .letter-body,
            .letter-body-secondary {
              font-size: 15px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Invitation;
