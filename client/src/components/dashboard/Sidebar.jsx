import { NavLink } from "react-router-dom"
import useCart from "../../hooks/useCart"
import { FaListCheck, FaCartShopping, } from "react-icons/fa6"
import { FaCalendarCheck, FaCalendarDay, FaBook, FaUsers,FaShoppingBag } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";
import { MdPayments, MdReviews } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import logo from '../../assets/logo.png'

const Sidebar = () => {

    const [cart] = useCart();

    const isAdmin = true;

    const sidebarItems =
        isAdmin ? <>

            <li>
                <NavLink
                    to="/dashboard/admin-home"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-yolo"
                            : "text-black hover:!text-yolo font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <HiHome className="inline-block" size={20} />
                        <p className="text-lg">Admin Home</p>
                    </div>

                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/add-items"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-yolo"
                            : "text-black hover:!text-yolo font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <GiForkKnifeSpoon className="inline-block" size={20} />
                        <p className="text-lg">Add Items</p>
                    </div>

                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/admin-home"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-yolo"
                            : "text-black hover:!text-yolo font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <FaListCheck className="inline-block" size={20} />
                        <p className="text-lg">Manage Items</p>
                    </div>

                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/admin-home"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-yolo"
                            : "text-black hover:!text-yolo font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <FaBook className="inline-block" size={20} />
                        <p className="text-lg">Manage Bookings</p>
                    </div>

                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/users"
                    className={({ isActive }) =>
                        isActive
                            ? "font-bold !text-yolo"
                            : "text-black hover:!text-yolo font-medium"
                    }
                >
                    <div className="flex gap-4 items-center">
                        <FaUsers className="inline-block" size={20} />
                        <p className="text-lg">All Users</p>
                    </div>

                </NavLink>
            </li>


        </> :
            <>



                <li>
                    <NavLink
                        to="/dashboard/user-home"
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


    const sharedNavItems = <>
        <li>
            <div className="divider divider-warning"></div>
        </li>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-yolo"
                        : "text-black hover:!text-yolo font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <HiHome className="inline-block" size={20} />
                    <p className="text-lg">Home</p>
                </div>

            </NavLink>
        </li>
        <li>
            <NavLink
                to="/menu"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-yolo"
                        : "text-black hover:!text-yolo font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <BiSolidFoodMenu className="inline-block" size={20} />
                    <p className="text-lg">Menu</p>
                </div>

            </NavLink>
        </li>
        <li>
            <NavLink
                to="/order"
                className={({ isActive }) =>
                    isActive
                        ? "font-bold !text-yolo"
                        : "text-black hover:!text-yolo font-medium"
                }
            >
                <div className="flex gap-4 items-center">
                    <FaShoppingBag className="inline-block" size={20} />
                    <p className="text-lg">Shop</p>
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
                    <IoMail className="inline-block" size={20} />
                    <p className="text-lg">Contact</p>
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
                    <li>
                        <NavLink to='/' className="flex items-center gap-4 p-4">
                            <div className="">
                                <img src={logo} alt="" className="w-10" />
                            </div>
                            <p className="text-2xl font-bold cinzel">Bistro Boss<br />Restaurent</p>
                        </NavLink>
                    </li>
                    {sidebarItems}
                    {sharedNavItems}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar