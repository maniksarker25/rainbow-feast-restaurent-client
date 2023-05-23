import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/menu'>Menu</Link>
      </li>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Home</Link>
      </li>
    </>
  );
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div
        className="navbar fixed z-10 max-w-screen-xl  text-white bg-[#151515] opacity-50"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  text-white bg-[#151515] opacity-50 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link >
            <div className="text-white">
                <h2 className=" text-xl md:text-4xl font-bold">Rainbow Feast</h2>
                <p className="  md:text-3xl font-bold">R e s t a u r a n t</p>
            </div>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
