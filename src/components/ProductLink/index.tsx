import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router';
import getProductRoute from '../../utils/nav/getProductRoute';

interface Props extends Omit<LinkProps, 'to'> {
  id: string;
}

const ProductLink = forwardRef<HTMLAnchorElement, Props>(
  ({ id, children, ...props }, ref) => {
    return (
      <Link ref={ref} to={getProductRoute(id)} {...props}>
        {children}
      </Link>
    );
  }
);

export default ProductLink;
