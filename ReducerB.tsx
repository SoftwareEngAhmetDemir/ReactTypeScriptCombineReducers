import { type } from "os";

const initialState = { countB: 0 };
export type myStateB ={
    countB:number,
    
    
}

type ACTIONTYPE =
  | { type: "incB" }
  | { type: "decB" };

export function reducerB(state:myStateB= initialState, action: ACTIONTYPE):myStateB {
  switch (action.type) {
    case "incB":
      return { countB: state.countB + 1 };
    case "decB":
      return { countB: state.countB - 1 };
    default:
      return state
  }
}