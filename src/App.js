// import DateCounter from "./DateCounter.js";

// export default function App() {
//   return (
//     <div>
//       <DateCounter />
//     </div>
//   );
// }
import Header from "./Header";
import Main from "./Main";

export default function App() {
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
