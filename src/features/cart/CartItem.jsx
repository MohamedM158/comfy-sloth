import { useProducts } from '../../context/ProductsContext';
import { formatCurrency } from '../../helpers/helpers';
import { MdDelete } from 'react-icons/md';

function CartItem({ product }) {
  const { image, price, name, quantity, sku } = product;
  const { handleDeleteItemFromCart } = useProducts();

  return (
    <article className="mb-10 grid grid-cols-[200px_auto_auto] place-items-center md:grid-cols-[1fr_1fr_1fr_1fr_auto]">
      <div className="grid h-full grid-cols-[75px_125px] grid-rows-[75px] items-center gap-5 md:grid-cols-[100px_200px]">
        <img
          className="block h-full w-full rounded object-cover"
          src={image}
          alt={name}
        />
        <div>
          <h6 className="text-sm font-bold tracking-widest text-grey-1">
            {name}
          </h6>
          <span className="text-xs md:hidden">{formatCurrency(price)}</span>
        </div>
      </div>
      <span className="hidden text-sm text-brown-2 md:block">
        {formatCurrency(price)}
      </span>

      <span className="font-bold">{quantity}</span>

      <span className="text-sm text-grey-2">
        {formatCurrency(quantity * price)}
      </span>
      <button
        onClick={() => handleDeleteItemFromCart(sku)}
        className="rounded bg-red-600 p-1 transition hover:bg-red-700"
      >
        <MdDelete className="text-white" />
      </button>
    </article>
  );
}

export default CartItem;
