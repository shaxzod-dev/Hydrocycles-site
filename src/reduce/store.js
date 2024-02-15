import {
  ADD_TO_CARD,
  ADD_TO_LIKE,
  REMOVE_FROM_CARD,
  REMOVE_FROM_LIKE,
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
    default:
      console.log("default");
  }
}
