import React from "react";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";

import store from "./store";
import CreateItem from "./components/CreateItem";
import ListItems from "./components/ListItems";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <CreateItem />
      <ListItems />
    </Provider>
  );
}

export default App;
