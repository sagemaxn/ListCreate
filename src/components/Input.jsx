import handleInput from "../utils/handleInput";

//if app grows in scope we can
const Input = ({ name, setName, error, setError }) => {
  const onChange = (e) => handleInput(e, setName, setError);

  return (
    <div className="input-group">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={onChange}
        className="name-input"
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;
