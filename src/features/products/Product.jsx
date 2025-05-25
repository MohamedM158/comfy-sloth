import { Link, useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductsContext';
import MainHeading from '../../ui/MainHeading';
import { formatCurrency } from '../../helpers/helpers';

function Product() {
  const { sku } = useParams();
  const {
    products,
    addToCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useProducts();
  const currentProduct = products.filter((product) => product.sku === sku);

  return (
    <>
      <MainHeading page={`Product / ${currentProduct[0]?.name}`} />
      <div className="container">
        <div className="py-12">
          <Link
            to="/products"
            className="rounded bg-brown-2 px-2 py-1 font-thin uppercase tracking-wider text-white transition hover:bg-brown-1"
          >
            Back to products
          </Link>
          <div className="my-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <section>
              <img
                className="block h-[500px] w-full rounded object-cover"
                src={currentProduct[0]?.image}
                alt={currentProduct[0]?.name}
              />
            </section>
            <section>
              <h2 className="mb-4 text-5xl font-bold text-grey-1">
                {currentProduct[0]?.name}
              </h2>
              <p className="mb-2 text-2xl font-bold text-brown-2">
                {formatCurrency(currentProduct[0]?.price)}
              </p>
              <p className="mb-2 text-lg leading-loose text-grey-2">
                {currentProduct[0]?.info}
              </p>
              <p
                className={`mt-4 grid grid-cols-2 text-xl ${currentProduct[0]?.available ? 'text-grey-2' : 'font-semibold text-red-700'}`}
              >
                <span className={`font-bold text-grey-2`}>Available: </span>
                {currentProduct[0]?.available ? 'In Stock' : 'Out of Stock'}
              </p>
              <p className="mt-4 grid grid-cols-2 text-xl text-grey-2">
                <span className="font-bold text-grey-1">sku: </span>
                {sku}
              </p>
              <p className="mt-4 grid grid-cols-2 text-xl text-grey-2">
                <span className="font-bold text-grey-1">Brand: </span>
                {currentProduct[0]?.brand}
              </p>
              <hr className="my-4 text-slate-300" />
              {currentProduct[0]?.available && (
                <>
                  <div className="mb-6 flex w-[120px] items-center justify-between text-center text-4xl font-bold">
                    <button onClick={() => handleDecreaseQuantity(sku)}>
                      -
                    </button>
                    <span>{currentProduct[0]?.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(sku)}>
                      +
                    </button>
                  </div>

                  {currentProduct[0]?.quantity > 0 && (
                    <div>
                      <button
                        onClick={() => addToCart(currentProduct[0])}
                        className="rounded bg-brown-2 px-2 py-1 font-thin uppercase tracking-wider text-white transition hover:bg-brown-1"
                      >
                        Add to cart
                      </button>
                    </div>
                  )}
                </>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
