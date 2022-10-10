import React, {useState} from 'react';
import '../components/formInput.css';

function FormInput(props) {
    const {label, errorMessage,onChange, id,...inputProps } = props;
    const [focused, setFocused] = useState(false)

    const handleFocus = (e) => {
        setFocused(true)
    };


    return (
        <div className={'formInput'}>
            <label>{props.label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => inputProps.name==="confirmPassword" && setFocused(true)}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
}

export default FormInput;