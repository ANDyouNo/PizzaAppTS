import { Link } from "react-router-dom";

export function Error() {
  return (
    <>
      <div>
        <Link to="/">Menu</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <h1>404</h1>
    </>
  );
}
