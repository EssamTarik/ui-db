import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const CTA = ({ children, className, ...props }: Props) => {
  return (
    <button className={classNames(styles.cta, className)} {...props}>
      {children}
    </button>
  );
};

export default CTA;
