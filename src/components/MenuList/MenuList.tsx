import ProductCard from '../PorductCard/ProductCard'
import { MenuListProps } from './MenuList.props'


const MenuList = ({ products }: MenuListProps) => {
  return (
	products.map((p) => (
		<ProductCard
			key={p.id}
			id={p.id}
			rating={p.rating}
			name={p.name}
			description={p.ingredients.join(', ')}
			price={p.price}
			image={p.image}
		/>
  ))
  )
}

export default MenuList