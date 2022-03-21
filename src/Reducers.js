import initialState from "./Store"
export default function Reducers(state = initialState, action) {
  switch (action.type){
      case "counter/increment": {
          console.log("dispatch inc function",state.value)
        return {...state, value: state.value + 1}}
      case "counter/decrement":{
        console.log("dispatch dec function",state.value);
        return {...state, value: state.value - 1}
      }
      default :
        return state
  }
}

