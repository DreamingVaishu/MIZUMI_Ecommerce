import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'new' | 'sale';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const baseStyles = 'inline-block px-2 py-1 text-xs font-medium rounded-md';
  
  const variantStyles = {
    primary: 'bg-indigo-100 text-indigo-800',
    secondary: 'bg-neutral-100 text-neutral-800',
    success: 'bg-green-100 text-green-800',
    new: 'bg-amber-100 text-amber-800',
    sale: 'bg-rose-100 text-rose-800',
  };
  
  const badgeClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
};

export default Badge;