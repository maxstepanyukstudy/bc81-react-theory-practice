import "./App.css";
import Product from "./Product";
import Tests from "./Tests";

function App() {
  return (
    <>
      <div>
        <h1>Products</h1>

        <Product name="Tacos With Lime" price={10.99} />
        <Product name="Fries and Burger" price={12.99} />
        <Product name="Борщ" price={14.99} />
      </div>
      <hr />
      <div>
        <Tests />
      </div>
    </>
  );
}

export default App;
