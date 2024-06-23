import { forwardRef } from "react";

import classNames from "classnames";
import { SearchProps } from "./Search.props";

const Input = forwardRef<HTMLInputElement, SearchProps>(function Input(
  { isValid = true, ...props },
  ref
) {
  return (
    <div className="relative">
      <input
        {...props}
        ref={ref}
        className={classNames(
          "bg-zinc-50 border text-sm border-separator min-w-72 rounded-lg font-semibold px-11 py-4 focus:outline-none",
          {
            "border border-red-600": !isValid,
            "border-zinc-700": isValid,
          }
        )}
      />
			<img className="absolute left-3 top-4" src="./search.svg" alt="" />
    </div>
  );
});

export default Input;
