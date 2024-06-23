import Heading from "../../components/Heading/Headind";
import Search from "../../components/Search/Search";
export function Menu() {
  return (
    <>
      <div className="flex justify-between">
        <Heading>Menu</Heading>
        <Search placeholder="Введите блюдо или состав"></Search>
      </div>
    </>
  );
}
