import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="d-flex flex-column mt-5 ml-5">
      <p className="mb-5">404 Not Found</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default ErrorPage;
