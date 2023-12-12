import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Headling from '../../components/Headling/Headling';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import { SyntheticEvent } from 'react';

const Login = () => {
	const submit = (e: SyntheticEvent) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<div className={styles['login']} onSubmit={submit}>
			<Headling>Вход</Headling>
			<form className={styles['form']}>
				<div className={styles['field']}>
					<label htmlFor="email">Ваш email</label>
					<Input className={styles['input']} id="email" placeholder="Email" />
				</div>
				<div className={styles['field']}>
					<label htmlFor="password">Ваш пароль</label>
					<Input
						className={styles['input']}
						id="password"
						type="password"
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
