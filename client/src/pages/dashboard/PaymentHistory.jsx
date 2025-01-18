import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PaymentHistory = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`);
            return res.data;
        },
    });

    return (
        <div className="my-10">
            <h1 className="text-2xl font-bold mb-4">Payment History</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr className="text-lg">
                            <th>Number</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <td>{index + 1}</td>
                                <td>{payment.transactionId}</td>
                                <td>{(payment.amount / 100).toFixed(2)} $</td> {/* Convert cents to dollars */}
                                <td>{new Date(payment.date).toLocaleDateString()}</td>
                                <td>{payment.status}</td>
                                <td>
                                    <button className="btn btn-ghost btn-md">View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
