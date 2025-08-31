import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId, id } = resData.info;

  const imageCdn =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  return (
    <Link to={`/restaurant/${id}`}>
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={imageCdn + cloudinaryImageId}
          width={50}
          height={100}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
