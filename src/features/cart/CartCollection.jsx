import { useProducts } from '../../context/ProductsContext';
import MainHeading from '../../ui/MainHeading';
import CartItem from './CartItem';
import CartOverview from './CartOverview';

function CartCollection() {
  const { cart } = useProducts();
  return (
    <>
      <MainHeading page="Cart" />
      <section className="lg:m-auto lg:w-5/6">
        <div className="container">
          <div className="mt-10 hidden grid-cols-[316px_1fr_1fr_1fr_auto] text-center text-sm tracking-widest text-grey-3 md:grid">
            <h5>Item</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Subtotal</h5>
            <span></span>
          </div>
          <hr className="my-10 text-gray-200" />
          {cart.map((product) => (
            <CartItem key={product.sku} product={product} />
          ))}
          <hr className="my-10 text-gray-200" />
          <CartOverview />
        </div>
      </section>
    </>
  );
}

export default CartCollection;
