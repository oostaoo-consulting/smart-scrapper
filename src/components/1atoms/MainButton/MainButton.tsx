import React from 'react';

interface MainButtonProps {
  text: string;
}

function MainButton({ text }: MainButtonProps) {
  return (
    <button
      type="button"
      className="text-gray-400 border-2 border-gray-400 px-3 py-2 hover:bg-gray-400 hover:text-white"
    >
      {text}
    </button>
  );
}
export default MainButton;
