import heroImgPath from "../../assets/hero.png";

const techName = "React";
const imgUrl =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=640";

export default function Tests() {
  return (
    <>
      <div>
        <h1>Welcome to {techName}!</h1>
        <p>
          This is JSX — it looks like HTML, but it's not quite the same. It has
          its own rules!
        </p>
        {/* self closing tags: */}
        <img src={heroImgPath} alt="" />
        <br />
        <input type="text" />
        {/* atribute names can be diff: */}
        <label htmlFor="login">
          <input id="login" />
        </label>
        <img src={imgUrl} alt="Man, field and a mountain" width="640" />
      </div>
      {/* use react fragment */}
      <p>second tag</p>
    </>
  );
}
