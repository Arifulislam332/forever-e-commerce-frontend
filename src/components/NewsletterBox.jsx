import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-700">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis omnis
        nemo laboriosam deleniti officia mollitia.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6"
      >
        <Input
          className="w-full sm:flex-1 outline-none border-2 border-gray-200 focus-visible:ring-0"
          placeholder="Enter your email"
          type="email"
          required
        />
        <Button className="uppercase flex gap-2 items-center" type="submit">
          <Send size={18} />
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default NewsletterBox;
