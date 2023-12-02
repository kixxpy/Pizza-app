import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({ children, className, appeareance = 'small', ...props }: ButtonProps) {
	return (
		<>
			<button
				onClick={() => console.log('button')}
				className={cn(styles['button'], styles['accent'], className, {
					[styles['small']]: appeareance === 'small',
					[styles['big']]: appeareance === 'big',
				})}
				{...props}>
				{children}
			</button>
		</>
	);
}

export default Button;
