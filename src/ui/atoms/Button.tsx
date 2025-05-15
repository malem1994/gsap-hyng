export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string
  onClick?: () => void
  isDisabled?: boolean
  isLoading?: boolean
  isFullWidth?: boolean
  className?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Button = ({
  label,
  onClick,
  isDisabled,
  isLoading,
  isFullWidth,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}: ButtonProps) => {

  return (
    <button
      className={`flex items-center justify-center gap-2 transition-all
        min-h-8 uppercase text-sm
        ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        ${isLoading ? 'cursor-wait opacity-20' : ''}
        ${isFullWidth ? 'w-full' : ''}
        ${className}
      `}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="flex items-center">
          {icon}
        </span>
      )}
      {isLoading && <span className="loader me-1" />}
      <span>{label}</span>
      {icon && iconPosition === 'right' && (
        <span className="flex items-center">
          {icon}
        </span>
      )}
    </button>
  )
}
