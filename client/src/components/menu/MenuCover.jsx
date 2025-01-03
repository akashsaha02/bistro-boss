const MenuCover = ({ img, title, subTitle }) => {
    return (
        <div

            className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white"

            style={{ backgroundImage: `url(${img})` }}>
            <div
                className="max-w-7xl mx-auto py-12 md:py-28 text-center text-white"

            >
                <div className="rounded flex flex-col items-center justify-center bg-black/70 mx-10 md:mx-20 py-10 md:py-20">
                    <h1 className=" text-3xl md:text-4xl cinzel font-semibold uppercase">{title}</h1>
                    <p className="mt-2 max-w-4xl text-sm md:text-md mx-auto px-6 text-justify md:text-center">
                        {subTitle}</p>
                </div>

            </div>
        </div>
    )
}

export default MenuCover

