import React from 'react';

interface InputProps {
  name: string;
  title?: string;
  value?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  name,
  title,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <input
      type="text"
      name={name}
      title={title}
      className="px-3 py-1 bg-gray-100 grow"
      placeholder={placeholder || 'Recherche'}
      value={value || ''}
      onChange={onChange}
    />
  );
}
