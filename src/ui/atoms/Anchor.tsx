interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  target?: string
}

export const Anchor = ({ target, className = '', ...props }: AnchorProps) => {
  return (
    <span
      id={target}
      className={`
        block
        absolute inset-x-0
        top-0
        ${className}
      `}
      {...props}
    />
  )
}
