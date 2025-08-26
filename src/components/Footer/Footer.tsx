import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  const handleContacts = () => {
    console.log('Переход на страницу контактов');
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="copyright">
          © 2025 PetSite
        </div>
        <div className="contacts">
          <a href="#contacts" onClick={handleContacts}>
            Контакты
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
