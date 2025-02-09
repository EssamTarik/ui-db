import classNames from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';
import styles from './styles.module.css';

const Popover = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.popover, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Popover.displayName = 'Popover';

export default Popover;
