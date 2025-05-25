import { Link } from 'react-router-dom';

function FeaturesSection() {
  return (
    <section className="bg-grey-4 py-20">
      <div>
        <h2 className="text-center text-3xl font-bold text-grey-1 ">
          Featured Products
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article>
          <div className="container relative">
            <img
              className="h-[225px] w-full rounded"
              src="/images/featured/product-11.jpeg"
              alt="Item"
            />
            <span className="special-width absolute left-5 top-0 flex h-56 items-center justify-center rounded bg-brown-1 opacity-0 transition hover:opacity-50">
              <Link to="/products" className="text-xl font-bold text-white">
                Explore
              </Link>
            </span>
            <div className="mt-1 flex items-center justify-between">
              <h6 className="tracking-widest text-grey-2">Modern Bookshelf</h6>
              <span className="text-brown-1">$319.99</span>
            </div>
          </div>
        </article>

        <article>
          <div className="container relative">
            <img
              className="h-[225px] w-full rounded"
              src="/images/featured/product-7.jpeg"
              alt="Item"
            />
            <span className="special-width absolute left-5 top-0 flex h-56 items-center justify-center rounded bg-brown-1 opacity-0 transition hover:opacity-50">
              <Link to="/products" className="text-xl font-bold text-white">
                Explore
              </Link>
            </span>
            <div className="mt-1 flex items-center justify-between">
              <h6 className="tracking-widest text-grey-2">
                Entertainment Center
              </h6>
              <span className="text-brown-1">$599.99</span>
            </div>
          </div>
        </article>

        <article>
          <div className="container relative">
            <img
              className="h-[225px] w-full rounded"
              src="/images/featured/product-8.jpeg"
              alt="Item"
            />
            <span className="special-width absolute left-5 top-0 flex h-56 items-center justify-center rounded bg-brown-1 opacity-0 transition hover:opacity-50">
              <Link to="/products" className="text-xl font-bold text-white">
                Explore
              </Link>
            </span>

            <div className="mt-1 flex items-center justify-between">
              <h6 className="tracking-widest text-grey-2">High-Back Bench</h6>
              <span className="text-brown-1">$399.99</span>
            </div>
          </div>
        </article>
      </div>
      <div className="mt-10 px-4 py-0">
        <Link
          className="w-fit rounded bg-brown-2 px-4 py-2 uppercase text-white transition hover:bg-brown-1"
          to="/products"
        >
          All Products
        </Link>
      </div>
    </section>
  );
}

export default FeaturesSection;
