import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="flex h-[450px] flex-col items-center justify-center">
      <p className="mb-4 mt-4 text-center text-4xl font-bold text-grey-1">
        Your Cart is Still Empty
      </p>
      <Link
        to="/products"
        className="rounded bg-brown-2 px-2 py-1 font-thin uppercase tracking-wider text-white transition hover:bg-brown-1"
      >
        Fill it
      </Link>
    </div>
  );
}

export default EmptyCart;
