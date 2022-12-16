import FoodAction from "./FoodAction";
import "./FoodItem.css";
const FoodItem = (props) => {
  const data = props.data;
  return (
    <div className="food-item">
      <div>
        <div className="food-name">{data.name}</div>
        <div className="food-desc">{data.description}</div>
        <div className="food-price">${data.price}</div>
      </div>
      <div>
        <FoodAction />{" "}
      </div>
    </div>
  );
};

export default FoodItem;
