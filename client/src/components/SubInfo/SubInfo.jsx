import "./subInfo.css";
import { useState, useEffect } from "react";
import FromInput from "../../shared/formInput/FormInput";
import FormSelect from "../../shared/fromSelect/FormSelect";

function SubInfo() {
  const [values, setValues] = useState({
    subName: "",
    subNickName: "",
    subType: "",
    addressLine01: "",
    addressLine02: "",
    addressLine03: "",
    province: "0",
    district: "0",
    city: "0",
    bankAccountName: "",
    bankAccountNumber: "",
    bank: "0",
    branch: "0",
  });

  const [provinces, setProvinces] = useState([
    { id: 0, value: "0", label: "No Options" },
  ]);
  const [districts, setDistricts] = useState([
    { id: 0, value: "0", label: "No Options" },
  ]);
  const [cities, setCities] = useState([
    { id: 0, value: "0", label: "No Options" },
  ]);

  const [banks, setBanks] = useState([
    { id: 0, value: "0", label: "No Options" },
  ]);

  const [branches, setBranches] = useState([
    { id: 0, value: "0", label: "No Options" },
  ]);

  useEffect(() => {
    getProvinces();
    getDistricts();
    getCities();
    getBanks();
    getBranches();
  }, [values.province, values.district, values.bank]);

  const subTypes = [
    { id: 1, value: "1", label: "individual" },
    { id: 2, value: "2", label: "company" },
  ];

  const subName = [
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

  const subAddress = [
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
  ];

  const subAccount = [
    {
      id: 6,
      name: "bankAccountName",
      placeholder: "Bank Account Name",
      // errorMessage:
      //   "Username should be at 3-16 characters and shouldn't include any special character.",
      label: "Bank Account Name",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 7,
      name: "bankAccountNumber",
      placeholder: "Bank Account Number",
      // errorMessage:
      //   "Username should be at 3-16 characters and shouldn't include any special character.",
      label: "Bank Account Number",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
  ];

  const getProvinces = async () => {
    try {
      const response = await fetch("http://localhost:5000/location/province");
      const data = await response.json();
      const value = data.map((province) => ({
        id: province.province_id,
        value: province.province_id,
        label: province.province_name,
      }));
      // setBankList(data);
      // setBankOption(values);
      setProvinces(value);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getDistricts = async () => {
    try {
      if (values.province === "0") {
        return;
      }
      const code = values.province;
      console.log("district run");
      const response = await fetch(
        `http://localhost:5000/location/district/${code}`
      );
      const data = await response.json();
      const value = data.map((district) => ({
        id: district.district_id,
        value: district.district_id,
        label: district.district_name,
      }));
      setDistricts(value);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCities = async () => {
    try {
      if (values.province === "0" || values.district === "0") {
        return;
      }
      let id = values.district;
      let pro_id = values.province;
      //console.log(code);
      const response = await fetch(
        `http://localhost:5000/location/city/${id}/${pro_id}`
      );

      const data = await response.json();
      const value = data.map((city) => ({
        id: city.city_id,
        value: city.city_id,
        label: city.city_name,
      }));
      setCities(value);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getBanks = async () => {
    try {
      const response = await fetch("http://localhost:5000/banks");
      const data = await response.json();
      const value = data.map((bank) => ({
        id: bank.bank_code,
        value: bank.bank_code,
        label: bank.bank_name_up,
      }));
      setBanks(value);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getBranches = async () => {
    try {
      if (values.bank === "0") {
        return;
      }
      const code = values.bank;
      console.log("branch run");
      const response = await fetch(`http://localhost:5000/banks/${code}`);
      const data = await response.json();
      const value = data.map((branch) => ({
        id: branch.branch_id,
        value: branch.branch_id,
        label: branch.branch_name,
      }));
      setBranches(value);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onFromSubmit = async (e) => {
    e.preventDefault();
    // console.log({ ...values });
    const response1 = await fetch("http://localhost:5000/subContract/subName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    });
    const data = await response1.json();
    console.log(data);
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onFromSubmit}>
      <h1>Register</h1>
      <div className='subContainer'>
        <div className='subName'>
          <FormSelect
            onChange={onChange}
            name={"subType"}
            data={subTypes}
            label={"Sub Type"}
          />
          {subName.map((input) => (
            <FromInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>
        <div className='subAddress'>
          {subAddress.map((input) => (
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
            data={districts}
            label={"District"}
          />
          <FormSelect
            onChange={onChange}
            name={"city"}
            data={cities}
            label={"City"}
          />
        </div>
        <div className='subBank'>
          <div className='subBank'>
            {subAccount.map((input) => (
              <FromInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <FormSelect
              onChange={onChange}
              name={"bank"}
              data={banks}
              label={"Bank"}
            />
            <FormSelect
              onChange={onChange}
              name={"branch"}
              data={branches}
              label={"Branch"}
            />
          </div>
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default SubInfo;
