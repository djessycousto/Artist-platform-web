import React from "react";

const Categories = ({ category, filterItem }) => {
  return (
    <>
      {category.map((categoryBtn) => {
        return (
          <button
            onClick={() => {
              filterItem(categoryBtn);
            }}
            key={categoryBtn}
          >
            {categoryBtn}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
