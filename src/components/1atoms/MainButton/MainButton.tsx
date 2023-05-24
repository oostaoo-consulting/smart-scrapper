import React from 'react';

interface MainButtonProps {
  text: string;
}

function MainButton({ text }: MainButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="text-gray-400 border border-gray-400 px-3 py-2 hover:bg-gray-400 hover:text-white block p-10 mt-5 self-end"
    >
      {text}
    </button>
  );
}
export default MainButton;
