import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import Table from "./Table"; 
import Loading from "./Loading"; 
import Error from "./Error"; 
import NofoodAvailable from "./NofoodAvailable"; 
import logo from "../assets/logo.png"; 
import { Link } from "react-router";

const AllFoods = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Load data using TanStack Query
  const {
    isPending,
    isError,
    data: allFoodData,
  } = useQuery({
    queryKey: ["allfoodData"],
    queryFn: async () => {
      const res = await fetch(
        "https://assaignment-11-server-iota.vercel.app/addfood/all-food"
      );
      return res.json();
    },
  });

  // Update filteredData whenever searchItem or allFoodData changes
  useEffect(() => {
    if (allFoodData) {
      const result = allFoodData.filter((item) =>
        item.newFoodName.toLowerCase().includes(searchItem.toLowerCase())
      );
      setFilteredData(result);
    }
  }, [searchItem, allFoodData]);

  if (isPending) return <Loading />;
  if (isError) return <Error />;

  return (
    <div>
      {/* Logo */}
      <div className="flex justify-center py-5 my-10 rounded-2xl">
        <Link to={"/"} className="flex items-center gap-2 ml-2">
          <div className="w-10 h-10 object-center hidden md:block">
            <img src={logo} className="rounded-full" alt="logo" />
          </div>
          <span className="text-2xl md:text-3xl font-bold">
            <span className="text-yellow-600">Epiq</span>
            <span className="text-yellow-300">Dine</span>
          </span>
        </Link>
      </div>

      {/* Search Box */}
      <div className="my-10 text-center">
        <input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          type="text"
          name="searchfood"
          placeholder="Search Foods"
          className="input cursor-pointer"
        />
      </div>

      {/* Display Filtered Foods */}
      {filteredData && filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          {filteredData.map((table, index) => (
            <Table key={index} table={table} />
          ))}
        </div>
      ) : (
        <NofoodAvailable />
      )}
    </div>
  );
};

export default AllFoods;
