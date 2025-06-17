import React, { useState } from "react";
import { Link } from "react-router";
import Table from "./Table";
import NofoodAvailable from "./NofoodAvailable";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Error from "./Error";

const AllFoods = () => {
  const [searchItem, setSearchItem] = useState("");
  // data load using tanstack Query
  const { isPending, isError, data } = useQuery({
    queryKey: ["allfoodData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/addfood/all-food");
      return res.json();
    },
  });

  if (isPending) return <Loading />;
  if (isError) return <Error />;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchItem) {
      const filteredData = allFoodData.filter((item) =>
        item.newFoodName.toLowerCase().includes(searchItem.toLowerCase())
      );
      settableData(filteredData);
    } else {
      settableData(allFoodData);
    }
  };

  return (
    <div>
      <div className="flex justify-center py-5  my-10 rounded-2xl">
        <Link to={"/"} className="flex items-center gap-2 ml-2">
          <div className="w-10 h-10 object-center hidden md:block">
            <img src="/public/logo.png" className="rounded-full" alt="logo" />
          </div>
          <span className="text-2xl md:text-3xl font-bold">
            <span className="text-yellow-600">Epiq</span>
            <span className="text-yellow-300">Dine</span>
          </span>
        </Link>
      </div>
      {/* search button  */}
      <div className="my-10  text-center  ">
        <input
          onChange={(e) => {
            setSearchItem(e.target.value);
            handleSearch(e);
          }}
          type="text"
          name="searchfood"
          placeholder="Search Foods"
          className="input cursor-pointer "
        />
      </div>

      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          {data.map((table, index) => (
            <Table key={index} table={table}></Table>
          ))}
        </div>
      ) : (
        <NofoodAvailable />
      )}
    </div>
  );
};

export default AllFoods;
