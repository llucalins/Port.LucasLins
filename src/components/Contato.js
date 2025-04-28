import BlurText from './BlurText';
import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import WhatsAppQRModal from './WhatsAppQRModal';
import './DockContact.css';

const contacts = [
  {
    name: 'Email',
    icon: <FaEnvelope size={48} color="#e44d26" />,
    link: 'mailto:Lukasvirginio@gmail.com',
    color: '#e44d26',
    type: 'link',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin size={48} color="#0077b5" />,
    link: 'https://www.linkedin.com/in/lucas-virginio-55311627b/',
    color: '#0077b5',
    type: 'link',
  },
  {
    name: 'GitHub',
    icon: <FaGithub size={48} color="#fff" />,
    link: 'https://github.com/llucalins',
    color: '#fff',
    type: 'link',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp size={48} color="#25d366" />,
    color: '#25d366',
    type: 'whatsapp',
  },
];

const Contato = () => {
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <section id="contato" className="section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '40vh' }}>
      <BlurText text="Contato" delay={80} animateBy="words" direction="top" style={{ fontSize: '4.2rem', fontWeight: 800, marginBottom: '2.5rem' }} />
      <div className="dock-contact">
        {contacts.map((contact, i) => (
          contact.type === 'whatsapp' ? (
            <button
              key={contact.name}
              className="dock-contact-icon"
              style={{ color: contact.color, position: 'relative', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              onClick={() => setQrOpen(true)}
              aria-label="WhatsApp QR Code"
            >
              {contact.icon}
              <span className="dock-contact-label">{contact.name}</span>
            </button>
          ) : (
            <a
              key={contact.name}
              href={contact.link}
              className="dock-contact-icon"
              style={{ color: contact.color, position: 'relative', textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.icon}
              <span className="dock-contact-label">{contact.name}</span>
            </a>
          )
        ))}
      </div>
      <WhatsAppQRModal open={qrOpen} onClose={() => setQrOpen(false)} />
    </section>
  );
};

export default Contato;
