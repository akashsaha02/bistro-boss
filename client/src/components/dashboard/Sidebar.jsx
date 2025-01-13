import { NavLink } from "react-router-dom"
import useCart from "../../hooks/useCart"
import { FaCartShopping } from "react-icons/fa6"
import { FaCalendarCheck, FaCalendarDay } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { MdPayments, MdReviews } from "react-icons/md";
import logo from '../../assets/logo.png'

const Sidebar = () => {

    const [cart] = useCart();

    const sidebarItems = <>
        <li>
            <NavLink to='/' className="flex items-center gap-4 p-4">
                <div className="">
                    <img src={logo} alt="" className="w-10" />
                </div>
                <p className="text-2xl font-bold cinzel">Bistro Boss<br />Restaurent</p>
            </NavLink>
        </li>


        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-yolo"
                        : "text-black hover:!text-yolo font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <HiHome className="inline-block" size={20} />
                    <p className="text-lg">User Home</p>
                </div>

            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/reservation"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-yolo"
                        : "text-black hover:!text-yolo font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <FaCalendarDay className="inline-block" size={20} />
                    <p className="text-lg">Reservation</p>
                </div>

            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/payment-history"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-yolo"
                        : "text-black hover:!text-yolo font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <MdPayments className="inline-block" size={20} />
                    <p className="text-lg">Payment History</p>
                </div>

            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/dashboard/cart"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-yolo"
                        : "text-black hover:!text-yolo font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <FaCartShopping className="inline-block" size={20} />

                    <p className="text-lg">
                        My Cart ({cart.length})
                    </p>
                </div>
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/add-review"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-yolo"
                        : "text-black hover:!text-yolo font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <MdReviews className="inline-block" size={20} />
                    <p className="text-lg">Add Review</p>
                </div>

            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard/my-bookings"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-yolo"
                        : "text-black hover:!text-yolo font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <FaCalendarCheck className="inline-block" size={20} />
                    <p className="text-lg">My Bookings</p>
                </div>

            </NavLink>
        </li>
    </>


    return (
        <div className="drawer lg:drawer-open sticky top-0 h-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    {sidebarItems}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar