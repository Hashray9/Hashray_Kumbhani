import { Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container text-center">
        <h2 className="footer-title">Let's Connect</h2>
        <p className="footer-text">I'd love to hear from you. Let's build something together.</p>

        <div className="contact-container">
          <div className="contact-card">
            <div className="icon-box">
              <Mail size={22} />
            </div>
            <span className="contact-text">hashraykumbhanivip@gmail.com</span>
          </div>

          <div className="contact-card">
            <div className="icon-box">
              <MessageCircle size={22} />
            </div>
            <span className="contact-text">+91 98981 92203</span>
          </div>
        </div>

        <p className="copyright">Hashray Kumbhani. Built with love.</p>
      </div>

      <style>{`
        .footer-section {
          padding: 6rem 0 4rem;
        }
        .footer-title {
          font-size: 2.2rem;
          margin-bottom: 1rem;
          color: #221e1e;
        }
        .footer-text {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          margin-bottom: 3rem;
        }
        .contact-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap; /* Ensure they wrap on small screens */
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        .contact-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: white;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          border: 1px solid #eee;
          box-shadow: 0 2px 5px rgba(0,0,0,0.03);
        }
        .icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
        }
        .contact-text {
          font-size: 1rem;
          color: #444;
          font-weight: 500;
        }
        .copyright {
          font-size: 0.9rem;
          color: #999;
        }
      `}</style>
    </footer>
  );
}
