import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "./Input";
import handleSubmit from "../utils/handleSubmit";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => handleSubmit(e, name, setError, navigate);

  return (
    <div className="create-container">
      <form onSubmit={onSubmit} className="create-form">
        <Input
          name={name}
          setName={setName}
          error={error}
          setError={setError}
        />
        <h2 className="name-preview">{name}</h2>
        <button type="submit" className="add-button">
          Add New Entry
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
