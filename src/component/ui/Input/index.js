

export default function Input(props){
    const {type, name, label, id, disabled, defaultValue, onChange, rows} = props
    return(
        <div className="mb-3">
            {label && <label htmlFor={name} className="">{label}</label>}
            <input className="form-control" rows={rows} onChange={onChange} placeholder={name} type={type} id={id} defaultValue={defaultValue} disabled={disabled}/>
        </div>
    )
}