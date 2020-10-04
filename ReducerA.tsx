const initialState = { countA: 0 };

type ACTIONTYPE =
  | { type: "incA" }
  | { type: "decA" };



  export interface myState {
    countA:number,
    
    
}

export function reducerA(state:myState= initialState, action: ACTIONTYPE):myState{
  switch (action.type) {
    case "incA":
      return { countA: state.countA + 1};
    case "decA":
      return { countA: state.countA -1 };
    default:
        return state;
  }
}
