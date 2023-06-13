import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaEdit,
  FaBook,
  FaBars,
  FaShopify,
  FaUtensils,
  FaUsers,
} from "react-icons/fa";
import useCart from "../Hooks/UseCart";
import UseAdmin from "../Hooks/UseAdmin";

const UserDashboard = () => {
  const [cart] = useCart();

  //TODO: load data from the server to have dynamic admin based on data
  // const isAdmin = true;
  const [isAdmin] = UseAdmin();
  // console.log(isAdmin)
  return (
    <div className="drawer drawer-mobile max-w-screen-xl mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className=" drawer-button absolute top-4 left-4 lg:hidden"
        >
          <FaBars />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu md:p-4 w-60 uppercase bg-[#D1A054] text-base-content font-semibold ">
          <div className="ps-4 mb-12">
            <h3 className="text-xl font-bold">Rainbow Feast</h3>
            <h5 className=" font-bold">R e s t a u r a n t</h5>
          </div>
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItem">
                  <FaWallet />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBooking">
                  <FaBook />
                  Manage booking
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myCart"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  <div className="flex justify-between gap-2 items-center">
                    <div className="flex items-center gap-2">
                      <FaShoppingCart></FaShoppingCart>My Cart
                    </div>
                    <div className="badge  badge-secondary">
                      +{cart?.length || 0}
                    </div>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/review">
                  <FaEdit />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBookings">
                  <FaBook />
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/orderFood/salad">
              <FaShopify />
              Shop
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/contact">
              <FaShopify />
              Contact
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
