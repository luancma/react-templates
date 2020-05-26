import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./styles.css";
import { removeItem } from "../../store/modules/shelves/reducer";

export default function ListItems() {
  const dispatch = useDispatch();
  const listItems = useSelector((state) => state.shelves.items);

  return (
    <div>
      <h3>List of items</h3>

      {listItems.map((item) => (
        <div className="item-wrapper">
          <div className="item-wrapper-body">
            <p>id: {item.id}</p>
            <p>name: {item.name}</p>
          </div>
          <div className="item-wrapper-aside">
            <button onClick={(e) => dispatch(removeItem({ id: item.id }))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
