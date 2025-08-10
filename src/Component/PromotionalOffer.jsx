import { FiArrowRight, FiClock, FiStar } from "react-icons/fi";
import { FaFire } from "react-icons/fa";

 export const PromotionalOffer = () => {
  return (
    <div className="max-w-4xl mx-auto bg-[#1D232A] rounded-xl overflow-hidden shadow-lg border border-amber-500/30">
      {/* Header with Ribbon */}
      <div className="relative bg-gradient-to-r from-amber-600 to-amber-800 py-3 px-6 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <FaFire className="text-yellow-300" /> TODAY'S SPECIAL
          </h3>
          <div className="flex items-center gap-1 bg-black/20 px-3 py-1 rounded-full">
            <FiClock className="text-amber-200" />
            <span className="text-sm">Limited Time</span>
          </div>
        </div>
        <div className="absolute -bottom-5 right-6 bg-amber-500 text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg">
          30% OFF
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row">
        {/* Food Image */}
        <div className="md:w-1/3 h-48 md:h-auto bg-gray-800 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWNpYWwlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Special Dish"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Offer Details */}
        <div className="md:w-2/3 p-6">
          <h2 className="text-2xl font-bold text-amber-400 mb-2">
            Truffle Infused Pasta
          </h2>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-amber-400">
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
              <FiStar className="fill-current" />
            </div>
            <span className="text-gray-400 text-sm">(48 reviews)</span>
          </div>

          <p className="text-gray-300 mb-4">
            Indulge in our chef's special handmade pasta with black truffle
            sauce, wild mushrooms, and parmesan crisp. Served with garlic bread.
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-400 line-through mr-2">$24.99</span>
              <span className="text-2xl font-bold text-amber-400">$17.49</span>
            </div>
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-2 px-6 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all flex items-center gap-2">
              Order Now{" "}
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Timer */}
      <div className="bg-black/30 px-6 py-5 text-center text-sm text-amber-300">
       
      </div>
    </div>
  );
};
