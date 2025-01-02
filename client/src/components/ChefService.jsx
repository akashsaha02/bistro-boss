import chefService from '../assets/home/chef-service.jpg';

const ChefService = () => {
    return (
        <div
            className="max-w-7xl mx-auto my-6 py-12 md:py-32 text-center text-white"
            style={{
                backgroundImage: `url(${chefService})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="rounded flex flex-col items-center justify-center bg-white mx-10 md:mx-20 text-black py-10 md:py-20">
                <h1 className=" text-3xl md:text-4xl cinzel">Bistro Boss</h1>
                <p className="mt-2 max-w-4xl text-sm md:text-md mx-auto px-6 text-justify md:text-center text-dark-3">
                    Indulge in a culinary journey with dishes crafted by master chefs. Experience flavors that delight and moments you'll treasure forever. Bistro Boss redefines dining with world-class cuisine and unmatched hospitality. Whether you're here for a casual meal, a family gathering, or a romantic evening, we promise exceptional quality, warm hospitality, and dishes that will tantalize your taste buds. Let us take you on a journey of gourmet excellence.
                </p>
            </div>

        </div>
    );
};

export default ChefService;
