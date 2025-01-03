import { Parallax } from 'react-parallax';

const MenuCover = ({ img, title, subTitle }) => {
    return (
        <Parallax 
            bgImage={img} 
            strength={400} 
            bgImageStyle={{ objectFit: 'cover', objectPosition: 'center' }}
        >
            <div className="relative text-white min-h-[70vh] flex items-center justify-center">
                {/* Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content */}
                <div className="z-10 max-w-7xl mx-auto py-12 md:py-28 text-center">
                    <div className="rounded flex flex-col items-center justify-center py-10 md:py-20">
                        <h1 className="text-3xl md:text-4xl cinzel font-semibold uppercase">
                            {title}
                        </h1>
                        <p className="mt-4 max-w-4xl mx-auto px-6 text-justify md:text-center">
                            {subTitle}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default MenuCover;
