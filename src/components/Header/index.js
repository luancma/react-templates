import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
export default function Header() {
  const listItems = useSelector((state) => state.shelves.items);

  return (
    <header className="header-content">
      <div className="header-content--logo">
        <img src="https://api.adorable.io/avatars/250/abott@adorable.png" />
        <p>Facetruque</p>
      </div>
      <aside>
        <p>{listItems.length} items</p>
      </aside>
    </header>
  );
}
