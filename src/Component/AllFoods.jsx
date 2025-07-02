import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Table from "./Table";
import Loading from "./Loading";
import Error from "./Error";
import NofoodAvailable from "./NofoodAvailable";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [searchTriggered, setSearchTriggered] = useState(false);

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

  // Extract unique categories for dropdown
  const categories = [
    "All",
    ...new Set(allFoodData?.map((item) => item.foodCategory)),
  ];

  // Sorting functions
  const sortFunctions = {
    "name-asc": (a, b) => a.newFoodName.localeCompare(b.newFoodName),
    "name-desc": (a, b) => b.newFoodName.localeCompare(a.newFoodName),
    "price-asc": (a, b) => Number(a.foodPrice) - Number(b.foodPrice),
    "price-desc": (a, b) => Number(b.foodPrice) - Number(a.foodPrice),
    popularity: (a, b) =>
      Number(b.purchaseFoodCount) - Number(a.purchaseFoodCount),
    default: () => 0,
  };

  // Filter and sort data
  useEffect(() => {
    if (allFoodData) {
      let result = [...allFoodData];

      // Filter by category
      if (selectedCategory !== "All") {
        result = result.filter(
          (item) => item.foodCategory === selectedCategory
        );
      }

      // Apply sorting
      const sortFunction = sortFunctions[sortOption] || sortFunctions.default;
      result.sort(sortFunction);

      setFilteredData(result);
    }
  }, [allFoodData, selectedCategory, sortOption]);

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (allFoodData) {
      let result = [...allFoodData];

      if (searchTerm.trim() !== "") {
        result = result.filter((item) =>
          item.newFoodName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Apply category filter
      if (selectedCategory !== "All") {
        result = result.filter(
          (item) => item.foodCategory === selectedCategory
        );
      }

      // Apply sorting
      const sortFunction = sortFunctions[sortOption] || sortFunctions.default;
      result.sort(sortFunction);

      setFilteredData(result);
    }
  };

  // Initialize with all data
  useEffect(() => {
    if (allFoodData && !searchTriggered) {
      setFilteredData(allFoodData);
    }
  }, [allFoodData, searchTriggered]);

  if (isPending) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="container mx-auto px-4">
      {/* Logo */}
      <div className="flex items-center justify-center my-8">
        <div className="py-5 px-10 rounded-xl shadow-xl border border-amber-500/30">
          <span className="text-2xl md:text-4xl font-extrabold text-yellow-400 tracking-wide p-4 rounded-2xl">
            Available Foods
          </span>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Search Box - Only triggers on submit */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="flex">
            <input
              type="text"
              placeholder="Search Food Here"
              className="flex-1 input border border-amber-300/30 rounded-r-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="btn bg-amber-500 text-white rounded-l-none"
            >
              Search
            </button>
          </div>
        </form>

        {/* Category Filter */}
        <select
          className="select border border-amber-300/30"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Sort Options */}
        <select
          className="select border border-amber-300/30"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Default Sorting</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="popularity">Most Popular</option>
        </select>
      </div>

      {/* Display Filtered Foods */}
      {filteredData && filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
