import "./App.css";
import Product from "./Product";
import Tests from "./Tests";

function App() {
  return (
    <>
      <div>
        <h1>Products</h1>

        <Product
          name="Tacos With Lime"
          imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
          price={10.99}
        />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
          price={14.29}
        />
      </div>
      <hr />
      <div>
        <Tests />
      </div>
    </>
  );
}

export default App;
