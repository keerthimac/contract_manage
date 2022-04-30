// import "./formSelect.css";

function FromSelect({ data, onChange, name, label }) {
  return (
    <div className='formSelect'>
      <label>{label}</label>
      <select name={name} onChange={onChange}>
        <option>Please Select {label}</option>
        {data.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
// FromSelect.defaultProps = {
//   data: [{ id: 1, value: "0", label: "No Options" }],
// };
export default FromSelect;
