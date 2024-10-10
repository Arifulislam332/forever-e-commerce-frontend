import { assets } from "@/assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Link to="/">
            <img src={assets.logo} alt="" className="mb-3 w-32" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur sint laboriosam saepe perspiciatis consectetur ad illum
            laudantium quidem id amet!
          </p>
        </div>

        <div>
          <p className="text-xl text-gray-700 font-medium mb-5 uppercase">
            Company
          </p>
          <ul className="flex flex-col text-sm gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/collection">Collection</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="uppercase text-gray-700 text-xl font-medium mb-5">
            Get in touch
          </p>

          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-123-234-324</li>
            <li>contact@forevercompany.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="bg-gray-600" />
        <p className="py-5 text-sm text-center">
          &copy;Copyright 2024 @forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
