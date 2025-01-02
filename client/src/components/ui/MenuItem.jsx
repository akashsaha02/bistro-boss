
const MenuItem = ({ item }) => {
    return (
        <div>
            <div className="flex items-center justify-between my-4 gap-4 ">
                <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-r-full rounded-bl-full" />
                    <div className="ml-4">
                        <h3 className="text-xl cinzel font-medium text-dark-1">{item.name} <span className="">----------------</span></h3>
                        <p className="text-dark-3 line-clamp-2">{item.recipe}</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-medium text-yolo">${item.price}</h3>
                </div>
            </div>
        </div>
    )
}

export default MenuItem
