import SectiontTitle from '../ui/SectiontTitle';
import MenuItem from '../ui/MenuItem';
import HomeButton from '../ui/HomeButton';
import useMenu from '../../hooks/useMenu';
import Loader from '../ui/Loader';

const PopularMenu = () => {


    const [menu,loding]=useMenu()
    if (loding) return <Loader/>
    const popularMenu = menu.filter(item => item.category === 'popular').slice(0, 4);

    return (
        <div className='max-w-7xl mx-auto px-4 my-20'>
            <SectiontTitle
                heading='Our Popular Menu'
                subHeading='Check it out'
            />
            <div className="">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6' >
                    {
                        popularMenu.map((item) => (
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
