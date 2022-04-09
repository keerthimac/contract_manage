function FromSelect({ data, onChange }) {
  return (
    <div>
      <select name='sub_type' onChange={onChange}>
        {data.map((item) => (
          <option key={item.id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
FromSelect.defaultProps = {
  data: [
    { id: 1, value: "Hello", label: "Hello" },
    { id: 2, value: "goodf", label: "asdfasdf" },
    { id: 3, value: "Hasdfasdfasdf", label: "ilrugweroyuigv" },
  ],
};
export default FromSelect;