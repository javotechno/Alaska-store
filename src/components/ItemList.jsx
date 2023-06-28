import React from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {
  return (
    <>
      <div className="row g-3">
        {data.map((item, index) => {
          return (
            <div key={index} className="col-sm-12 col-md-6 col-xl-4">
              <Item info={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
