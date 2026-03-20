

const FormGroup = ({ label, type = 'text', placeholder, value, onChange }) => {
    return (
        <div className="field">
            <label className="field__label">{label}</label>
            <input
                value={value}
                onChange={onChange}
                className="field__input" type={type} placeholder={placeholder} />
        </div>
    )
}

export default FormGroup
