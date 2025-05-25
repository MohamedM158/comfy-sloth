import { useProducts } from '../../context/ProductsContext';
import { IoGrid } from 'react-icons/io5';
import { CiMenuBurger } from 'react-icons/ci';

function ProductsHeader() {
  const { filteredProducts, handleSort } = useProducts();
  const { isGridView, setIsGridView } = useProducts();

  return (
    <article className="mb-8 mt-4 grid grid-cols-[auto_auto_1fr_auto] items-center gap-10 md:mt-0">
      <div>
        <button
          className={`${isGridView ? 'bg-black text-white' : 'bg-white text-black'} me-2 rounded border p-1`}
          onClick={() => setIsGridView(true)}
        >
          <IoGrid />
        </button>
        <button
          className={`${!isGridView ? 'bg-black text-white' : 'bg-white-text-black'} rounded border p-1`}
          onClick={() => setIsGridView(false)}
        >
          <CiMenuBurger />
        </button>
      </div>
      <p className="hidden text-sm md:block">
        {filteredProducts.length} Products Found
      </p>
      <hr className="text-gray-300" />
      <form className="text-sm">
        <label className="me-2">Sort By:</label>
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-atoz">Name (A-Z)</option>
          <option value="name-ztoa">Name (Z-A)</option>
        </select>
      </form>
    </article>
  );
}

export default ProductsHeader;
