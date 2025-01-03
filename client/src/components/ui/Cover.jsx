import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            bgImage={img}
            strength={300}
            bgImageStyle={{
                objectFit: 'cover',
                objectPosition: 'center',
            }}
        >
            <div className="relative min-h-[70vh] flex items-center justify-center text-white">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/40"></div>

                {/* Content */}
                <div className="z-10 max-w-7xl mx-auto py-12 md:py-40 text-center">
                    <div className="rounded flex flex-col items-center justify-center py-10 md:py-20">
                        <h1 className="text-4xl md:text-5xl font-bold uppercase cinzel transition-transform duration-500 hover:scale-105">
                            {title}
                        </h1>
                        <p className="mt-4 max-w-5xl cinzel md:text-lg font-medium mx-auto px-6 text-center transition-opacity duration-500 hover:opacity-90">
                            {subTitle}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
