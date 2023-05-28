import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/UseCart";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  // console.log(cart)

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "default")} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "default")} to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "default")} to="/secret">Secret Menu</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "default")} to="/orderFood/salad">Order Food</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "default")} to="/userDashboard/myCart">
          <div className=" flex relative">
            <div>
              {" "}
              <FaShoppingCart />
            </div>
            <div className="badge badge-secondary absolute -top-4 -right-6">
              +{cart?.length || 0}
            </div>
          </div>
        </NavLink>
      </li>
      {user ? (
        <li>
          <button onClick={handleLogOut}>LogOut</button>
        </li>
      ) : (
        <>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "active" : "default")} to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="navbar fixed flex justify-between z-10 max-w-screen-xl md:px-4  text-white bg-[#151515] opacity-50">
        <div className="navbar-start">
          <div className="dropdown flex justify-between">
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
              className="menu menu-compact  dropdown-content mt-3 p-2 shadow  text-white bg-black opacity-50 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <NavLink>
            <div className="text-white">
              <h2 className=" text-xl md:text-4xl font-bold">Rainbow Feast</h2>
              <p className="  md:text-3xl font-bold">R e s t a u r a n t</p>
            </div>
          </NavLink>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal text-xl font-bold px-1">
            {navItems}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
