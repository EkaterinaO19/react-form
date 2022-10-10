import './App.css';
import FormInput from "./components/FormInput";
import React, {useState} from "react";


function App() {
    const [values, setValues] = useState({
        username: '',
        surname:'',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            pattern: `/^[a-zA-Z0-9]+$/`,
            errorMessage: 'Username should be 3-16 characters with no special symbols!',
            label: 'Username',
            required: true,
        },
        {
            id: 2,
            name: 'name',
            type: 'text',
            pattern: `/^[a-zA-Z ]+$/.test( 'John Doe')`,
            errorMessage: 'Surname should be 3-16 characters with no special symbols!',
            placeholder: 'Surname',
            label: 'Surname',
            required: true,

        },
        {
            id: 3,
            name: 'email',
            type: 'text',
            errorMessage: 'Email should be valid!',
            pattern: `(/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(myForm.emailAddr.value))`,
            placeholder: 'Email',
            label: 'Email',
            required: true,
        },
        {
            id: 4,
            name: 'birthday',
            type: 'date',
            errorMessage: 'Email should be valid!',
            placeholder: 'Birthday',
            label: 'Birthday',
            required: true,
        },
        {
            id: 5,
            name: 'password',
            type: 'text',
            errorMessage: 'Password should be 8-20 characters and include 1 letter, 1 number and 1 special character!',
            placeholder: 'Password',
            pattern: `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})`,
            label: 'Password',
            required: true,
        },
        {
            id: 6,
            name: 'confirmPassword',
            type: 'text',
            errorMessage: 'Passwords don`t match!',
            pattern: values.password,
            placeholder: 'Confirm Password',
            label: 'Confirm Password',
            required: true,
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value})
    }

  return (
    <div className={'app'}>
        <form onSubmit={handleSubmit}>
            <h1>Register Form</h1>
            {inputs.map((input) => (
              <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
              />
          ))}
          <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
}

export default App;
