import React from 'react';
import './WhatsAppQRModal.css';
import qrImg from '../fotos/qr.jpeg';

const WhatsAppQRModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="waqr-modal-overlay" onClick={onClose}>
      <div className="waqr-modal-content" onClick={e => e.stopPropagation()}>
        <img src={qrImg} alt="WhatsApp QR Code" style={{ maxWidth: 320, borderRadius: 16, boxShadow: '0 4px 32px #0008' }} />
        <button className="waqr-modal-close" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default WhatsAppQRModal;
