export default function Button(props){
    const {children, type, className, onClick} = props
    return(
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    )
}