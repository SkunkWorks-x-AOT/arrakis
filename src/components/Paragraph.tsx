
import React from 'react';

interface Props {
  text: string;
}

const Paragraph: React.FC<Props> = ({ text }) => {
  return (
    <h1 className="mb-3 text-gray-500">
      {text}
    </h1>
  );
};

export default Paragraph;
