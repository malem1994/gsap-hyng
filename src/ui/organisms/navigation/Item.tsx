export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  href?: string
  onClick?: () => void
  isActive?: boolean
}

export const Item = ({
  name,
  href,
  onClick,
  isActive,
  className = '',
  ...props
}: ItemProps) => {
  return (
    <div
      className={`relative text-black font-thin uppercase flex items-center p-2 mx-2 cursor-pointer transition-all group
        ${isActive ? '' : ''} 
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      <a href={href} className="flex items-center w-full" target={`${href ? '_blank' : '_self'}`} rel="noopener noreferrer">
        {name}
      </a>

      <hr className="border-black absolute bottom-0 inset-x-0 w-0 group-hover:w-full transition-all" />
    </div>
  )
}
