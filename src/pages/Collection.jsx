"use client";

import { assets } from "@/assets/assets";
import ProductItem from "@/components/ProductItem";
import Title from "@/components/Title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* FITER OPTIONS */}
      <div className="min-w-60">
        <h3
          onClick={() => setShowFilter(!showFilter)}
          className="uppercase my-2 text-xl items-center flex cursor-pointer gap-2"
        >
          filter
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </h3>

        {/* CATEGORY FILTER   */}
        <Card className={`mt-6 sm:block ${showFilter ? "" : "hidden"}`}>
          <CardHeader>
            <CardTitle className="text-sm font-medium uppercase">
              Category
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <input
                className="w-4 accent-black focus:accent-black"
                id="men"
                type="checkbox"
                onChange={toggleCategory}
                value={"Men"}
              />
              <Label htmlFor="men">Men</Label>
            </div>

            <div className="flex items-center gap-2">
              <input
                className="w-4 accent-black focus:accent-black"
                id="women"
                type="checkbox"
                onChange={toggleCategory}
                value={"Women"}
              />
              <Label htmlFor="women">Women</Label>
            </div>

            <div className="flex items-center gap-2">
              <input
                className="w-4 accent-black focus:accent-black"
                id="kids"
                type="checkbox"
                onChange={toggleCategory}
                value={"Kids"}
              />
              <Label htmlFor="kids">Kids</Label>
            </div>
          </CardContent>
        </Card>

        {/* SUBCATEGORY FILTER */}
        <Card className={`mt-6 sm:block ${showFilter ? "" : "hidden"}`}>
          <CardHeader>
            <CardTitle className="text-sm font-medium uppercase">
              Type
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <input
                className="w-4 accent-black focus:accent-black"
                id="Topwear"
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Topwear"}
              />
              <Label htmlFor="Topwear">Topwear</Label>
            </div>

            <div className="flex items-center gap-2">
              <input
                className="w-4 accent-black focus:accent-black"
                id="Bottomwear"
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Bottomwear"}
              />
              <Label htmlFor="Bottomwear">Bottomwear</Label>
            </div>

            <div className="flex items-center gap-2">
              <input
                className="w-4 accent-black focus:accent-black"
                id="Winterwear"
                type="checkbox"
                onChange={toggleSubCategory}
                value={"Winterwear"}
              />
              <Label htmlFor="Winterwear">Winterwear</Label>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base gap-5 sm:text-2xl mb-4">
          <Title text1={"All"} text2={"Collection"} />
          {/* PRODUCT SORT */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border px-2 text-sm border-gray-300 text-gray-600 rounded"
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* MAP PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index + item}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
