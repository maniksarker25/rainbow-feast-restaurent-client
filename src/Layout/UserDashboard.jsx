import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet,FaCalendarAlt,FaHome ,FaEdit,FaBook,FaBars,FaShopify} from "react-icons/fa";

const UserDashboard = () => {
  return (
    <div className="drawer drawer-mobile max-w-screen-xl mx-auto bg-[#F6F6F6]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu md:p-4 w-40 md:w-60 uppercase bg-[#D1A054] text-base-content font-semibold ">
          <li>
            <NavLink to='/home' >
              <FaHome/> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/reservation'>
              <FaCalendarAlt/>Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to='/UserDashboard/myCart' className={({ isActive }) => (isActive ? "active" : "default")}>
              <FaShoppingCart></FaShoppingCart>My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to='/payment'>
              <FaWallet />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to='/review'>
              <FaEdit />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to='/myBooking'>
              <FaBook />
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to='/'>
              <FaHome />
             Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/menu'>
              <FaBars />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/orderFood/salad'>
              <FaShopify />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              <FaShopify />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
