import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TfiClose } from 'react-icons/tfi';
import { useState } from 'react';
import { useProducts } from '../context/ProductsContext';

function Header() {
  const [isIconClicked, setIsIconClicked] = useState(false);
  const { cartTotalQuantity } = useProducts();

  return (
    <>
      <nav className="flex h-[80px] items-center justify-center py-2">
        <div className="container relative flex items-center justify-between">
          <Link to="/">
            <img className="w-44" src="/images/logo.svg" alt="ComfySloth" />
          </Link>
          <ul className="hidden w-[600px] items-center justify-center sm:flex">
            <li>
              <NavLink
                to="/"
                className="border-brown tracking-widest text-grey-2 hover:border-b-2"
              >
                Home
              </NavLink>
            </li>
            <li className="ms-4">
              <NavLink
                to="/about"
                className="border-brown tracking-widest text-grey-2 hover:border-b-2"
              >
                About
              </NavLink>
            </li>
            <li className="ms-4">
              <NavLink
                to="/products"
                className="border-brown tracking-widest text-grey-2 hover:border-b-2"
              >
                Products
              </NavLink>
            </li>
          </ul>

          <div className="z-20" onClick={() => setIsIconClicked((i) => !i)}>
            {!isIconClicked ? (
              <RxHamburgerMenu className="cursor-pointer text-3xl text-brown-1 sm:hidden" />
            ) : (
              <TfiClose className="cursor-pointer text-3xl text-brown-1 sm:hidden" />
            )}
          </div>
          <ul className="hidden items-center justify-center sm:flex">
            <li>
              <Link
                to="/cart"
                className="flex items-center justify-center text-lg tracking-wide text-grey-1 md:text-2xl"
              >
                Cart
                <div className="relative ms-2">
                  <FaShoppingCart />
                  <span className="absolute bottom-4 left-3 z-10 flex h-1 w-1 items-center justify-center rounded-full bg-brown-2 text-xs text-white sm:p-2 md:h-5 md:w-5 md:p-0">
                    {cartTotalQuantity}
                  </span>
                </div>
              </Link>
            </li>
            <li className="ms-4">
              <Link className="flex items-center justify-center text-lg tracking-wide text-grey-1 md:text-2xl">
                Login
                <span className="ms-2">
                  <FaUserPlus />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`${isIconClicked ? 'translate-x-0' : 'translate-x-[-650px]'} absolute left-0 top-[-13px] z-10 flex h-[825px] w-full flex-col items-center justify-center bg-white text-center duration-500 sm:hidden`}
      >
        <Link to="/" onClick={() => setIsIconClicked(false)}>
          <img src="/images/logo.svg" alt="logo" className="mb-10 w-44" />
        </Link>
        <ul className="flex-col items-center justify-center sm:hidden">
          <li className="px-2 py-4">
            <NavLink
              onClick={() => setIsIconClicked(false)}
              to="/"
              className="border-brown tracking-widest text-grey-2 hover:border-b-2"
            >
              Home
            </NavLink>
          </li>
          <li className="px-2 py-4">
            <NavLink
              onClick={() => setIsIconClicked(false)}
              to="/about"
              className="border-brown tracking-widest text-grey-2 hover:border-b-2"
            >
              About
            </NavLink>
          </li>
          <li className="px-2 py-4">
            <NavLink
              onClick={() => setIsIconClicked(false)}
              to="/products"
              className="border-brown tracking-widest text-grey-2 hover:border-b-2"
            >
              Products
            </NavLink>
          </li>
        </ul>
        <ul className="flex-col items-center justify-center sm:hidden">
          <li className="px-2 py-4">
            <Link
              onClick={() => setIsIconClicked(false)}
              to="/cart"
              className="flex items-center justify-center text-xl tracking-wide text-grey-1 md:text-2xl"
            >
              Cart
              <div className="relative ms-2">
                <FaShoppingCart />
                <span className="absolute bottom-4 left-3 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-brown-2 p-2 text-xs text-white">
                  {cartTotalQuantity}
                </span>
              </div>
            </Link>
          </li>
          <li className="px-2 py-4">
            <Link className="flex items-center justify-center text-xl tracking-wide text-grey-1 md:text-2xl">
              Login
              <span className="ms-2">
                <FaUserPlus />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
