import "./App.css";
import Product from "./Product";
import Tests from "./Tests";

function App() {
  return (
    <>
      <div>
        <h1>Products</h1>

        <Product />
        <Product />
        <Product />
      </div>
      <hr />
      <div>
        <Tests />
      </div>
    </>
  );
}

export default App;
