import { MouseEvent, useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

function App() {
  const [counter, setCounter] = useState<number>();

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <div className="bg-slate-500 w-full h-96 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline text-rose-300">
        Hello world!
      </h1>
      <Button appearence="small" onClick={addCounter}>
        Button
      </Button>
      <Button appearence="big" onClick={addCounter}>
        Button
      </Button>
      <Input placeholder="E-mail"></Input>
      <div>
        <a href="/">Menu</a>
        <a href="/cart">Cart</a>
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
