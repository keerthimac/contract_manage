import "./subInfo.css";
import { useState } from "react";
import FromInput from "../shared/FormInput";
import FormSelect from "../shared/FormSelect";

function SubInfo() {
  const [values, setValues] = useState({
    username: "",
    sub_type: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const subType = [
    { id: 1, value: "individual", label: "individual" },
    { id: 2, value: "company", label: "company" },
  ];

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be at 3-16 characters and shouldn't include any special character.",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "Email should be valid.",
      label: "Email",
      pattern: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Username should be at least 6 characters long and at least 1 letter, 1 capital letter.",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "password and confirm password should be the same.",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const onFromSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='subInfo'>
      <form onSubmit={onFromSubmit}>
        <h1>Register</h1>
        <FormSelect
          onChange={onChange}
          name={"sub_type"}
          data={subType}
          label={"Sub Type"}
        />
        {inputs.map((input) => (
          <FromInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SubInfo;
