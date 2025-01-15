import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ food }) => {
  const { name, recipe, image, category, price, _id } = food;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch]=useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // Send data logic
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      }

      axiosSecure.post('/carts', cartItem).then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Item added to cart!',
          timer: 1000,
        });
        refetch();
      }).catch((err) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again!',
        });
      });

    } else {
      Swal.fire({
        icon: 'warning',
        title: 'You\'re not logged in!',
        text: 'Please login to order!',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className=" w-full bg-white rounded-lg shadow-md overflow-hidden">
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
          <span className="text-xl font-bold text-yolo">${price}</span>
          <button
            onClick={() => handleAddToCart()}
            className="px-4 py-2 text-sm bg-yolo text-white rounded hover:bg-dark-1 transition ease-in font-semibold">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
