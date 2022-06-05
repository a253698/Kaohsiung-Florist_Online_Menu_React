import React from "react";

const Catagories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        //map out all the button
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
    // 1. filter catagory from data.js file

    //this function is not sync
    /*
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button>
      <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
    </div>*/
  );
};

export default Catagories;
