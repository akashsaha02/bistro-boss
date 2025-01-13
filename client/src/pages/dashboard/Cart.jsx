import useCart from "../../hooks/useCart"
import SectionTitle from './../../components/ui/SectiontTitle';

const Cart = () => {

    const [cart] = useCart();

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="bg-gray-100 py-10 px-4">

            {/* <p className="text-center">
                    {cart.length}
                </p> */}

            <SectionTitle heading="My Cart" subHeading="Wanna Add More" />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 cinzel text-dark-1 font-semibold items-center">
                <h3 className="text-xl md:text-2xl">Total Order: {cart.length} </h3>
                <h3 className="text-xl md:text-2xl">Total Price: {totalPrice}$ </h3>
                <button type="" className="btn btn-md bg-yolo text-lg md:text-xl text-white">
                    Pay {totalPrice}$
                </button>
            </div>


            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
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
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {item.name} {item.brand}
                                                <p >{item.category}</p>
                                            </td>
                                            <td>{item.price} $</td>
                                            <th>
                                                <button className="btn btn-ghost btn-xs">Delete</button>
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
