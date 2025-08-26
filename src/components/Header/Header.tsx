import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  const handleRegister = () => {
    console.log('Кнопка регистрации нажата');
  };

  return (
    <header>
      <div className="logo">
        <h1>PetSite</h1>
      </div>
      <div className="auth">
        <button onClick={handleRegister}>
          Регистрация
        </button>
      </div>
    </header>
  );
};

export default Header;
