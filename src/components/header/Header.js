import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

import AccountDropdown from "./AccountDropdown";
import SearchForm from "./SearchForm";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  const classes = `px-2 pt-2 pb-4 md:flex md:p-0 ${
    isOpen ? "block" : "hidden"
  }`;
  return (
    <header className="bg-gray-900 md:flex md:justify-between md:items-center md:px-4 lg:px-16 md:py-3">
      <div className="flex items-center justify-between px-4 py-3 md:p-0">
        <div>
          <img className="h-12" src={Logo} alt="Workcation" />
        </div>
        <SearchForm formClasses="hidden md:flex mt-1 relative rounded-md shadow-sm lg:ml-32" />
        <div className="md:hidden">
          <button
            onClick={() => setIsopen(!isOpen)}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={classes}>
        <SearchForm formClasses="flex lg:ml-32 md:hidden mt-1 relative rounded-md shadow-sm" />
        <div className="px-2 pt-2 pb-4 md:flex md:p-0">
          <Link
            to="#"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            List your property
          </Link>
          <Link
            to="#"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2"
          >
            Trips
          </Link>
          <Link
            to="#"
            className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 md:mt-0 md:ml-2"
          >
            Messages
          </Link>
          <AccountDropdown />
        </div>
        <div className="px-4 py-5 border-t border-gray-800 md:hidden">
          <div className="flex items-center">
            <img
              className="h-8 w-8 border-2 border-gray-600 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
              alt="Your avatar"
            />
            <span className="ml-3 font-semibold text-white">Jane Doe</span>
          </div>
          <div className="mt-4">
            <Link to="#" className="block text-gray-400 hover:text-white">
              Account settings
            </Link>
            <Link to="#" className="mt-2 block text-gray-400 hover:text-white">
              Support
            </Link>
            <Link to="#" className="mt-2 block text-gray-400 hover:text-white">
              Sign out
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
