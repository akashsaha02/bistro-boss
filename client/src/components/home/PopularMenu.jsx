import { useState, useEffect } from 'react'
import SectiontTitle from '../ui/SectiontTitle';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuItem from '../ui/MenuItem';
import HomeButton from '../ui/HomeButton';

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
                    <HomeButton to='menu' text='View Full Menu' />
                </div>

            </div>


        </div >
    )
}

export default PopularMenu
