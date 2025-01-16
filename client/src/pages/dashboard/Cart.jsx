import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart"
import SectionTitle from './../../components/ui/SectiontTitle';
import Swal from 'sweetalert2';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleDeleteCart = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }
        });
    }
    return (
        <div className=" py-10 px-4">

            {/* <p className="text-center">
                    {cart.length}
                </p> */}

            <SectionTitle heading="My Cart" subHeading="Wanna Add More" />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 cinzel text-dark-1 font-semibold items-center">
                <h3 className="text-xl md:text-2xl">Total Order: {cart.length} </h3>
                <h3 className="text-xl md:text-2xl">Total Price: {totalPrice}$ </h3>
                <button onClick={() => { navigate("/dashboard/payment") }} disabled={!cart.length} type="" className="btn btn-md bg-yolo text-lg md:text-xl text-white">
                    Pay {totalPrice}$
                </button>
            </div>


            <div className="my-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg">
                                <th>
                                    Number
                                </th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item, index) => {
                                    return (
                                        <tr key={item._id}>
                                            <th>
                                                <label className="text-center">
                                                    {index + 1}
                                                </label>
                                            </th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="">
                                                    {item.name}
                                                    {/* {item.category} */}
                                                </div>

                                            </td>
                                            <td>{item.price} $</td>
                                            <th>
                                                <button
                                                    onClick={() => handleDeleteCart(item._id)}
                                                    className="btn btn-ghost btn-md"><FaTrashAlt /></button>
                                            </th>
                                        </tr>
                                    );
                                })
                            }

                        </tbody>
                        {/* foot */}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart
