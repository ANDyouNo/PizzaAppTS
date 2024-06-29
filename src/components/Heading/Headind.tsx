import { HeadingProps } from "./Heading.props";
import classNames from "classnames";
function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h1 className={classNames(className, "font-bold text-black text-4xl")} {...props}>{children}</h1>
  );
};

export default Heading;
