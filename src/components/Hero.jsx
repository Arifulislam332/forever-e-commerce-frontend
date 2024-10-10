import { assets } from "@/assets/assets";

const Hero = () => {
  return (
    <div className=" flex flex-col sm:flex-row border border-gray-400">
      {/* HERO LEFT SIDE */}

      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <span className="w-8 md:w-11 h-[2px] bg-[#414141] "></span>
            <p className="font-medium text-sm md:text-base uppercase">
              Our Bestsellers
            </p>
          </div>

          <h1 className="prata__regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-2">
            <span className="font-medium text-sm md:text-base uppercase">
              Shop now
            </span>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] "></p>
          </div>
        </div>
      </div>
      {/* HERO rIGHT SIDE */}

      <img
        src={assets.hero_img}
        className="w-full sm:w-1/2"
        alt="Best Sellers"
      />
    </div>
  );
};

export default Hero;
