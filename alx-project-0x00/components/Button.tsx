import react from 'react';
import {IButtonProps } from '@/interfaces'; 


const Button: React.FC<IButtonProps> = ({ title, styles }) => { // Removed onClick from destructuring
  return (
    <button
      className={`py-2 px-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150 ease-in-out ${styles}`}
    >
      {title}
    </button>
  );
};

