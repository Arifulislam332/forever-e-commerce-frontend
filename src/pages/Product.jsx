import { assets } from "@/assets/assets";
import RelatedProducts from "@/components/RelatedProducts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShopContext } from "@/context/ShopContext";
import { Dot } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* PRODUCT DATA */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* PRODUCT IMAGES */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <Button
                  onClick={() => setSize(item)}
                  variant="outline"
                  key={index}
                  className={`${item === size ? "border-orange-500" : ""}`}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
          <Button className="bg-black hover:bg-black uppercase rounded-none text-sm active:bg-gray-700">
            Add to cart
          </Button>
          <Separator className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p className="flex items-center">
              <Dot size={30} />
              100% Original product.
            </p>
            <p className="flex items-center gap-1">
              <Dot size={30} />
              Cash on delivery is available on this product.
            </p>
            <p className="flex items-center gap-1">
              <Dot size={30} />
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>

      {/* DESCRIPTION  & REVIEW SECTION */}
      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border py-6 px-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            est nisi, id nam et modi reprehenderit numquam quae quia quod. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Est, dolorem!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            est nisi, id nam et modi reprehenderit numquam quae quia quod.
          </p>
        </div>
      </div>

      {/* DISPLAY RELATED PRODUCTS */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
