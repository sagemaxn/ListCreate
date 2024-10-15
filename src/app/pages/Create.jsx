import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateForm from "../../components/CreateForm";
import handleSubmit from "../../utils/handleSubmit";
import handleInput from "../../utils/handleInput";

const Create = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => handleSubmit(e, name, setError, navigate);
  const onChange = (e) => handleInput(e, setName, setError);

  return (
    <CreateForm
      name={name}
      setName={setName}
      error={error}
      setError={setError}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

Create.defaultProps = {
  initialName: "",
  initialError: "",
};

export default Create;
