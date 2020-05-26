import { createStore, combineReducers } from "redux";
import Reactotron from "../config/ReactotronConfig";
import shelves from "./modules/shelves/reducer";

const rootReducer = combineReducers({
  shelves,
});

const store = createStore(rootReducer, Reactotron.createEnhancer());

export default store;
