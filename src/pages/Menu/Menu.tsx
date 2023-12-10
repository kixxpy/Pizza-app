import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import Skeleton from '../../components/Skeketon/Skeleton';
import MenuList from '../../components/MenuList/MenuList'

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getProduct = async () => {
		try {
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(true);
		} catch (e) {
			console.error(e);
			if(e instanceof AxiosError) {
				setError(e.message);
			}
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
				{error && <>{error}</>}
				{isLoading
					? <MenuList products={products}/>
					: Array(4)
							.fill(0)
							.map((_, index) => <Skeleton key={index} />)}
			</div>
		</>
	);
}
