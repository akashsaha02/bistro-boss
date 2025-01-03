import React from "react";

const FoodCard = ({ food }) => {
  const { name, recipe, image, category, price } = food;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-dark-1 capitalize cinzel">{name}</h2>
          <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <p className="text-dark-3 text-sm mt-2 line-clamp-2">{recipe}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-yolo">${price.toFixed(2)}</span>
          <button className="px-4 py-2 text-sm bg-yolo text-white rounded hover:bg-dark-1 transition ease-in font-semibold">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
