import React from "react";

const FoodCard = ({ food }) => {
  const { name, recipe, image, category, price } = food;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800 capitalize cinzel">{name}</h2>
          <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
            {category}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{recipe}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-yolo">${price.toFixed(2)}</span>
          <button className="px-4 py-2 text-sm bg-yolo text-white rounded hover:bg-yolo transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
