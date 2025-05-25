import { useProducts } from '../../context/ProductsContext';
import ProductsHeader from './ProductsHeader';
import ProductsItem from './ProductsItem';
import { ColorRing } from 'react-loader-spinner';

function ProductsCollection() {
  const { filteredProducts } = useProducts();
  const { isGridView, isLoading } = useProducts();

  if (!filteredProducts?.length)
    return (
      <p className="text-center text-xl font-bold">
        No products match your search.
      </p>
    );

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <ColorRing
            className="m-auto"
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={[]}
          />
        </div>
      ) : (
        <section className="pb-20">
          <ProductsHeader />
          <div
            className={`${isGridView ? 'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ' : 'grid w-full grid-cols-1 gap-y-10 lg:w-[600px]'} `}
          >
            {filteredProducts.map((product) => (
              <ProductsItem key={product.sku} product={product} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default ProductsCollection;
