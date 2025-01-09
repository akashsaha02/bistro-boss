import MenuItem from '../ui/MenuItem';
import HomeButton from '../ui/HomeButton';
import useMenu from '../../hooks/useMenu';
import Loader from '../ui/Loader';

const MenuSections = ({ category }) => {

    const [menu, loading] = useMenu()
    if (loading) return <Loader />
    const filteredMenu = menu.filter(item => item.category === category).slice(0, 6);
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6' >
                {
                    filteredMenu.map((item) => (
                        <MenuItem key={item._id} item={item} />
                    ))
                }
            </div>
            <div className="flex justify-center my-8">
                <HomeButton to={`order/${category}`} text='order your favourite food' />
            </div>

        </div>
    )
}

export default MenuSections

