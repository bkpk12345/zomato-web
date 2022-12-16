import fooddata from "../../data/dummyMeals.json";
import "./FoodCard.css";
import FoodItem from "./FoodItem";
const FoodCard = () => {
  return (
    <div className="food-card">
      {fooddata.map((data) => (
        <div key={data.id}>
          <FoodItem data={data} />
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
