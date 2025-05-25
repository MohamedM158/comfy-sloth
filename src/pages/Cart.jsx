import { useProducts } from '../context/ProductsContext';
import CartCollection from '../features/cart/CartCollection';
import EmptyCart from '../features/cart/EmptyCart';

function Cart() {
  const { cart } = useProducts();

  if (!cart.length) return <EmptyCart />;

  return <CartCollection />;
}

export default Cart;
