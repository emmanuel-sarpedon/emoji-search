const Input = (props) => {
  const { type, placeholder, value, onChange } = props;
  return (
    <div className="Input">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
