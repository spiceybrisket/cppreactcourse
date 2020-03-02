import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import useEventListener from "../../hooks/useEventListener";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const escHandler = useCallback(
    e => {
      if (e.key === "Esc" || e.key === "Escape") {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  // add keydown event lstener to look for esc to close modal bg
  useEventListener("keydown", escHandler);

  return (
    <div className="relative hidden md:block md:ml-6">
      <button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white ">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
          alt="Your avatar"
          onClick={() => setIsOpen(!isOpen)}
        />
      </button>
      {isOpen ? (
        <>
          <button
            tabIndex="-1"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
          ></button>

          <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl">
            <Link
              to="#"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Account Settings
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Contact Support
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Sign out
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default AccountDropdown;
