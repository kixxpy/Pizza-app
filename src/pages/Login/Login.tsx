import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { SyntheticEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../../helpers/API';

export interface LoginForm {
	email: {
		value: string;
	};
	password: {
		value: string;
	};
}

const Login = () => {
	const [error, setError] = useState<string | null>();

	const submit = async (e: SyntheticEvent) => {
		e.preventDefault();
		setError(null)
		const target = e.target as typeof e.target & LoginForm;
		const { email, password } = target;
		await sentLogin(email.value, password.value);
	};

	const sentLogin = async (email: string, password: string) => {
		try {
			const { data } = await axios.post(`${PREFIX}/auth/login`, {
				email,
				password,
			});
			console.log(data);
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.response?.data.message);
			}
		}
	};

	return (
		<div className={styles['login']}>
			<Headling>Вход</Headling>
			{error && <div className={styles['error']}>Неправильный email или password</div>}
			<form className={styles['form']} onSubmit={submit}>
				<div className={styles['field']}>
					<label htmlFor="email">Ваш email</label>
					<Input className={styles['input']} id="email" name="email" placeholder="Email" />
				</div>
				<div className={styles['field']}>
					<label htmlFor="password">Ваш пароль</label>
					<Input
						className={styles['input']}
						id="password"
						type="password"
						name="password"
						placeholder="Пароль"
					/>
				</div>
				<Button className={styles['btn']} appeareance="big">
					Вход
				</Button>
			</form>
			<div className={styles['links']}>
				<div>Нет акканута?</div>
				<Link to="/auth/register">Зарегистрироваться</Link>
			</div>
		</div>
	);
};

export default Login;
