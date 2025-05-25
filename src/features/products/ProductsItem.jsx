import { Link } from 'react-router-dom';
import { formatCurrency } from '../../helpers/helpers';
import { useProducts } from '../../context/ProductsContext';

function ProductsItem({ product }) {
  const { isGridView } = useProducts();
  const { name, info, price, image, sku } = product;

  return (
    <article
      className={`${!isGridView ? 'grid grid-cols-1 gap-6 sm:grid-cols-2' : ''}`}
    >
      <div className="relative">
        <img
          className={`${!isGridView ? 'w-[300px]' : ''} block h-[175px] w-full rounded object-cover`}
          src={image}
          alt={name}
        />
        {isGridView && (
          <span className="absolute left-0 top-0 flex h-44 w-full items-center justify-center rounded bg-brown-1 opacity-0 transition hover:opacity-50">
            <Link to={`${sku}`} className="text-xl font-bold text-white">
              Explore
            </Link>
          </span>
        )}
      </div>
      <div
        className={`${isGridView ? 'mt-2 flex items-center justify-between' : 'flex flex-col justify-between lg:w-[480px]'}`}
      >
        <p
          className={`${!isGridView ? 'text-xl font-bold' : ''} tracking-widest`}
        >
          {name}
        </p>
        <span className={`${!isGridView ? 'font-bold' : ''} text-brown-2`}>
          {formatCurrency(price)}
        </span>
        {!isGridView && (
          <>
            <p className="mb-4 mt-2 text-sm text-grey-3">
              {info.slice(0, 100) + '..'}
            </p>
            <Link
              to={`${sku}`}
              className="block w-fit rounded bg-brown-2 px-1 text-sm text-white transition hover:bg-brown-1"
            >
              Details
            </Link>
          </>
        )}
      </div>
    </article>
  );
}

export default ProductsItem;
