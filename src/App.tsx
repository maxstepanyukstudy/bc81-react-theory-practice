import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Welcome to React</h1>
        <p>
          This is JSX — it looks like HTML, but it's not quite the same. It has
          its own rules!
        </p>
        {/* self closing tags: */}
        <img src="" alt="" />
        <input type="text" />
        {/* atribute names can be diff: */}
        <label htmlFor="login">
          <input id="login" />
        </label>
      </div>
      {/* use react fragment */}
      <p>second tag</p>
    </>
  );
}

export default App;
