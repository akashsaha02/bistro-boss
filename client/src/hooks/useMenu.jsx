import { useState, useEffect } from 'react';
import axios from 'axios';

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/menu.json')
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
