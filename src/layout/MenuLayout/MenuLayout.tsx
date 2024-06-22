import { Link, Outlet } from "react-router-dom";
import Button from "../../components/Button/Button";

export function MenuLayout() {
  return (
    <div className="flex h-dvh w-full bg-white">
      <div className="p-7 border border-transparent border-r-separator flex flex-col ">
        <div className="flex flex-col mb-12">
          <img
            className="w-24 h-24 mb-8 drop-shadow-md"
            src="./Avatar.png"
            alt="avatar"
          />
          <div className="font-bold">You_No</div>
          <div className="mt-2">younofl312@gmail.com</div>
        </div>
        <div className="flex flex-col gap-8">
          <Link
            className="ease-in-out duration-300 flex items-center gap-3 hover:text-primary-default"
            to="/"
          >
            <img src="./menuBook.svg" alt="Menu-icon" />
            Menu
          </Link>
          <Link
            className="ease-in-out duration-300 flex items-center gap-3 hover:text-primary-default"
            to="/cart"
          >
            <img src="./shoppingCart.svg" alt="Cart-icon" />
            Cart
          </Link>
        </div>

        <Button className="mt-auto">
          <img src="./Logout.svg" alt="Logout-icon" />
          Выйти
        </Button>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
