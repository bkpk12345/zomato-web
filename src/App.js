import FoodCard from "./components/FoodCard/FoodCard";
import Header from "./components/header/header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <img className="header-img" src="/assets/meals.jpeg" alt="bg-img" />
      <FoodCard />
    </div>
  );
}

export default App;
