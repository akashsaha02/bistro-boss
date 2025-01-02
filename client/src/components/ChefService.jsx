import chefService from '../assets/home/chef-service.jpg';

const ChefService = () => {
    return (
        <div
            className="max-w-7xl mx-auto my-6 py-32 text-center text-white"
            style={{
                backgroundImage: `url(${chefService})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className=" rounded flex flex-col items-center justify-center bg-white mx-20 text-black py-20">
                <h1 className="text-4xl font-bold">Exquisite Chef Service</h1>
                <p className="mt-4 text-lg md:text-xl">
                    Experience world-class culinary delights crafted by our expert chefs.
                </p>
            </div>
        </div>
    );
};

export default ChefService;
