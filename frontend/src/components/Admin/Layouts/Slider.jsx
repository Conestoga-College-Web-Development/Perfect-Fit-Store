import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id='sidebar' className='tm-sidebar-left uk-background-default'>
      <ul className='uk-nav uk-nav-default'>
        <li className='uk-nav-header'>Main Pages</li>
        <li>
          <Link to='/admin/category'>Category</Link>
        </li>
        <li>
          <Link to='/admin/product'>Products</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
