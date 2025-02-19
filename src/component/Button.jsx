export default function Button({text, className, onClick}){
    return(
        <button type="button" onClick={onClick} className={className}>{text}</button>
    )
}