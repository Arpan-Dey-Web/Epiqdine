import React, { useContext } from "react";
import like1 from "../assets/like1.jpg";
import like2 from "../assets/like2.jpg";
import like3 from "../assets/like3.jpg";
import like4 from "../assets/like4.jpg";
import like5 from "../assets/like5.jpg";
import { ThemeContext } from "@emotion/react";
import Marquee from "react-fast-marquee";
const CustomeerReview = () => {
  const controller = useContext(ThemeContext);
  const { theme } = controller;
  return (
    <section className="my-10 ">
      <div className=" text-center mt-5 mb-10">
        <h1
          className={
            theme == "dark"
              ? "text-2xl md:text-4xl font-extrabold text-center leading-tight text-indigo-700"
              : "text-yellow-400 text-2xl md:text-4xl font-extrabold text-center logoName leading-tight"
          }
        >
          Our Happy Customer Reviews
        </h1>
        <p className="pt-4 w-11/12 mx-auto text-center  font-thin text-orange-400">
          At the heart of every dish we serve is a story — one told best by
          those who’ve tasted the love we put on every plate. From cozy dinners
          to joyful celebrations, our guests leave not just full, but fulfilled.
          Here’s what our cherished customers are saying about their flavorful
          experiences with us.
        </p>
      </div>

      <Marquee pauseOnHover speed={50}>
        <div className="flex">
          <div className="flex">
            {/* Review 1 */}
            <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y mr-4 border border-amber-500/30 rounded-2xl shadow-xl">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src={like1}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full border border-amber-500/30 p-1"
                  />
                  <div>
                    <h4 className="font-bold text-yellow-400">Priya Sharma</h4>
                    <span className="text-xs text-gray-400">2 days ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 fill-current text-yellow-400"
                    viewBox="0 0 512 512"
                  ></svg>
                  <span className="text-xl font-bold text-yellow-400">4.9</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p className="text-orange-400">
                  The biryani melted in my mouth like a poem composed in saffron
                  and spice.
                </p>
                <p className="text-orange-400">
                  Each bite told a tale of tradition, warmth, and soulful care.
                  Pure delight!
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y mr-4 border border-amber-500/30 rounded-2xl shadow-xl">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src={like2}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full border border-amber-500/30 p-1"
                  />
                  <div>
                    <h4 className="font-bold text-yellow-400">Ravi Malhotra</h4>
                    <span className="text-xs text-gray-400">1 week ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 fill-current text-yellow-400"
                    viewBox="0 0 512 512"
                  ></svg>
                  <span className="text-xl font-bold text-yellow-400">4.6</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p className="text-orange-400">
                  The paneer tikka danced with smoky elegance on my tongue.
                </p>
                <p className="text-orange-400">
                  A symphony of flavors that warmed both belly and soul.
                </p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y mr-4 border border-amber-500/30 rounded-2xl shadow-xl">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src={like3}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full border border-amber-500/30 p-1"
                  />
                  <div>
                    <h4 className="font-bold text-yellow-400">Fatima Noor</h4>
                    <span className="text-xs text-gray-400">3 days ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 fill-current text-yellow-400"
                    viewBox="0 0 512 512"
                  ></svg>
                  <span className="text-xl font-bold text-yellow-400">5.0</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p className="text-orange-400">
                  The mango lassi? Like sunshine spun into silk, refreshing and
                  divine.
                </p>
                <p className="text-orange-400">
                  I left the café with a full heart and a smiling soul.
                </p>
              </div>
            </div>

            {/* Review 4 */}
            <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y mr-4 border border-amber-500/30 rounded-2xl shadow-xl">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src={like4}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full border border-amber-500/30 p-1"
                  />
                  <div>
                    <h4 className="font-bold text-yellow-400">Karan Desai</h4>
                    <span className="text-xs text-gray-400">5 hours ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 fill-current text-yellow-400"
                    viewBox="0 0 512 512"
                  ></svg>
                  <span className="text-xl font-bold text-yellow-400">4.7</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p className="text-orange-400">
                  The garlic naan was a warm, soft cloud of flavor sent from
                  heaven's tandoor.
                </p>
                <p className="text-orange-400">
                  I'd travel miles for that taste again. A masterpiece of
                  simplicity.
                </p>
              </div>
            </div>

            {/* Review 5 */}
            <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y mr-4 border border-amber-500/30 rounded-2xl shadow-xl">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src={like5}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full border border-amber-500/30 p-1"
                  />
                  <div>
                    <h4 className="font-bold text-yellow-400">Neha Verma</h4>
                    <span className="text-xs text-gray-400">6 days ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 fill-current text-yellow-400"
                    viewBox="0 0 512 512"
                  ></svg>
                  <span className="text-xl font-bold text-yellow-400">4.8</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p className="text-orange-400">
                  The dessert platter sang of cardamom dreams and rosewater
                  nostalgia.
                </p>
                <p className="text-orange-400">
                  A sweet epilogue to an unforgettable feast. I'm still
                  swooning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default CustomeerReview;
