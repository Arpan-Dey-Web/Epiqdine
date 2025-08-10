import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <section className="flex items-center   h-screen p-16 ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <Link to="/">
              <button className="details-button mt-5">Back To Home</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
