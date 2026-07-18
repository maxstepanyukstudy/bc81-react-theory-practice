import "./App.css";
import Product from "../Product/Product";
import Tests from "../Tests/Tests";
import Mailbox from "../Mailbox/Mailbox";
import Books from "../Books/Books";
import AlertCssInline from "../Alerts/AlertCssInline/AlertCssInline";
import AlertCssClass from "../Alerts/AlertCssClass/AlertCssClass";
import AlertCssModule from "../Alerts/AlertCssModule/AlertCssModule";
import AlertCssModuleClsx from "../Alerts/AlertCssModuleClsx/AlertCssModuleClsx";

function App() {
  return (
    <main>
      <section>
        <AlertCssModuleClsx />
        <AlertCssModuleClsx type="success" />
        <AlertCssModuleClsx type="error" />
      </section>
      <hr />
      <section>
        <h2>Css methods</h2>
        <AlertCssInline />
        <AlertCssClass />
        <AlertCssModule />
      </section>
      <section>
        <h2>Books of the week</h2>
        <Books />
      </section>
      <hr />
      <section>
        <h2>Mailboxes</h2>
        <Mailbox
          username="Alice"
          messages={["hello Alice", "call me when you can"]}
          unreadMessages={["call me when you can"]}
        />
        <Mailbox username="Bob" messages={[]} unreadMessages={[]} />
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
