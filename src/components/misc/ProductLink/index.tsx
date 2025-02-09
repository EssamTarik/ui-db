import { forwardRef } from 'react';
import { Link, LinkProps, useSearchParams } from 'react-router';
import getProductRoute from '../../../utils/nav/getProductRoute';

interface Props extends Omit<LinkProps, 'to'> {
  id: string;
}

const ProductLink = forwardRef<HTMLAnchorElement, Props>(
  ({ id, children, ...props }, ref) => {
    const [searchParams] = useSearchParams();
    return (
      <Link ref={ref} to={getProductRoute(id, searchParams)} {...props}>
        {children}
      </Link>
    );
  }
);

ProductLink.displayName = 'ProductLink';

export default ProductLink;
