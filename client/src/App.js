import "./App.css";
import { useRef, useState } from "react";
import FromInput from "./components/FormInput";
import SelectInput from "./components/SelectInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const subType = [
    {
      id: 1,
      value: "individual",
      placeholder: "individual",
    },
    {
      id: 2,
      value: "company",
      placeholder: "company",
    },
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
    <div className="app">
      <form onSubmit={onFromSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FromInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <SelectInput data={subType} placeholder={"Sub Type"} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
