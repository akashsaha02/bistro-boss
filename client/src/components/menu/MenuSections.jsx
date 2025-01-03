import { useState, useEffect } from 'react'
import axios from 'axios';
import MenuItem from '../ui/MenuItem';
import HomeButton from '../ui/HomeButton';

const MenuSections = ({ category }) => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('/menu.json')
            .then((res) => {

                const popularItems = res.data.filter(item => item.category === category)
                setMenu(popularItems.slice(0, 6));
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6' >
                {
                    menu.map((item) => (
                        <MenuItem key={item._id} item={item} />
                    ))
                }
            </div>
            <div className="flex justify-center my-8">
                <HomeButton to='menu' text='order your favourite food' />
            </div>

        </div>
    )
}

export default MenuSections

