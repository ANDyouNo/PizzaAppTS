import { ProductCardProps } from "./ProductCard.props";
import { Link } from "react-router-dom";
const ProductCard = (props: ProductCardProps) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="bg-white rounded-2xl drop-shadow-md w-80">
        <div
          className="relative rounded-2xl  min-h-40"
          style={{ backgroundImage: `url('./product-demo.jpeg')` }}
        >
          <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-lg">
            {props.price}&nbsp;
            <span className="text-primary-default">₽</span>
          </div>
          <button className="absolute bottom-[-20px] right-5 bg-primary-default p-3 rounded-full ease-in-out duration-300 hover:bg-primary-dark drop-shadow-sm">
            <img src="./shoppingCartButton.svg" alt="add to cart" />
          </button>
          <div className="absolute drop-shadow-sm bottom-[-14px] left-4 bg-white py-1 px-3 rounded-full text-sm flex gap-1 justify-center items-center">
            {props.rathing}
            <img src="./star-icon.svg" alt="" />
          </div>
        </div>
        <div className="p-3">
          <div className="text-lg font-bold mt-2">{props.title}</div>
          <div className="text-sm font-light text-secondary">
            {props.description}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
