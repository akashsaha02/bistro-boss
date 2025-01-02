import SectiontTitle from './SectiontTitle';
import featuredImg from '../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div>
            <SectiontTitle
                heading='From Our Menu'
                subHeading='Check it out'
            />
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 max-w-7xl mx-auto">
                <div className="">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="">
                    <p className="">March 20, 2025</p>
                    <h3 className="uppercase">Where Can I Get Some ?</h3>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quidem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.
                    </p>
                    <button type="" className="">
                        Read More
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Featured
