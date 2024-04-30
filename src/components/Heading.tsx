import React from 'react';

interface Props {
  text: string;
}

const Header: React.FC<Props> = ({ text }) => {
  return (
    <h1 className="mb-4 text-4xl font-extrabold">
      {text}
    </h1>
  );
};

export default Header;
