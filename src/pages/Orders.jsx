import Title from "@/components/Title";
import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"my"} text2={"orders"} />
      </div>

      <div className="">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index + item._id}
            className="py-4 border-t last:border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="text-sm sm:text-lg font-medium">{item.name}</p>
                <div className="flex items-center gap-5 mt-2 text-gray-500">
                  <p className="font-medium">
                    {currency}
                    {item.price}
                  </p>
                  <p className="border rounded-sm sm:px-3 px-2 sm:py-1 bg-slate-50">
                    {item.size}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
