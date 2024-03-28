import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto mt-16 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-5xl">OPPS !!!</h1>
      <h1 className="text-5xl text-center">Page Not Found</h1>
      <button className="btn btn-primary text-3xl">
        <Link to="/">Go back to home </Link>
      </button>
    </div>
  );
};

export default ErrorPage;
