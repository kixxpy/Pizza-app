import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/PorductCard/ProductCard';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios from 'axios'

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);

	const getProduct = async () => {
		try {
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
		} catch (e) {
				console.error(e);
				return;
		}
		// try {
		// 	const res = await fetch(`${PREFIX}/products`);
		// 	if (!res.ok) {
		// 		return;
		// 	}
		// 	const data = (await res.json()) as Product[];
		// 	setProducts(data);
		// } catch (e) {
		// 	console.error(e);
		// 	return;
		// }
	};

	useEffect(() => {
		getProduct();
	}, []);

	return (
		<>
			<div className={styles['head']}>
				<Headling>Меню</Headling>
				<Search placeholder="Введите блюдо или состав" />
			</div>
			<div>
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
		</>
	);
}
