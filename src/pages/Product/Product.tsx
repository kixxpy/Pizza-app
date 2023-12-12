import { useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';

const Product = () => {
	const data = useLoaderData() as Product;
	return (
		<>
			<div>product - {data.name}</div>
			<div>product - {data.price}</div>
		</>
	);
};

export default Product;
