// import DateCounter from "./DateCounter.js";

// export default function App() {
//   return (
//     <div>
//       <DateCounter />
//     </div>
//   );
// }
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initalState = {
  questions: [],
  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Unknown type");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      // .catch((err) => console.error(err.message));
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Questions?</p>
      </Main>
    </div>
  );
}
