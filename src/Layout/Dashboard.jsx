import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import { BsCart3, BsMenuApp } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute left-0 top-0"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/dashboard/myHome">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myReservation">
              <FaCalendarAlt />
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <FaCartPlus />
              My Cart
              <span className="indicator">
                <BsCart3 />
                <span className="badge badge-sm badge-secondary indicator-item">
                  {cart?.length || 0}
                </span>
              </span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              {" "}
              <BsMenuApp />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              {" "}
              <IoFastFoodOutline />
              Order Food
            </NavLink>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
