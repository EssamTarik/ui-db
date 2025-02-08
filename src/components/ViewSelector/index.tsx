import { NavLink, NavLinkProps, useSearchParams } from 'react-router';
import classNames from 'classnames';
import TableIcon from '../ui/icons/Table';
import GridIcon from '../ui/icons/Grid';
import styles from './styles.module.css';

const ViewSelector = () => {
  const [searchParams] = useSearchParams();
  const getClasses: NavLinkProps['className'] = ({ isActive }) => {
    return classNames(styles.link, { [styles.active]: isActive });
  };

  const linkSearchParams = searchParams.toString();

  return (
    <>
      <NavLink
        className={getClasses}
        to={{ pathname: '/', search: linkSearchParams }}
      >
        <TableIcon />
      </NavLink>

      <NavLink
        className={getClasses}
        to={{ pathname: '/grid', search: linkSearchParams }}
      >
        <GridIcon />
      </NavLink>
    </>
  );
};

export default ViewSelector;
