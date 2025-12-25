export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <p>
            I graduated with a Bachelor of Engineering in Computer Science and Engineering, I live at the intersection of technology, creativity, and entrepreneurship. I'm a believer in experiential learning through tinkering.
          </p>
          <p>
            Developed an MVP of my start up idea <a href="https://find-it-ag.onrender.com" target="_blank" rel="noopener noreferrer">FIND IT</a>.
          </p>
        </div>
      </div>

      <style>{`
        .section-padding {
          padding: 6rem 0;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #221e1e;
        }
        .about-content {
          max-width: 700px;
        }
        .about-content p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.7;
        }
        .about-content a {
          color: var(--color-accent);
          text-decoration: underline;
          text-underline-offset: 3px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
