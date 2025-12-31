import { useState } from "react";
import { Rocket, ExternalLink, FileText, X, Play } from "lucide-react";
import startupVideo from "../assets/Start-up.mp4";

export default function Startup() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };
  return (
    <section id="startup" className="section-padding">
      <div className="container">
        <div className="startup-card">
          <div className="icon-wrapper">
            <Rocket color="#b06d48" size={28} />
          </div>

          <h2 className="card-title">My Startup Idea</h2>

          <p className="card-text">
            I'm working on something exciting — a service that aims to solve
            'Disconnect Problem' in offline retail: Shoppers struggles to know
            what pairs together, and offline retail stores don't have the digital tools to show
            them.
          </p>
          <p className="card-text">
            While e-commerce uses algorithms to drive sales, there is no such tools in
            offline retail. Shoppers suffer from decision fatigue trying to find
            matching outfits in aisles of store, while retailers lose revenue on
            missed cross-selling opportunities and dead inventory not moving.
          </p>
          <div className="card-actions">
            <button onClick={openVideo} className="btn-primary">
              App Video <Play size={16} fill="white" />
            </button>
            <a
              href="https://find-it-z0wif0j.gamma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <FileText size={16} /> View Pitch Deck
            </a>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="video-modal" onClick={closeVideo}>
          <div
            className="modal-content-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeVideo}>
              <X size={24} />
            </button>

            {/* Video content area */}
            <div className="video-content-area">
              <div className="phone-frame">
                <div className="screen-content">
                  <video controls className="startup-video">
                    <source src={startupVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Mobile: Steps below video */}
              <div className="mobile-steps">
                <h3 className="steps-title">How it works:</h3>
                <ul className="steps-list">
                  <li>
                    <span className="step-number">1</span> Customer enters the
                    store
                  </li>
                  <li>
                    <span className="step-number">2</span> Select a T-Shirt to
                    make outfit
                  </li>
                  <li>
                    <span className="step-number">3</span> Scan selected T-Shirt
                  </li>
                  <li>
                    <span className="step-number">4</span> Boom! Complete Styled
                    Outfit recommended.
                  </li>
                </ul>
                <h3 className="steps-title">
                  Fun Shopping! No wandering in store here and there
                </h3>
              </div>
            </div>

            {/* Desktop: Right steps */}
            <div className="steps-wrapper desktop-only">
              <h3 className="steps-title">How it works:</h3>
              <ul className="steps-list">
                <li>
                  <span className="step-number">1</span> Customer enters the
                  store
                </li>
                <li>
                  <span className="step-number">2</span> Select a T-Shirt to
                  make outfit
                </li>
                <li>
                  <span className="step-number">3</span> Scan selected T-Shirt
                </li>
                <li>
                  <span className="step-number">4</span> Boom! Complete Styled
                  Outfit recommended.
                </li>
              </ul>
              <h3 className="steps-title">
                Fun Shopping! No wandering in store here and there
              </h3>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .section-padding {
          padding: 4rem 0 6rem;
        }
        .startup-card {
          background-color: var(--color-card-bg);
          border-radius: 24px;
          padding: 4rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 900px;
          margin: 0 auto;
        }
        .icon-wrapper {
          background-color: rgba(176, 109, 72, 0.1);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .card-title {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          color: #2a2a2a;
        }
        .card-text {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 2.5rem;
        }
        .card-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .btn-primary {
          background-color: var(--color-accent);
          color: white;
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: background 0.3s ease;
        }
        .btn-primary:hover {
          background-color: #9a5e3d; /* Darker shade of accent */
        }
        .btn-outline {
          background-color: white;
          color: #333;
          border: 1px solid transparent; /* Or specific border if needed */
          padding: 0.8rem 1.8rem;
          border-radius: 8px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .btn-outline:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.08);
        }

        /* Modal Styles */
        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.85); /* Slightly lighter overlay */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 1rem;
          animation: fadeIn 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .modal-content-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: auto;
          height: 90vh; /* Max height for the phone */
        }

        .video-content-area {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mobile-steps {
          display: none; /* Hidden on desktop */
        }

        .close-btn {
          position: absolute;
          top: 0;
          right: -60px; /* Position closely outside the phone */
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s;
        }
        .close-btn:hover {
          background: rgba(255, 255, 255, 0.4);
          transform: scale(1.1);
        }

        .phone-frame {
          position: relative;
          width: 280px; /* Reduced width */
          height: 600px; /* Reduced height */
          background: #1a1a1a;
          border-radius: 40px;
          border: 10px solid #2d2d2d;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          background-clip: padding-box;
          margin: 2rem;
        }

        .screen-content {
          width: 100%;
          height: 100%;
          background: #000;
          overflow: hidden;
          border-radius: 30px; /* Matched to inner border radius */
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .startup-video {
          width: 98%;
          height: 100%;
          object-fit: cover; /* Cover effectively fills the phone screen */
          margin: 0 auto;
        }

        @media (max-width: 480px) {
           .modal-content-wrapper {
              width: 100%;
              height: 100%;
              padding: 1rem;
              flex-direction: column;
              overflow-y: auto;
           }
           .video-content-area {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
           }
           .phone-frame {
              width: 260px;
              height: 560px;
              border: 8px solid #2d2d2d;
              border-radius: 36px;
              background: #1a1a1a;
              margin: 0 auto 1rem auto;
              box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
              flex-shrink: 0;
           }
           .screen-content {
              border-radius: 28px;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
           }
           .startup-video {
              width: 98%;
              height: 100%;
              object-fit: cover;
              border-radius: 28px;
              margin: 0 auto;
           }
           .close-btn {
             position: fixed;
             top: 20px;
             right: 20px;
             z-index: 100;
           }
           .desktop-only {
             display: none !important;
           }
           .mobile-steps {
             display: block;
             width: 100%;
             text-align: left;
             padding: 0 1rem;
             color: white;
           }
           .mobile-steps .steps-title {
             font-size: 1.3rem;
             margin-bottom: 1rem;
             color: var(--color-accent);
           }
           .mobile-steps .steps-list {
             color: white;
           }
           .mobile-steps .steps-list li {
             font-size: 1rem;
             margin-bottom: 0.8rem;
             color: white;
           }
        }
        
        .annotation-wrapper {
          position: absolute;
          left: -220px;
          top: 100px;
          width: 200px;
          color: white;
          opacity: 0;
          animation: fadeIn 0.5s ease 0.5s forwards;
        }

        .annotation-text {
          font-family: 'Handlee', cursive, sans-serif; /* Fallback to sans-serif if font not loaded */
          font-size: 1.1rem;
          line-height: 1.4;
          margin-bottom: 10px;
          position: relative;
        }
        
        .highlight {
          color: var(--color-accent);
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        .curly-arrow {
          width: 80px;
          height: 80px;
          transform: rotate(10deg);
          margin-left: 100px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
        }

        .steps-wrapper {
          position: absolute;
          right: -260px;
          top: 80px;
          width: 240px;
          color: white;
          opacity: 0;
          animation: fadeIn 0.5s ease 0.7s forwards;
          text-align: left;
        }

        .steps-title {
          font-family: 'Handlee', cursive, sans-serif;
          font-size: 1.5rem;
          color: var(--color-accent);
          margin-bottom: 1rem;
          transform: rotate(-2deg);
        }

        .steps-list {
          list-style: none;
          padding: 0;
          font-family: 'Handlee', cursive, sans-serif;
        }

        .steps-list li {
          margin-bottom: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 1.05rem;
          line-height: 1.3;
        }

        .step-number {
          background: rgba(255,255,255,0.2);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
          margin-top: 2px;
          font-family: var(--font-sans);
          font-weight: bold;
        }

        @media (max-width: 900px) {
           .annotation-wrapper, .steps-wrapper {
             display: none;
           }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
