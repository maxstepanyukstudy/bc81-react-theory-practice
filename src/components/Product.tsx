interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product(props: ProductProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: {props.price} credits</p>
      <img src={props.imgUrl} alt={props.name} width="320" />
    </div>
  );
}
