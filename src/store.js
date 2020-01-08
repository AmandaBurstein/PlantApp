import { createStore } from "redux";
import * as R from "ramda";

let initialState = {
  plants: []
};

let reducer = (state, action) => {
  //   if (action.type === "add-plant") {
  //     return {
  //       ...state,
  //       plants: state.plants.concat({
  //         name: action.name,
  //         location: action.location,
  //         species: action.species
  //       })
  //     };
  //   }

  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
