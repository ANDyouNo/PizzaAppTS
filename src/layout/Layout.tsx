import { Link, Outlet, useLocation, NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect } from "react";
import classNames from "classnames";

export function Layout() {

  return (
    <div className="flex h-dvh w-full bg-white">
      <div className="p-7 border border-transparent border-r-separator flex flex-col ">
        <div className="flex flex-col mb-12">
          <img
            className="ease-in-out duration-300 w-24 h-24 mb-8 drop-shadow-md cursor-pointer hover:scale-105 hover:drop-shadow-lg"
            src="./Avatar.png"
            alt="avatar"
          />
          <div className="font-bold">You_No</div>
          <div className="mt-2 text-primary-default">younofl312@gmail.com</div>
        </div>
        <div className="flex flex-col gap-8">
          <NavLink
            className={({ isActive }) =>
              classNames(
                "ease-in-out duration-300 flex items-center gap-3 hover:text-primary-default",
                {
                  "text-primary-dark": isActive,
                }
              )
            }
            to="/"
          >
            <img src="./menuBook.svg" alt="Menu-icon" />
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              classNames(
                "ease-in-out duration-300 flex items-center gap-3 hover:text-primary-default",
                {
                  "text-primary-dark": isActive,
                }
              )
            }
            to="/cart"
          >
            <img src="./shoppingCart.svg" alt="Cart-icon" />
            Cart
          </NavLink>
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
