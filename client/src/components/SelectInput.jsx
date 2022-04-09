function SelectInput({ value, data, styleClass, onChange,placeholder }) {
  const handleChange = (e) => {
    console.log(e.target);
  };

  return (
    <div>
      <label>
          {placeholder}
        <select onChange={handleChange}>
          {data.map((item) => {
            <option key={item.id} value={item.value}>
              {item.placeholder}
            </option>;
          })}
        </select>
      </label>
    </div>
  );
}

export default SelectInput;
