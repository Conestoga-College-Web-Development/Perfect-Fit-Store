import '../../../scss/admin/notyf.min.css';
import '../../../scss/admin/style.css';
import '../../../scss/admin/uikit.min.css';
const Header = () => {
  return (
    <div data-uk-sticky className='uk-navbar-container tm-navbar-container uk-active'>
      <div className='uk-container uk-container-expand' style={{ backgroundColor: '#1e87f0' }}>
        <nav className='uk-navbar'>
          <div className='uk-navbar-left'>
            <a id='sidebar_toggle' className='uk-navbar-toggle' data-uk-navbar-toggle-icon></a>
            <a href='#' className='uk-navbar-item uk-logo' style={{ color: 'white' }}>
              Perfect Fit
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
