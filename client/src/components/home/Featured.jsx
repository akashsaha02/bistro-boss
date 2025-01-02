import SectiontTitle from '../ui/SectiontTitle';
import featuredImg from '../../assets/home/featured.jpg';
import HomeButton from '../ui/HomeButton';

const Featured = () => {
    return (
        <div className="relative bg-cover bg-fixed bg-center bg-no-repeat py-10 text-white" style={{ backgroundImage: `url(${featuredImg})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>
            {/* Content */}
            <div className="relative py-10 px-4 md:px-10 max-w-7xl mx-auto rounded">
                <SectiontTitle
                    heading="From Our Menu"
                    subHeading="Check it out"
                    color={'white'}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8">
                    <div className="">
                        <img src={featuredImg} alt="Featured Dish" className="rounded shadow-lg" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm mb-2">March 20, 2025</p>
                        <h3 className="uppercase text-xl md:text-2xl font-semibold mb-4">Savor Our Signature Truffle Risotto</h3>
                        <p className="text-gray-300 mb-6">
                            Indulge in the creamy perfection of our signature Truffle Risotto, a dish that redefines comfort food.
                            Made with premium Arborio rice, rich Parmesan cheese, and a hint of white truffle oil, this dish is a celebration of earthy flavors.
                            Perfectly balanced and exquisitely plated, it’s a must-try for anyone seeking a touch of luxury on their plate.
                        </p>
                        <div className='flex'>
                            <HomeButton to="menu" text="Read More" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Featured;
