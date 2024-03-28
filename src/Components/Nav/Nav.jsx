import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  let location = useLocation();
  location = location.pathname;

  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <button
              className={
                location == "/"
                  ? "text-green-500 border border-green-500 py-2 px-4 rounded-lg"
                  : "text-black border border-white py-2 px-4 rounded-lg"
              }
            >
              <Link to="/">Home</Link>
            </button>
            <button
              className={
                location == "/listedbooks"
                  ? "text-green-500 border border-green-500 py-2 px-4 rounded-lg"
                  : "text-black border border-white py-2 px-4 rounded-lg"
              }
            >
              <Link to="/listedbooks">Listed Books</Link>
            </button>
            <button
              className={
                location == "/pagestoread"
                  ? "text-green-500 border border-green-500 py-2 px-4 rounded-lg"
                  : "text-black border border-white py-2 px-4 rounded-lg"
              }
            >
              <Link to="/pagestoread">Pages to Read</Link>
            </button>
            <button
            className={
              location == "/about"
                ? "text-green-500 border border-green-500 py-2 px-4 rounded-lg"
                : "text-black border border-white py-2 px-4 rounded-lg"
            }
          >
            <Link to="/about">About</Link>
          </button>
          <button
            className={
              location == "/faq"
                ? "text-green-500 border border-green-500 py-2 px-4 rounded-lg"
                : "text-black border border-white py-2 px-4 rounded-lg"
            }
          >
            <Link to="/faq">FAQ</Link>
          </button>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold ">
          <Link to="/">Book Nest</Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-2">
          <button
            className={
              location == "/"
                ? "text-green-500 border border-green-500 py-2 px-4 rounded-lg"
                : "text-black border border-white py-2 px-4 rounded-lg"
            }
          >
            <Link to="/">Home</Link>
          </button>
          <button
            className={
              location == "/listedbooks"
                ? "text-green-500 border border-green-500 py-2 px-4 rounded-lg"
                : "text-black border border-white py-2 px-4 rounded-lg"
            }
          >
            <Link to="/listedbooks">Listed Books</Link>
          </button>
          <button
            className={
              location == "/pagestoread"
                ? "text-green-500 border border-green-500 py-2 px-4 rounded-lg"
                : "text-black border border-white py-2 px-4 rounded-lg"
            }
          >
            <Link to="/pagestoread">Pages to Read</Link>
          </button>
          <button
            className={
              location == "/about"
                ? "text-green-500 border border-green-500 py-2 px-4 rounded-lg"
                : "text-black border border-white py-2 px-4 rounded-lg"
            }
          >
            <Link to="/about">About</Link>
          </button>
          <button
            className={
              location == "/faq"
                ? "text-green-500 border border-green-500 py-2 px-4 rounded-lg"
                : "text-black border border-white py-2 px-4 rounded-lg"
            }
          >
            <Link to="/faq">FAQ</Link>
          </button>
        </div>
      </div>
      <div className="hidden md:flex navbar-end gap-2  ">
        <a className="btn bg-green-500 text-white">Sign In</a>
        <a className="btn bg-blue-500 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Nav;
