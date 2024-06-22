// import { FC } from "react";
import { ButtonProps } from "./Button.props";
import classNames from "classnames";

// export const ButtonAlt: FC<ButtonProps> = ({ children, ...props }) => {
//   return (
//     <button
//       {...props}
//       className="ease-in-out duration-300
// 			bg-amber-300 
// 			p-2.5
// 			text-base	 
// 			rounded 
// 			text-slate-900 
// 			font-bold 
// 			hover:bg-amber-600"
//     >
//       {children}
//     </button>
//   );
// };

const Button = ({ children, appearence = 'small', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        [
          "ease-in-out duration-300 bg-primary-default text-base rounded-full text-white  hover:bg-primary-dark",
        ],
        {
          ["normal-case px-9 py-2.5 font-normal"]: appearence === "small",
          ["uppercase px-10 py-4 font-semibold"]: appearence === "big",
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
