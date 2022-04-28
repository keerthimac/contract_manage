// import "./subInfo.css";
import { useState } from "react";
import FromInput from "../shared/FormInput";
import FormSelect from "../shared/FormSelect";

function SubInfo() {
  const [values, setValues] = useState({
    subName: "",
    subNickName:"",
    subType: "",
    addressLine01: "",
    addressLine02: "",
    addressLine03:"",
    province:"",
    district:""
  });

  const[cities,setCities] = useState()

  const subTypes = [
    { id: 1, value: "individual", label: "individual" },
    { id: 2, value: "company", label: "company" },
  ];

  const inputs = [
    {
      id: 1,
      name: "subName",
      placeholder: "Sub Contractor",
      // errorMessage:
      //   "Username should be at 3-16 characters and shouldn't include any special character.",
      label: "Sub Contractor Name",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "subNickName",
      placeholder: "Sub Contractor Nick Name",
      // errorMessage:
      //   "Username should be at 3-16 characters and shouldn't include any special character.",
      label: "Sub Contractor Nick Name",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "addressLine01",
      placeholder: "Address Line 01",
      // errorMessage:
      //   "Username should be at 3-16 characters and shouldn't include any special character.",
      label: "Address Line 01",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 4,
      name: "addressLine02",
      placeholder: "Address Line 02",
      // errorMessage:
      //   "Username should be at 3-16 characters and shouldn't include any special character.",
      label: "Address Line 02",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 5,
      name: "addressLine03",
      placeholder: "Address Line 03",
      // errorMessage:
      //   "Username should be at 3-16 characters and shouldn't include any special character.",
      label: "Address Line 03",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },


    // {
    //   id: 3,
    //   name: "email",
    //   type: "text",
    //   placeholder: "Email",
    //   errorMessage: "Email should be valid.",
    //   label: "Email",
    //   pattern: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$",
    //   required: true,
    // },
    // {
    //   id: 4,
    //   name: "birthday",
    //   type: "date",
    //   placeholder: "Birthday",
    //   label: "Birthday",
    // },
    // {
    //   id: 5,
    //   name: "password",
    //   type: "password",
    //   placeholder: "Password",
    //   errorMessage:
    //     "Username should be at least 6 characters long and at least 1 letter, 1 capital letter.",
    //   label: "Password",
    //   required: true,
    // },
    // {
    //   id: 6,
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   errorMessage: "password and confirm password should be the same.",
    //   label: "Confirm Password",
    //   pattern: values.password,
    //   required: true,
    // },
  ];

  const provinces = [
    { id: 1, value: "1", label: "Western" },
    { id: 2, value: "Central", label: "Central" },
    { id: 3, value: "Southern", label: "Southern" },
    { id: 4, value: "North Western", label: "North Western" },
    { id: 5, value: "Sabaragamuwa", label: "Sabaragamuwa" },
    { id: 6, value: "Eastern", label: "Eastern" },
    { id: 7, value: "Uva", label: "Uva" },
    { id: 8, value: "North Central", label: "North Central" },
    { id: 9, value: "Northern", label: "Northern" },
  ];

  const district = [
    { id: 1, value: "1", label: "Ampara" },
    { id: 2, value: "2", label: "Anuradhapura" },
    { id: 3, value: "3", label: "Badulla" },
    { id: 4, value: "4", label: "Batticaloa" },
    { id: 5, value: "5", label: "Colombo" },
    { id: 6, value: "6", label: "Galle" },
    { id: 7, value: "7", label: "Gampaha" },
    { id: 8, value: "8", label: "Hambantota" },
    { id: 9, value: "9", label: "Jaffna" },
    { id: 10, value: "10", label: "Kalutara" },
    { id: 11, value: "11", label: "Kandy" },
    { id: 12, value: "12", label: "Kegalle" },
    { id: 13, value: "13", label: "Kilinochchi" },
    { id: 14, value: "14", label: "Kurunegala" },
    { id: 15, value: "15", label: "Mannar" },
    { id: 16, value: "16", label: "Matale" },
    { id: 17, value: "17", label: "Matara" },
    { id: 18, value: "18", label: "Monaragala" },
    { id: 19, value: "19", label: "Mullaitivu" },
    { id: 20, value: "20", label: "Nuwara Eliya" },
    { id: 21, value: "21", label: "Polonnaruwa" },
    { id: 22, value: "22", label: "Puttalam" },
    { id: 23, value: "23", label: "Ratnapura" },
    { id: 24, value: "24", label: "Trincomalee" },
    { id: 25, value: "25", label: "Vavuniya" },
  ];

  const city = [
    { id: 1, value: "individual", label: "individual" },
    { id: 2, value: "company", label: "company" },
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
          name={"subType"}
          data={subTypes}
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
        <FormSelect
          onChange={onChange}
          name={"province"}
          data={provinces}
          label={"Province"}
        />
        <FormSelect
          onChange={onChange}
          name={"district"}
          data={district}
          label={"District"}
        />
        <FormSelect
          onChange={onChange}
          name={"district"}
          data={district}
          label={"District"}
        />
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SubInfo;
