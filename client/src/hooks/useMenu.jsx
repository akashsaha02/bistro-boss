import { useState, useEffect } from 'react';
import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${apiBaseUrl}/menu`)
            .then((res) => {
                setMenu(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return [menu, loading];
}

export default useMenu
