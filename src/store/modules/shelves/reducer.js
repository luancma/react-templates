const ADD_ITEM = "users/ADD_ITEM";
const REMOVE_ITEM = "users/REMOVE_ITEM";

const initialState = {
  items: [],
};

export const addNewItem = ({ id, name }) => ({
  type: ADD_ITEM,
  payload: {
    id,
    name,
  },
});

export const removeItem = ({ id }) => ({
  type: REMOVE_ITEM,
  payload: {
    id,
  },
});

export default function reducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload.id)],
      };

    default:
      return state;
  }
}
