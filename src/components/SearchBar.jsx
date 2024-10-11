import { assets } from "@/assets/assets";
import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t relative border-b bg-gray-100 flex items-center justify-center">
      <div className="inline-flex items-center justify-center bg-white px-5 py-3.5 mx-3 my-5 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none h-full w-full flex-1 bg-white text-sm"
          placeholder="Search here..."
        />
        <img src={assets.search_icon} alt="" className="w-4 cursor-pointer" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="w-3 absolute cursor-pointer top-2 right-2"
        src={assets.cross_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
