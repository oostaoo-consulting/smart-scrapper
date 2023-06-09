import React from 'react';

interface MainButtonProps {
  text: string,
  handleSaveSearchClick: () => void
  disabledButton: boolean
}

function MainButton({
  text,
  handleSaveSearchClick,
  disabledButton,
}: MainButtonProps): JSX.Element {
  const handleClick = (): void => {
    handleSaveSearchClick();
  };

  return (
    <button
      disabled={disabledButton}
      type="button"
      className={disabledButton ? 'text-neutral-200 border-neutral-400 px-3 py-2 block p-10 mt-5 self-end' : 'text-gray-400 border border-gray-400 px-3 py-2 hover:bg-gray-400 hover:text-white block p-10 mt-5 self-end'}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
export default MainButton;
