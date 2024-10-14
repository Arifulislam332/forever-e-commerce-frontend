"use-client";

import { assets } from "@/assets/assets";
import CartTotal from "@/components/CartTotal";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    getCartAmount,
    navigate,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"Your"} text2={"Card"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 border-t last:border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p className="font-medium">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="border rounded-sm sm:px-3 px-2 sm:py-1 bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                type="number"
                className="border outline-none rounded bg-slate-50 max-w-10 sm:max-w-20 px-1 mt-2 sm:px-2 py-1"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mt-2 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full flex flex-col sm:w-[450px]">
          <CartTotal />
          <div className="w-full justify-end flex text-end">
            <Button
              onClick={() => navigate("/place-order")}
              className={`bg-black text-sm my-8 text-center hover:bg-gray-700 uppercase rounded-none ${
                getCartAmount() > 0 ? "block" : "hidden"
              }`}
            >
              Process to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
