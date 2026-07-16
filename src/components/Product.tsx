interface ProductProps {
  name: string;
  price: number;
}

export default function Product(props: ProductProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: {props.price} credits</p>
    </div>
  );
}
