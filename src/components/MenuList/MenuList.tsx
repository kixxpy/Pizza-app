import ProductCard from '../PorductCard/ProductCard';
import { MenuListProps } from './MenuList.props';
import styles from './MenuList.module.css';

const MenuList = ({ products }: MenuListProps) => {
	return (
		<div className={styles['wrapper']}>
			{products.map((p) => (
				<ProductCard
					key={p.id}
					id={p.id}
					rating={p.rating}
					name={p.name}
					description={p.ingredients.join(', ')}
					price={p.price}
					image={p.image}
				/>
			))}
		</div>
	);
};

export default MenuList;
