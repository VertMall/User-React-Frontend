import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Invitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>VertMall — Grand Launch</title>
        <meta
          name="description"
          content="You are invited to the official launch of VertMall."
        />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={`invitation ${isOpen ? 'is-open' : ''}`}>
        {/* Background */}
        <div className="background">
          <div className="background-glow" />
          <div className="background-line line-one" />
          <div className="background-line line-two" />
        </div>

        {/* Brand mark */}
        <header className="brand">
          <Image
            src="/logo.png"
            alt="VertMall"
            width={46}
            height={46}
            priority
          />
          <span>VERTMALL</span>
        </header>

        {/* Opening state */}
        <section className={`opening ${isOpen ? 'hidden' : ''}`}>
          <div className="opening-inner">
            <span className="eyebrow">A SPECIAL INVITATION</span>

            <div className="envelope">
              <div className="envelope-paper">
                <div className="paper-top">
                  <Image
                    src="/logo.png"
                    alt="VertMall"
                    width={58}
                    height={58}
                  />
                </div>

                <div className="paper-content">
                  <span>VERTMALL</span>
                  <strong>GRAND LAUNCH</strong>
                </div>

                <div className="paper-bottom">
                  <span>31.08.26</span>
                </div>
              </div>
            </div>

            <button
              className="open-button"
              onClick={() => setIsOpen(true)}
            >
              <span>OPEN INVITATION</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </section>

        {/* Main invitation */}
        <section className={`invitation-stage ${isOpen ? 'visible' : ''}`}>
          <div className="card-wrapper">
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>

              {/* FRONT */}
              <article className="card-face card-front">
                <div className="card-top">
                  <div className="card-brand">
                    <Image
                      src="/logo.png"
                      alt="VertMall"
                      width={48}
                      height={48}
                    />
                    <span>VERTMALL</span>
                  </div>

                  <span className="edition">
                    01 / 01
                  </span>
                </div>

                <div className="hero-content">
                  <span className="eyebrow gold">
                    YOU ARE CORDIALLY INVITED
                  </span>

                  <h1>
                    The beginning
                    <br />
                    of something
                    <br />
                    <em>new.</em>
                  </h1>

                  <div className="hero-rule" />

                  <p className="intro">
                    Join us as we officially unveil
                    <strong> VertMall</strong> — a new way
                    to shop, connect, and experience
                    convenience in Umuahia.
                  </p>
                </div>

                <div className="details">
                  <div className="detail">
                    <span className="detail-label">DATE</span>
                    <span className="detail-value">
                      Monday, 31st August 2026
                    </span>
                  </div>

                  <div className="detail">
                    <span className="detail-label">TIME</span>
                    <span className="detail-value">
                      10:00 AM — 10:45 AM
                    </span>
                  </div>

                  <div className="detail">
                    <span className="detail-label">VENUE</span>
                    <span className="detail-value">
                      Umuahia
                    </span>
                  </div>
                </div>

                <div className="card-footer">
                  <span>The VertMall Xperience…</span>

                  <button
                    onClick={() => setIsFlipped(true)}
                    className="flip-button"
                  >
                    <span>MORE</span>
                    <span>→</span>
                  </button>
                </div>
              </article>

              {/* BACK */}
              <article className="card-face card-back">
                <div className="back-content">
                  <div className="back-logo">
                    <Image
                      src="/logo.png"
                      alt="VertMall"
                      width={70}
                      height={70}
                    />
                  </div>

                  <span className="eyebrow gold">
                    VERTMALL
                  </span>

                  <h2>
                    We look forward
                    <br />
                    to welcoming you.
                  </h2>

                  <div className="back-rule" />

                  <p>
                    A new way to shop, connect,
                    and experience convenience.
                  </p>

                  <div className="contact">
                    <span>FOR QUESTIONS</span>
                    <a href="mailto:support@thevertmall.com">
                      support@thevertmall.com
                    </a>
                  </div>
                </div>

                <div className="back-footer">
                  <span>VERTMALL</span>

                  <button
                    onClick={() => setIsFlipped(false)}
                    className="flip-button"
                  >
                    <span>←</span>
                    <span>BACK</span>
                  </button>
                </div>
              </article>

            </div>
          </div>
        </section>

        <footer className="page-footer">
          <span>VERTMALL</span>
          <span>THE FUTURE OF CONVENIENCE</span>
        </footer>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .invitation {
          min-height: 100vh;
          width: 100%;
          background: #0c1d13;
          color: #f4f0e8;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .background {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .background-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: rgba(50, 105, 67, 0.15);
          filter: blur(100px);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .background-line {
          position: absolute;
          height: 1px;
          width: 42vw;
          background: rgba(201, 168, 76, 0.13);
        }

        .line-one {
          top: 18%;
          left: -10%;
          transform: rotate(-18deg);
        }

        .line-two {
          bottom: 17%;
          right: -10%;
          transform: rotate(-18deg);
        }

        .brand {
          position: absolute;
          top: 38px;
          left: 42px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 20;
        }

        .brand img {
          border-radius: 50%;
        }

        .brand span {
          font-size: 11px;
          letter-spacing: 4px;
          font-weight: 500;
        }

        .opening {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition:
            opacity 0.8s ease,
            visibility 0.8s ease,
            transform 0.8s ease;
        }

        .opening.hidden {
          opacity: 0;
          visibility: hidden;
          transform: scale(1.04);
          pointer-events: none;
        }

        .opening-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .eyebrow {
          font-size: 10px;
          letter-spacing: 4px;
          font-weight: 500;
          color: rgba(244, 240, 232, 0.55);
        }

        .gold {
          color: #c9a84c;
        }

        .envelope {
          width: 420px;
          height: 280px;
          margin: 28px 0 35px;
          padding: 14px;
          border: 1px solid rgba(201, 168, 76, 0.25);
          background: rgba(244, 240, 232, 0.035);
        }

        .envelope-paper {
          height: 100%;
          width: 100%;
          background: #f4f0e8;
          color: #173522;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px;
          box-shadow: 0 35px 90px rgba(0, 0, 0, 0.35);
        }

        .paper-top {
          display: flex;
          justify-content: center;
        }

        .paper-top img {
          border-radius: 50%;
        }

        .paper-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .paper-content span {
          font-size: 10px;
          letter-spacing: 5px;
        }

        .paper-content strong {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          font-weight: 500;
          letter-spacing: -0.5px;
        }

        .paper-bottom {
          display: flex;
          justify-content: flex-end;
          font-size: 10px;
          letter-spacing: 3px;
          color: #806f42;
        }

        .open-button {
          background: none;
          border: none;
          border-bottom: 1px solid rgba(201, 168, 76, 0.6);
          padding: 0 0 10px;
          color: #f4f0e8;
          font-size: 10px;
          letter-spacing: 3px;
          cursor: pointer;
          display: flex;
          gap: 20px;
          align-items: center;
          transition: gap 0.3s ease;
        }

        .open-button:hover {
          gap: 30px;
        }

        .arrow {
          color: #c9a84c;
          font-size: 17px;
        }

        .invitation-stage {
          position: relative;
          z-index: 5;
          opacity: 0;
          transform: translateY(25px);
          pointer-events: none;
          transition:
            opacity 1s ease 0.3s,
            transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
        }

        .invitation-stage.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .card-wrapper {
          width: min(850px, calc(100vw - 50px));
          height: min(610px, calc(100vh - 120px));
          perspective: 1800px;
        }

        .card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.9s cubic-bezier(0.2, 0.75, 0.25, 1);
        }

        .card.flipped {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .card-front {
          background: #f4f0e8;
          color: #193723;
          padding: 45px 55px;
          display: flex;
          flex-direction: column;
          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(201, 168, 76, 0.12);
        }

        .card-front::before {
          content: '';
          position: absolute;
          inset: 13px;
          border: 1px solid rgba(25, 55, 35, 0.13);
          pointer-events: none;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .card-brand img {
          border-radius: 50%;
        }

        .card-brand span {
          font-size: 10px;
          letter-spacing: 4px;
          font-weight: 600;
        }

        .edition {
          font-size: 9px;
          letter-spacing: 2px;
          color: rgba(25, 55, 35, 0.45);
        }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 650px;
        }

        .hero-content h1 {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: clamp(44px, 6vw, 72px);
          line-height: 0.98;
          letter-spacing: -2.5px;
          margin: 18px 0 25px;
          color: #173522;
        }

        .hero-content h1 em {
          color: #8e7737;
          font-weight: 400;
        }

        .hero-rule {
          width: 55px;
          height: 1px;
          background: #c9a84c;
          margin-bottom: 22px;
        }

        .intro {
          max-width: 450px;
          font-size: 13px;
          line-height: 1.8;
          color: rgba(25, 55, 35, 0.72);
          font-weight: 300;
          margin: 0;
        }

        .intro strong {
          color: #173522;
          font-weight: 600;
        }

        .details {
          display: grid;
          grid-template-columns: 1.5fr 1fr 0.7fr;
          border-top: 1px solid rgba(25, 55, 35, 0.15);
          border-bottom: 1px solid rgba(25, 55, 35, 0.15);
          padding: 18px 0;
        }

        .detail {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-right: 20px;
        }

        .detail + .detail {
          padding-left: 25px;
          border-left: 1px solid rgba(25, 55, 35, 0.12);
        }

        .detail-label {
          font-size: 8px;
          letter-spacing: 3px;
          color: #8e7737;
          font-weight: 600;
        }

        .detail-value {
          font-size: 12px;
          color: #173522;
          font-weight: 500;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 18px;
        }

        .card-footer > span {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-style: italic;
          color: #8e7737;
        }

        .flip-button {
          border: none;
          background: none;
          color: #173522;
          font-size: 9px;
          letter-spacing: 3px;
          cursor: pointer;
          display: flex;
          gap: 13px;
          align-items: center;
          padding: 5px 0;
        }

        .flip-button span:last-child {
          color: #8e7737;
        }

        .card-back {
          transform: rotateY(180deg);
          background: #173522;
          color: #f4f0e8;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-back::before {
          content: '';
          position: absolute;
          inset: 13px;
          border: 1px solid rgba(201, 168, 76, 0.22);
        }

        .back-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .back-logo {
          margin-bottom: 20px;
        }

        .back-logo img {
          border-radius: 50%;
        }

        .back-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.1;
          font-weight: 400;
          margin: 20px 0;
        }

        .back-rule {
          width: 45px;
          height: 1px;
          background: #c9a84c;
          margin: 5px 0 22px;
        }

        .back-content p {
          max-width: 330px;
          font-size: 13px;
          line-height: 1.8;
          color: rgba(244, 240, 232, 0.65);
          font-weight: 300;
        }

        .contact {
          margin-top: 45px;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .contact span {
          font-size: 8px;
          letter-spacing: 3px;
          color: #c9a84c;
        }

        .contact a {
          color: #f4f0e8;
          text-decoration: none;
          font-size: 12px;
        }

        .back-footer {
          position: absolute;
          bottom: 35px;
          left: 55px;
          right: 55px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 9px;
          letter-spacing: 3px;
        }

        .back-footer .flip-button {
          color: #f4f0e8;
        }

        .page-footer {
          position: absolute;
          bottom: 30px;
          left: 42px;
          right: 42px;
          display: flex;
          justify-content: space-between;
          color: rgba(244, 240, 232, 0.3);
          font-size: 8px;
          letter-spacing: 3px;
          z-index: 20;
        }

        @media (max-width: 700px) {
          .brand {
            top: 22px;
            left: 22px;
          }

          .brand img {
            width: 34px;
            height: 34px;
          }

          .brand span {
            font-size: 9px;
            letter-spacing: 3px;
          }

          .envelope {
            width: min(350px, calc(100vw - 50px));
            height: 235px;
          }

          .paper-content strong {
            font-size: 24px;
          }

          .card-wrapper {
            width: calc(100vw - 30px);
            height: calc(100vh - 100px);
            max-height: 700px;
          }

          .card-front {
            padding: 35px 28px;
          }

          .card-front::before,
          .card-back::before {
            inset: 8px;
          }

          .hero-content h1 {
            font-size: clamp(39px, 11vw, 58px);
            letter-spacing: -1.8px;
          }

          .details {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .detail {
            padding: 0;
          }

          .detail + .detail {
            padding-left: 0;
            border-left: none;
          }

          .detail-value {
            font-size: 11px;
          }

          .card-footer {
            padding-top: 15px;
          }

          .card-footer > span {
            font-size: 13px;
          }

          .card-back {
            padding: 35px 28px;
          }

          .back-content h2 {
            font-size: 38px;
          }

          .back-footer {
            left: 30px;
            right: 30px;
            bottom: 25px;
          }

          .page-footer {
            display: none;
          }
        }

        @media (max-height: 700px) and (min-width: 701px) {
          .card-wrapper {
            height: calc(100vh - 100px);
          }

          .card-front {
            padding: 30px 45px;
          }

          .hero-content h1 {
            font-size: 52px;
          }

          .details {
            padding: 12px 0;
          }
        }
      `}
      </style>
    </>
  );
};

export default Invitation;
