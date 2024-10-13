const handleSubmit = (e, name, setError, navigate) => {
  e.preventDefault();
  if (!name.trim()) {
    setError("Name cannot be empty");
    return;
  }
  //regex to check if name contains only letters and spaces
  if (!/^[a-zA-Z\s]*$/.test(name)) {
    setError("Name can only contain letters and spaces");
    return;
  }
  const newEntry = { name: name.trim(), timestamp: new Date().toISOString() };
  const storedItems = JSON.parse(localStorage.getItem("listItems") || "[]");
  localStorage.setItem("listItems", JSON.stringify([...storedItems, newEntry]));
  navigate("/main/list");
};

export default handleSubmit;
