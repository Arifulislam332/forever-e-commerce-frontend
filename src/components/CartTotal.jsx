import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
import Title from "./Title";
import { Separator } from "./ui/separator";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"Cart"} text2={"Totals"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>

        <Separator />

        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {delivery_fee}.00
          </p>
        </div>

        <Separator />

        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
