import { forwardRef } from "react";

import classNames from "classnames";
import { InputProps } from "./Input.props";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { isValid = true, ...props },
  ref
) {
  return (
    <input
      {...props}
      ref={ref}
      className={classNames(
        "bg-white border border-slate-300 rounded font-semibold w-full p-4 focus:outline-none",
        {
          "border border-red-600": !isValid,
          "border-zinc-700": isValid,
        }
      )}
    />
  );
});

export default Input;
