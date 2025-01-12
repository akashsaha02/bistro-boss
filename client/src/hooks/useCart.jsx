import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useCart = () => {

    // tan stack query
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const response = await axiosSecure.get('/carts')
            return response.data;
        }
    })
    return [cart];

}

export default useCart
