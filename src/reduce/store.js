import {
  ADD_ONE,
  ADD_TO_CARD,
  ADD_TO_LIKE,
  REMOVE_FROM_CARD,
  REMOVE_FROM_LIKE,
  REMOVE_ONE,
} from "./type";

export function useReduce(state, action) {
  switch (action.type) {
    case ADD_TO_CARD:
      return {
        ...state,
        cardItems: [
          ...state.cardItems,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    case REMOVE_FROM_CARD:
      return {
        ...state,
        cardItems: state.cardItems.filter((el) => el.id !== action.payload),
      };
    case ADD_TO_LIKE:
      return {
        ...state,
        likeItems: [
          ...state.likeItems,
          {
            ...action.payload,
          },
        ],
      };
    case REMOVE_FROM_LIKE:
      return {
        ...state,
        likeItems: state.likeItems.filter((el) => el.id !== action.payload),
      };
    case ADD_ONE:
      return {
        ...state,
        cardItems: state.cardItems.map((el) =>
          el.id == action.payload
            ? {
                ...el,
                quantity: el.quantity + 1,
              }
            : el
        ),
      };
    case REMOVE_ONE:
      return {
        ...state,
        cardItems: state.cardItems.map((el) =>
          el.id == action.payload
            ? {
                ...el,
                quantity: el.quantity - 1,
              }
            : el
        ),
      };
    default:
      console.log("default");
  }
}
