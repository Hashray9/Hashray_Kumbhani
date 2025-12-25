import { ArrowDown } from 'lucide-react';
import profileImg from '../assets/photo.png';

export default function Hero() {
  const scrollToWork = () => {
    const nextSection = document.getElementById('startup');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="container text-center">
        <img src={profileImg} alt="Profile" className="profile-img" />
        <span className="greeting">Hello, I'm</span>
        <h1 className="name">Hashray Kumbhani</h1>
        <p className="hero-text">
          Builder, creator, and entrepreneur passionate about turning ideas into reality.
        </p>

        <div className="cta-container">
          <button onClick={scrollToWork} className="btn-secondary">
            See My Work <ArrowDown size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0;
          background-color: #f2e8d8;
        }
        .profile-img {
          width: 250px;
          height: 250px;
         
          object-fit: cover;
          margin-bottom: 2rem;
          
        }
        .greeting {
          display: block;
          font-size: 1.1rem;
          color: var(--color-text-muted);
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
        }
        .name {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          color: #221e1e;
        }
        .hero-text {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto 3rem;
          font-weight: 400;
        }
        .btn-secondary {
          background: transparent;
          border: 1px solid var(--color-border);
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          color: var(--color-text);
          transition: all 0.2s ease;
        }
        .btn-secondary:hover {
          background: #fff;
          border-color: #d1d1d1;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .name { font-size: 3rem; }
          .hero-text { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
}
