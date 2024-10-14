import { assets } from "@/assets/assets";
import CartTotal from "@/components/CartTotal";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { ShopContext } from "@/context/ShopContext";
import { useContext, useState } from "react";

const PlaceOrder = () => {
  const { navigate } = useContext(ShopContext);
  const [method, setMethod] = useState("stripe");
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 px-3.5 py-1.5 rounded w-full"
            placeholder="First name"
          />
          <input
            type="text"
            className="border border-gray-300 px-3.5 py-1.5 rounded w-full"
            placeholder="Last name"
          />
        </div>
        <input
          type="email"
          className="border border-gray-300 px-3.5 py-1.5 rounded w-full"
          placeholder="example@gmail.com"
        />
        <input
          type="text"
          className="border border-gray-300 px-3.5 py-1.5 rounded w-full"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 px-3.5 py-1.5 rounded w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="border border-gray-300 px-3.5 py-1.5 rounded w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            className="border border-gray-300 px-3.5 py-1.5 rounded w-full"
            placeholder="Zipcode"
          />
          <input
            type="text"
            className="border border-gray-300 px-3.5 py-1.5 rounded w-full"
            placeholder="Country"
          />
        </div>
        <input
          type="number"
          className="border border-gray-300 px-3.5 py-1.5 rounded w-full"
          placeholder="Phone"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"payment"} text2={"method"} />

          {/* PAYMENT METHOD SELECTION */}
          <div className="flex gap-3 flex-col xl:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border rounded cursor-pointer p-2 px-3"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-600" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border rounded cursor-pointer p-2 px-3"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-600" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border rounded cursor-pointer p-2 px-3"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-600" : ""
                }`}
              ></p>
              <p className="h-5 mx-4 text-gray-500 text-sm font-medium uppercase">
                Cash on Delivery
              </p>
            </div>
          </div>

          <div className="w-full text-end">
            <Button
              onClick={() => navigate("/orders")}
              className={`bg-black text-sm my-8 text-center hover:bg-gray-700 uppercase rounded-none`}
            >
              Place order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
