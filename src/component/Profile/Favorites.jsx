import React from "react";
import ResturantCard from "../Resturant/ResturantCard";

const Favorites = () => {
  return (
    <div>
      <h1 className="py-5 text-xl font-semibold text-center">My Favorites</h1>

      <div className="flex flex-wrap gap-2 justify-center">
        {[1, 1, 1, 1].map((item) => (
          <ResturantCard />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
