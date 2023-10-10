import FoodComponent from './components/FoodComponent';
import { useState } from "react"
import MenuData from './data/MenuData';

function App() {

  const [foodData,setFoodData] = useState(MenuData)
  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <FoodComponent/>
    </div>
  );
}

export default App;