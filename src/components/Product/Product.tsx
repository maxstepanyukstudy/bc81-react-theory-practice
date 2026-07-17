interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
}

export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price} credits</p>
      <img src={imgUrl} alt={name} width="480" />
    </div>
  );
}
