import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
};

function Button({ children, disabled, className, onClick }: ButtonProps) {
  return (
    <button
      className={`hover:gray-400 hover:text-darkest dark:border-dark dark:bg-dark dark:hover:border-dark dark:hover:bg-darkest dark:hover:text-light cursor-pointer rounded-full border-2 border-gray-200 bg-gray-200 px-9 py-5 text-3xl font-medium transition-all duration-200 hover:border-gray-300 hover:bg-gray-300 disabled:cursor-default ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
