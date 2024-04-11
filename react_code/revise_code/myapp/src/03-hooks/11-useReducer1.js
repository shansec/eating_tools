import { useReducer } from "react";

const reducer = (prevState, action) => {
  let newState = { ...prevState };
  switch (action.type) {
    case "minus":
      newState.count--;
      return newState;
    case "add":
      newState.count++;
      return newState;
    default:
      return prevState;
  }
};

const intialState = {
  count: 0,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "minus",
          });
        }}
      >
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          dispatch({
            type: "add",
          });
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
