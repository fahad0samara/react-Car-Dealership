import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="w-11/12 md:w-4/5 m-auto flex justify-center items-center space-x-4 bg-white p-5 rounded-lg shadow-lg">
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="text-orange-500" />
          <select className="bg-transparent border border-gray-300 rounded-md outline-none focus:ring focus:ring-orange-200">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="GB">United Kingdom</option>
            <option value="JP">Japan</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
          </select>
        </div>
        <div>
          <select className="bg-transparent border border-gray-300 rounded-md outline-none focus:ring focus:ring-orange-200">
            <option value="">Select Vendor</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
          </select>
        </div>
        <div>
          <select className="bg-transparent border border-gray-300 rounded-md outline-none focus:ring focus:ring-orange-200">
            <option value="">Select Model</option>
            <option value="Camry">Camry</option>
            <option value="Accord">Accord</option>
            <option value="Mustang">Mustang</option>
            <option value="Silverado">Silverado</option>
            <option value="Model S">Model S</option>
            <option value="Wrangler">Wrangler</option>
            <option value="X5">X5</option>
          </select>
        </div>
        <button className="bg-orange-600 text-white px-5 py-2 rounded-md flex items-center space-x-2">
          <IoSearch />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default Search;
