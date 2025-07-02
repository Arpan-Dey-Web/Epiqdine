import { ThemeContext } from "@emotion/react";
import React, { useContext } from "react";

const FreequentAskedQuestion = () => {
  const controller = useContext(ThemeContext);
  const { theme } = controller;
  return (
    <div>
      <section className="border border-amber-500/30 rounded-2xl shadow-xl">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2
            className={
              theme == "dark"
                ? "text-4xl md:text-5xl font-extrabold text-center leading-tight text-indigo-700 pb-3"
                : "text-yellow-400 text-4xl md:text-5xl font-extrabold text-center logoName leading-tight pb-3"
            }
          >
            Frequently Asked Questions
          </h2>

          {/* Question 1 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title font-semibold text-yellow-400">
              Do you offer home delivery?
            </div>
            <div className="collapse-content text-sm text-orange-400">
              Yes! We deliver hot and fresh meals right to your doorstep. You
              can place an order through our website or delivery partners.
            </div>
          </div>

          {/* Question 2 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-yellow-400">
              Can I make a reservation online?
            </div>
            <div className="collapse-content text-sm text-orange-400">
              Absolutely. Visit our "Reservations" page and choose your
              preferred date, time, and number of guests. We'll handle the rest!
            </div>
          </div>

          {/* Question 3 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-yellow-400">
              What payment methods do you accept?
            </div>
            <div className="collapse-content text-sm text-orange-400">
              We accept cash, credit/debit cards, and mobile payments like bKash
              and Nagad for your convenience.
            </div>
          </div>

          {/* Question 4 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-yellow-400">
              Do you have vegetarian or vegan options?
            </div>
            <div className="collapse-content text-sm text-orange-400">
              Yes, we offer a variety of vegetarian and vegan dishes. Just look
              for the green leaf icon on our menu or ask our staff for
              recommendations.
            </div>
          </div>

          {/* Question 5 */}
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold text-yellow-400">
              How can I track my order?
            </div>
            <div className="collapse-content text-sm text-orange-400">
              After placing an order, you'll receive a tracking link via SMS or
              email to monitor your food’s journey in real time.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreequentAskedQuestion;
