import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu.tsx'
import { Cart } from './pages/Cart/Cart.tsx'
import { Error } from './pages/Error/Error.tsx'
import { Layout } from './layout/Layout/Layout.tsx'
import Product from './pages/Product/Product.tsx'
import axios from 'axios'
import { PREFIX } from './helpers/API.ts'
import { AuthLayout } from './layout/Auth/AuthLayout.tsx'
import Login from './pages/Login/Login.tsx'
import Register from './pages/Register/Register.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				path: '/',
				element: <Menu/>
			},
			{
				path: '/cart',
				element: <Cart/>
			},
			{
				path: '/product/:id',
				element: <Product/>,
				errorElement: <>Ошибка</>,
				loader: async ({params}) => {
					const {data} = await axios.get(`${PREFIX}/products/${params.id}`);
					return data;
				}
			}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login/>
			},
			{
				path: 'register',
				element: <Register/>
			},
		]
	},
	{
		path: '*',
		element: <Error/>
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>,
);
