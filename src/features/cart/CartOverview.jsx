import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import { formatCurrency } from '../../helpers/helpers';

const SHIPPING_FEE = 5.34;

function CartOverview() {
  const { clearCart, cartTotalPrice } = useProducts();
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <Link
          to="/products"
          className="rounded bg-brown-2 px-2 py-0.5 text-white transition hover:bg-brown-1"
        >
          Continue Shopping
        </Link>
        <button
          onClick={clearCart}
          className="rounded bg-stone-900 px-2 py-0.5 text-white transition hover:bg-stone-800"
        >
          Clear Shopping Cart
        </button>
      </div>
      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div></div>
          <article className="rounded border border-[#b6b6b6] px-5 py-2.5 sm:px-10 sm:py-5">
            <p className="mb-4 grid grid-cols-[200px_1fr] text-lg font-bold tracking-widest">
              <span>Subtotal: </span> {formatCurrency(cartTotalPrice)}
            </p>
            <p className="grid grid-cols-[200px_1fr] text-lg tracking-widest">
              <span>Shipping Fee: </span>
              {formatCurrency(SHIPPING_FEE)}
            </p>
            <hr className="my-6 text-gray-200" />
            <p className="grid grid-cols-[200px_1fr] text-lg font-bold tracking-widest">
              <span>Order Total:</span>
              {formatCurrency(+cartTotalPrice + SHIPPING_FEE)}
            </p>
            <button className="mt-4 w-full rounded  bg-brown-2 py-0.5 text-white">
              Login
            </button>
          </article>
        </div>
      </section>
    </>
  );
}

export default CartOverview;
