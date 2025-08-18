import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resObj from "../utils/cart";


const Body = () => {

  const [listOfRestaurant,setListOfRestaurant] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resObj.filter((res) => res.rating > 4);
            setListOfRestaurant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
