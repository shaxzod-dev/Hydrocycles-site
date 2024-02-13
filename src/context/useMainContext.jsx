import { createContext, useEffect, useReducer } from "react";
import { useReduce } from "../reduce/store";
import { ADD_TO_CARD, REMOVE_FROM_CARD } from "../reduce/type";

export const MainContext = createContext(null);

export function MainContextContainer({ children }) {
  const startState = {
    cardItems: JSON.parse(localStorage.getItem("cardItems")) || [],
  };
  const [state, dispatch] = useReducer(useReduce, startState);
  const addToCard = (data) => dispatch({ type: ADD_TO_CARD, payload: data });
  console.log(state);
  const removeFromCard = (id) =>
    dispatch({ type: REMOVE_FROM_CARD, payload: id });
  useEffect(() => {
    localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
  }, [state.cardItems]);
  return (
    <MainContext.Provider
      value={{ addToCard, removeFromCard, cardItems: state.cardItems }}
    >
      {children}
    </MainContext.Provider>
  );
}
