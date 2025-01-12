import axios  from 'axios';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const axiosSecure = axios.create({
    baseURL: apiBaseUrl

})

const useAxiosSecure = () => {
    return axiosSecure;
}

export default useAxiosSecure
