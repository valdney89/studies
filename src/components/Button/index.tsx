import { ReactElement } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    children: ReactElement | string;
    type?: 'submit' | 'reset' | 'button';
    clickEmmiter?: () => void;
}

export default function Button({children, type = 'button', clickEmmiter}: ButtonProps) {
  return (
    <button 
    onClick={clickEmmiter}
        type={type}
        className={styles.botao}
    >{children}</button>
  )
}
