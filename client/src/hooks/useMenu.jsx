import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useMenu = () => {

    const axiosSecure = useAxiosSecure();
    // Use React Query to fetch the menu
    const { data: menu = [], isLoading, refetch } = useQuery({
        queryKey: ['menu'], // Unique query key
        queryFn: async () => {
            const response = await axiosSecure.get('/menu');
            return response.data;
        },
    });

    return [menu, isLoading, refetch];
};

export default useMenu;
