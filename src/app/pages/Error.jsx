import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>404</h2>
      We cannot find the page you are looking for. Please{" "}
      <Link to="/main/list">click here</Link> to return to the main page.
    </div>
  );
};

export default Error;
