import "./App.css";
import { useState } from "react";
import items from "./components/data";
import Menu from "./components/Menu";
import Catagories from "./components/Catagories";

// 1. filter catagory from data.js file
const filterCategories = [
  "all",
  ...new Set(items.map((item) => item.category)),
];

//console.log(filterCategories);

// clean duplicate new Set()

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const [categories, setCatagories] = useState(filterCategories);

  //function filterItems looking for string catagory
  //iterate the original menu item -> setmenuitem
  //always work with the original list, beacuse it won't change
  const filterItems = (catagory) => {
    //if the item category match with catagory, set setMenuItems with newItem
    //set if catagories = all, set back to defult
    if (catagory === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === catagory);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section>
        <div className="menu section">
          <h2 className="title">Our Roses Menu</h2>
          <div className="underline"></div>
        </div>
        <Catagories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
