import { NavLink, NavLinkProps } from 'react-router';
import classNames from 'classnames';
import TableIcon from '../ui/icons/Table';
import GridIcon from '../ui/icons/Grid';
import styles from './styles.module.css';

const ViewSelector = () => {
  const getClasses: NavLinkProps['className'] = ({ isActive }) => {
    return classNames(styles.link, { [styles.active]: isActive });
  };
  return (
    <>
      <NavLink className={getClasses} to="/">
        <TableIcon />
      </NavLink>

      <NavLink className={getClasses} to="/grid">
        <GridIcon />
      </NavLink>
    </>
  );
};

export default ViewSelector;
