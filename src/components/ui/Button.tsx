// src/components/ui/button.tsx
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'tertiary'  // Add variant prop
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, variant = 'primary' }) => {
  // Define different styles based on the 'variant' prop
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    tertiary: 'bg-transparent border border-gray-500 hover:bg-gray-100',
  }

  return (
    <button
      onClick={onClick}
      className={`${variantStyles[variant]} px-6 py-3 rounded-xl text-white ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
