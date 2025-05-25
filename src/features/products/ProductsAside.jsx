import { useState } from 'react';
import { useProducts } from '../../context/ProductsContext';

function ProductsAside() {
  const { handleFilterCategory, clearFilters, handleSearchQuery, searchQuery } =
    useProducts();

  const [activeCategory, setActiveCategory] = useState('all');
  function handleClick(category) {
    setActiveCategory(category);
  }

  return (
    <section>
      <input
        className="w-40 bg-grey-4 px-2 py-1"
        type="search"
        placeholder="Search"
        onChange={handleSearchQuery}
        value={searchQuery}
      />
      <div className="mt-4">
        <h4 className="mb-2 font-bold tracking-widest">Category</h4>
        <div className="flex flex-col items-start">
          <button
            onClick={(e) => {
              handleClick(e.target.value);
              clearFilters();
            }}
            value="all"
            className={`tracking-widest text-grey-3 ${activeCategory === 'all' ? 'active-button' : ''}`}
          >
            All
          </button>
          <button
            onClick={(e) => {
              handleClick(e.target.value);
              handleFilterCategory(e.target.value);
            }}
            value="office"
            className={`tracking-widest text-grey-3 ${activeCategory === 'office' ? 'active-button' : ''}`}
          >
            Office
          </button>
          <button
            onClick={(e) => {
              handleClick(e.target.value);
              handleFilterCategory(e.target.value);
            }}
            value="living room"
            className={`tracking-widest text-grey-3 ${activeCategory === 'living room' ? 'active-button' : ''}`}
          >
            Living Room
          </button>
          <button
            onClick={(e) => {
              handleClick(e.target.value);
              handleFilterCategory(e.target.value);
            }}
            value="kitchen"
            className={`tracking-widest text-grey-3 ${activeCategory === 'kitchen' ? 'active-button' : ''}`}
          >
            Kitchen
          </button>
          <button
            onClick={(e) => {
              handleClick(e.target.value);
              handleFilterCategory(e.target.value);
            }}
            value="bedroom"
            className={`tracking-widest text-grey-3 ${activeCategory === 'bedroom' ? 'active-button' : ''}`}
          >
            Bedroom
          </button>
          <button
            onClick={(e) => {
              handleClick(e.target.value);
              handleFilterCategory(e.target.value);
            }}
            value="dinning"
            className={`tracking-widest text-grey-3 ${activeCategory === 'dinning' ? 'active-button' : ''}`}
          >
            Dining
          </button>
          <button
            onClick={(e) => {
              handleClick(e.target.value);
              handleFilterCategory(e.target.value);
            }}
            value="kids"
            className={`tracking-widest text-grey-3 ${activeCategory === 'kids' ? 'active-button' : ''}`}
          >
            Kids
          </button>
        </div>
      </div>

      <button
        onClick={clearFilters}
        className="mt-4 rounded bg-red-600 px-2 text-white transition hover:bg-red-700"
      >
        Clear Filters
      </button>
    </section>
  );
}

export default ProductsAside;
