import React from "react";

const SearchForm = ({ formClasses }) => {
  return (
    <form className={formClasses}>
      <input
        className="ml-1 leading-4 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full w-32 appearance-none leading-normal"
        type="text"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="ml-4 px-4 py-2 w-16 border border-blue-300 rounded-lg content-center focus:outline-none focus:border-white"
      >
        <svg className="h-6 w-6 fill-current text-blue-300" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
