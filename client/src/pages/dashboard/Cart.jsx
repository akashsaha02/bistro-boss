import useCart from "../../hooks/useCart"
import SectionTitle from './../../components/ui/SectiontTitle';

const Cart = () => {

    const [cart] = useCart();
    return (
        <div>
            {cart.length}
        </div>
    )
}

export default Cart
