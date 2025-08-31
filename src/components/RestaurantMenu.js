import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // 👈 to read :id from URL
import Shimmer from "./Shimmer";
import { RESTAURANT_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams(); // 👈 restaurant id from /restaurant/:id
  const [resInfo, setResInfo] = useState(null);
  // console.log("id ids", resId);
  useEffect(() => {
    fetchMenu();
  }, [resId]); // refetch if id changes

  const fetchMenu = async () => {
    const apiUrl = `${RESTAURANT_URL}&restaurantId=${resId}`; // 👈 append restaurantId
    const data = await fetch(apiUrl);
    const json = await data.json();
    // console.log("Menu JSON", json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log("itemCards", itemCards);

  console.log("resInfo", resInfo);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
