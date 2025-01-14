import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../components/ui/SectiontTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: 'users',
        queryFn: async () => {
            const response = await axiosSecure.get('/users');
            return response.data;
        },
    });

    const handleRoleChange = async (id, newRole) => {
        try {
            // await axiosSecure.patch(`/users/${id}`, { role: newRole });
            // refetch(); 
            alert('User role updated successfully!');
        } catch (error) {
            // console.error('Error updating role:', error.message);
            alert('Failed to update user role.');
        }
    };

    const handleDeleteUser = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
        if (confirmDelete) {
            try {
                // await axiosSecure.delete(`/users/${id}`);
                // refetch(); // Refresh data after deleting
                alert('User deleted successfully!');
            } catch (error) {
                // console.error('Error deleting user:', error.message);
                alert('Failed to delete user.');
            }
        }
    };

    return (
        <div>
            <SectionTitle heading="All Users" subHeading="Manage All Users" />

            <div className="max-w-5xl mx-auto">
                <div className="">
                    <h2 className="">Total Users ({users.length})</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* Table Head */}
                        <thead>
                            <tr className='text-center'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {/* Map through users */}
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <p className="px-4 block">
                                            {user.name}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="px-4">
                                            {user.email}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="px-4">
                                            {user.role||'User'}
                                        </p>
                                    </td>
                                    <td>
                                        <div className="w-full flex justify-center items-center px-4">
                                            {/* Role Button */}
                                            <button
                                                className="btn btn-sm btn-primary mx-1"
                                                onClick={() => handleRoleChange(user._id, user.role === 'Admin' ? 'User' : 'Admin')}
                                            >
                                                {user.role === 'Admin' ? 'Demote to User' : 'Promote to Admin'}
                                            </button>
                                            {/* Delete Button */}
                                            <button
                                                className="btn btn-sm btn-danger mx-1"
                                                onClick={() => handleDeleteUser(user._id)}
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
        </div>
    );
};

export default AllUsers;
