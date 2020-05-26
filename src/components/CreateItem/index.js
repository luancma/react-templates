import React, { useState } from "react";
import { uuid } from "uuidv4";
import { useDispatch } from "react-redux";
import { addNewItem } from "../../store/modules/shelves/reducer";
import "./styles.css";

export default function CreateItem() {
  const dispatch = useDispatch();

  const [items, setItems] = useState({
    name: "",
  });

  function handleChangeName(event) {
    setItems({
      ...items,
      [event.target.name]: event.target.value,
    });
  }

  async function handleCreateNewItem(event) {
    event.preventDefault();
    const newUser = {
      id: uuid(),
      name: items.name,
    };
    dispatch(addNewItem({ id: newUser.id, name: items.name }));
  }

  return (
    <div className="form-content">
      <form onSubmit={handleCreateNewItem} className="form-message">
        <label>Item description:</label>
        <textarea
          rows="4"
          cols="80"
          type="text"
          name="name"
          value={items.name}
          onChange={handleChangeName}
        />
        <input
          type="submit"
          value="Enviar"
          disabled={items.name.trim() === ""}
        />
      </form>
    </div>
  );
}
