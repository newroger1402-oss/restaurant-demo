import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  asChild = false,
}) => {
  const baseClasses = 'transition-colors duration-200 ease-in-out';
  const variantClasses = {
    primary: 'bg-(--color-primary) text-white hover:bg-[rgb(160,115,35)]',
    secondary: 'bg-white text-(--color-primary) hover:bg-(--color-primary)/10',
    outline: 'border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary)/10',
  };
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  };

  const Component = asChild ? 'span' : 'button';

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Component>
  );
};

export default Button;