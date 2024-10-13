const handleInput = (e, setName, setError) => {
  const value = e.target.value;
  setName(value);
  if (value && !/^[a-zA-Z\s]*$/.test(value)) {
    setError("Name can only contain letters and spaces");
  } else {
    setError("");
  }
};

export default handleInput;
