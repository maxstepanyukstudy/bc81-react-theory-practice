import "./App.css";
import Product from "../Product/Product";
import Tests from "../Tests/Tests";
import Mailbox from "../Mailbox/Mailbox";

function App() {
  return (
    <main>
      <section>
        <h2>Mailboxes</h2>
        <Mailbox
          username="Alice"
          messages={["hello Alice", "call me when you can"]}
        />
        <Mailbox username="Bob" messages={[]} />
      </section>
      <hr />
      <section>
        <h2>Products</h2>

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
      </section>
      <hr />
      <section>
        <h2>Tests </h2>
        <Tests />
      </section>
    </main>
  );
}

export default App;
