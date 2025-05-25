import ProductsAside from './ProductsAside';
import ProductsCollection from './ProductsCollection';

function ProductsContent() {
  return (
    <div className="container">
      <div className="my-10 grid grid-cols-1 md:grid-cols-[200px_1fr]">
        <ProductsAside />
        <ProductsCollection />
      </div>
    </div>
  );
}

export default ProductsContent;
