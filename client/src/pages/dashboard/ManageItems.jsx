import Swal from 'sweetalert2';
import Loader from '../../components/ui/Loader';
import SectionTitle from '../../components/ui/SectiontTitle';
import useMenu from '../../hooks/useMenu';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, isLoading, refetch] = useMenu();

    const axiosSecure = useAxiosSecure();

    // Placeholder functions for actions
    const handleUpdateItem = (id) => {
        console.log(`Update item with ID: ${id}`);
        // Implement update logic
    };

    const handleDeleteItem = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
                refetch();
            }
        });
    };

    if (isLoading) return <Loader />;

    return (
        <div className="max-w-5xl mx-auto">
            <SectionTitle heading="Manage Items" subHeading="Update or delete menu item" />
            <div className="mb-4">
                <h2 className="text-lg font-semibold">Total Items ({menu.length})</h2>
            </div>
            <div className="overflow-x-auto rounded-xl">
                <table className="table table-zebra">
                    {/* Table Head */}
                    <thead className="text-center bg-yellow-500 text-white">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price ($)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {menu.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 object-cover rounded-full"
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td className="capitalize">{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    <div className="flex justify-center items-center gap-2">
                                        {/* Update Button */}
                                        <Link

                                            to={`/dashboard/menu/update/${item._id}`}
                                        >
                                            <button
                                                className="btn btn-sm btn-primary"
                                                onClick={() => handleUpdateItem(item._id)}
                                            >
                                                Update
                                            </button>
                                        </Link>
                                        {/* Delete Button */}
                                        <button
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleDeleteItem(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;
