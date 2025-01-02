import { useState, useEffect } from 'react'
import SectiontTitle from './SectiontTitle';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuItem from './ui/MenuItem';

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get('/menu.json')
            .then((res) => {

                const popularItems = res.data.filter(item => item.category === 'popular')
                setMenu(popularItems);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='max-w-7xl mx-auto px-4 my-20'>
            <SectiontTitle
                heading='Our Popular Menu'
                subHeading='Check it out'
            />
            <div className="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6' >
                    {
                        menu.map((item) => (
                            <MenuItem key={item._id} item={item} />
                        ))
                    }
                </div>
                <div className="flex justify-center my-8">
                    <Link
                        to={'/menu'}
                        type="button"
                        className="capitalize border-b-2 border-b-yolo px-4 py-2 rounded font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-yolo hover:text-white focus:outline-none focus:ring-2 focus:ring-yolo"
                    >
                        View Full Menu
                    </Link>
                </div>

            </div>


        </div >
    )
}

export default PopularMenu
