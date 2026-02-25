import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/contact.scss';

export default function Contact() {
  const handleMailClick = () => {
    alert('Mesaj atabilirsiniz : buyukbasece@gmail.com ');
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <p>If you want to reach me, feel free to send a message.</p>

      <div className="contact-actions">
        <a
          className="contact-btn"
          onClick={handleMailClick}
        >
          <FaEnvelope />
          Send Email
        </a>

        <a
          href="https://www.linkedin.com/in/ece-b%C3%BCy%C3%BCkba%C5%9F-a56baa222/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn linkedin"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
