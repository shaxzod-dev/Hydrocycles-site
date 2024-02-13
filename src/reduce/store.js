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
      console.log(action.payload);
      break;
    case ADD_TO_LIKE:
      console.log(action.payload);
      break;
    case REMOVE_FROM_LIKE:
      console.log(action.payload);
      break;
    default:
      console.log("default");
  }
}
