const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, rating, costForTwo, image } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={image}
        width={50}
        height={100}
      />
      <h3>{name}</h3>
      <h4>{cuisine.join(",")}</h4>
      <h4>{rating}stars</h4>
      <h4>₹ {costForTwo / 10} For two</h4>
    </div>
  );
};

export default RestaurantCard;