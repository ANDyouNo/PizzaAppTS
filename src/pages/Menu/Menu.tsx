import Heading from "../../components/Heading/Headind";
import Search from "../../components/Search/Search";
import ProductCard from "../../components/ProdutCard/ProductCard";
export function Menu() {
  return (
    <>
      <div className="flex justify-between">
        <Heading>Menu</Heading>
        <Search placeholder="Введите блюдо или состав"></Search>
      </div>
			<div>
				<ProductCard
				id={1}
				title='Наслаждение'
				description='Салями, Рукола, Помидоры, Оливки'
				image={'./sdfsdf'}
				price={300}
				rathing={4.5}
				/>
			</div>
    </>
  );
}
