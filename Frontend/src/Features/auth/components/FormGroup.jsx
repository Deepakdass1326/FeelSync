

const FormGroup = ({ label, type = 'text', placeholder }) => {
    return (
        <div className="field">
            <label className="field__label">{label}</label>
            <input className="field__input" type={type} placeholder={placeholder} />
        </div>
    )
}

export default FormGroup
