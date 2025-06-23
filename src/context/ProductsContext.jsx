import { createContext, useCallback, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

const tempProducts = [
  {
    name: 'Modern Poster',
    price: 30.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecQ0fMd8T0Vk211E',
    brand: 'liddy',
    quantity: 0,
    image: '/images/products/product-12.jpeg',
    category: 'living room',
  },
  {
    name: 'Armchair',
    price: 125.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'Recd1jIVIEChmiwhe',
    brand: 'Macros',
    quantity: 0,
    image: '/images/products/product-4.jpeg',
    category: 'bedroom',
  },
  {
    name: 'Suede Armchair',
    price: 159.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecroK1VD8qVdMP5H',
    brand: 'caressa',
    quantity: 0,
    image: '/images/products/product-16.jpeg',
  },
  {
    name: 'Leather Chair',
    price: 200.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecoW8ecgjtKx2Sj2',
    brand: 'caressa',
    quantity: 0,
    image: '/images/products/product-9.jpeg',
    category: 'bedroom',
  },
  {
    name: 'Emperor Bed',
    price: 239.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: false,
    sku: 'Rec1Ntk7siEEW9ha1',
    brand: 'ikea',
    quantity: 0,
    image: '/images/products/product-6.jpeg',
    category: 'bedroom',
  },
  {
    name: 'Accent Chair',
    price: 259.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecZkNf2kwmdBcqd0',
    brand: 'Macros',
    quantity: 0,
    image: '/images/products/product-1.jpeg',
    category: 'office',
  },
  {
    name: 'Shelf',
    price: 309.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'Rec7CjDWKRgNQtrKe',
    brand: 'Macros',
    quantity: 0,
    image: '/images/products/product-13.jpeg',
    category: 'living room',
  },
  {
    name: 'Modern Bookshelf',
    price: 319.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecoAJYUCuEKxcPSr',
    brand: 'caressa',
    quantity: 0,
    image: '/images/products/product-11.jpeg',
    category: 'kids',
  },
  {
    name: 'High-Back Bench',
    price: 399.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'Recrfxv3EwpvJwvjq',
    brand: 'ikea',
    quantity: 0,
    image: '/images/products/product-8.jpeg',
    category: 'office',
  },
  {
    name: 'Wooden Desk',
    price: 400.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'Recm7wC8TBVdU9oEL',
    brand: 'ikea',
    quantity: 0,
    image: '/images/products/product-21.jpeg',
    category: 'office',
  },
  {
    name: 'Dining Table',
    price: 429.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecotY5Nh00DQFdkm',
    brand: 'ikea',
    quantity: 0,
    image: '/images/products/product-5.jpeg',
    category: 'dinning',
  },
  {
    name: 'Entertainment Center',
    price: 599.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecNZ0koOqEmilmoz',
    brand: 'caressa',
    quantity: 0,
    image: '/images/products/product-7.jpeg',
    category: 'living room',
  },
  {
    name: 'Utopia Sofa',
    price: 799.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'Rec7JInsuCEHgmaGe',
    brand: 'liddy',
    quantity: 0,
    image: '/images/products/product-17.jpeg',
    category: 'living room',
  },
  {
    name: 'Leather Sofa',
    price: 999.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecEOA6qtDag1hRbU',
    brand: 'caressa',
    quantity: 0,
    image: '/images/products/product-10.jpeg',
    category: 'office',
  },
  {
    name: 'Albany Sectional',
    price: 1099.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: false,
    sku: 'RecEHmzvupvT8ZONH',
    brand: 'liddy',
    quantity: 0,
    image: '/images/products/product-2.jpeg',
    category: 'living room',
  },
  {
    name: 'Simple Chair',
    price: 1099.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecF0KpwlkF7e8kXO',
    brand: 'liddy',
    quantity: 0,
    image: '/images/products/product-14.jpeg',
    category: 'living room',
  },
  {
    name: 'Vase Table',
    price: 1209.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'Rec3jeKnhInKHJuz2',
    brand: 'marcos',
    quantity: 0,
    image: '/images/products/product-18.jpeg',
    category: 'office',
  },
  {
    name: 'Sofa Set',
    price: 1299.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'Recs5BSVU3qQrOj4E',
    brand: 'marcos',
    quantity: 0,
    image: '/images/products/product-15.jpeg',
    category: 'living room',
  },
  {
    name: 'Wooden Desk',
    price: 1509.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecJIjREF3dlFi3sR',
    brand: 'ikea',
    quantity: 0,
    image: '/images/products/product-20.jpeg',
    category: 'office',
  },
  {
    name: 'Wooden Table',
    price: 2349.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RectfNsySwAJeWDN2',
    brand: 'caressa',
    quantity: 0,
    image: '/images/products/product-22.jpeg',
    category: 'kitchen',
  },
  {
    name: 'Wooden Bed',
    price: 2500.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'Recv2ohxljlK2FZO7',
    brand: 'ikea',
    quantity: 0,
    image: '/images/products/product-19.jpeg',
    category: 'bedroom',
  },
  {
    name: 'Albany Table',
    price: 3099.99,
    info: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
    available: true,
    sku: 'RecVncCpQSCYnzoRm',
    brand: 'marcos',
    quantity: 0,
    image: '/images/products/product-3.jpeg',
    category: 'dinning',
  },
];

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [products, setProducts] = useState(tempProducts);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');

  const { sku } = useParams();

  const cartTotalQuantity = cart.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );
  const cartTotalPrice = cart
    .reduce((sum, product) => sum + product.price * product.quantity, 0)
    .toFixed(2);

  const currentProduct = products.filter((product) => product.sku === sku);

  // useEffect(function () {
  //   async function getProducts() {
  //     setIsLoading(true);
  //     const res = await fetch('http://localhost:8000/products');
  //     const data = await res.json();
  //     setProducts(data);
  //     setFilteredProducts(data);
  //     setIsLoading(false);
  //   }
  //   getProducts();
  // }, []);

  function handleIncreaseQuantity(productSku) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.sku === productSku
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  }

  function handleDecreaseQuantity(productSku) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.sku === productSku && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  }

  function handleDeleteItemFromCart(productSku) {
    setCart((prevCart) =>
      prevCart.filter((product) => product.sku !== productSku),
    );
  }

  function addToCart(selectedProduct) {
    const productInCart = cart.find(
      (product) => product.sku === selectedProduct.sku,
    );
    if (productInCart) {
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.sku === selectedProduct.sku
            ? {
                ...product,
                quantity: product.quantity + selectedProduct.quantity,
              }
            : product,
        ),
      );
    } else {
      setCart((prevCart) => [...prevCart, selectedProduct]);
    }
  }

  function clearCart() {
    setCart([]);
  }

  function handleFilterCategory(category) {
    const filtered = products.filter(
      (product) => product.category === category,
    );
    setFilteredProducts(filtered);
  }

  function clearFilters() {
    setFilteredProducts(products);
  }

  function handleSort(type) {
    if (type === 'price-lowest') {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => a.price - b.price),
      );
    } else if (type === 'price-highest') {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => b.price - a.price),
      );
    } else if (type === 'name-atoz') {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => a.name.localeCompare(b.name)),
      );
    } else if (type === 'name-ztoa') {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => b.name.localeCompare(a.name)),
      );
    }
  }

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
    handleSearchedProducts(e.target.value);
  }

  function handleSearchedProducts(query) {
    const searched = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredProducts(searched);
  }

  const resetQuantity = useCallback((sku) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.sku === sku ? { ...product, quantity: 0 } : product,
      ),
    );
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        products,
        isGridView,
        setIsGridView,
        cart,
        handleDecreaseQuantity,
        handleIncreaseQuantity,
        addToCart,
        cartTotalPrice,
        cartTotalQuantity,
        currentProduct,
        handleDeleteItemFromCart,
        clearCart,
        setIsLoading,
        setProducts,
        handleFilterCategory,
        clearFilters,
        handleSort,
        handleSearchQuery,
        filteredProducts,
        searchQuery,
        resetQuantity,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error('The ProductsContext is used outside ProductsProvider');
  return context;
}

export { useProducts, ProductsProvider };
