
type btn={
    type: "submit"| "button" 
    className?: string
    children: JSX.Element | string
    onClick?:()=>void
}

function Button({type,className,children,onClick}:btn) {
  return (
    <div onClick={onClick}>
       <button type={type} className={className}>{children}</button>
    </div>
  )
}

export default Button
