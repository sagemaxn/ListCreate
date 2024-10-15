import PropTypes from "prop-types";

const CreateForm = ({ name, error, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="create-form">
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          className="name-input"
        />
        {/* display error message if there is one */}
        {error && <p className="error-message">{error}</p>}
      </div>
      <h2 className="name-preview">{name}</h2>
      <button type="submit" className="add-button">
        Add New Entry
      </button>
    </form>
  );
};

CreateForm.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

CreateForm.defaultProps = {
  error: "",
};

export default CreateForm;
