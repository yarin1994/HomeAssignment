import React from 'react';
import './Header.css';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;