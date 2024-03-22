const Footer = () => {
  return (
    <div uk-sticky className='uk-navbar-container tm-navbar-container uk-active'>
      <div className='uk-container uk-container-expand'>
        <nav uk-navbar>
          <div className='uk-navbar-left'>
            <a id='sidebar_toggle' className='uk-navbar-toggle' uk-navbar-toggle-icon></a>
            <a href='#' className='uk-navbar-item uk-logo'>
              UI Admin
            </a>
          </div>
          <div className='uk-navbar-right uk-light'>
            <ul className='uk-navbar-nav'>
              <li className='uk-active'>
                <a href='#'>
                  Èrik &nbsp;<span className='ion-ios-arrow-down'></span>
                </a>
                <div uk-dropdown='pos: bottom-right; mode: click; offset: -17;'>
                  <ul className='uk-nav uk-navbar-dropdown-nav'>
                    <li className='uk-nav-Footer'>Options</li>
                    <li>
                      <a href='#'>Edit Profile</a>
                    </li>
                    <li className='uk-nav-header'>Actions</li>
                    <li>
                      <a href='#'>Lock</a>
                    </li>
                    <li>
                      <a href='#'>Logout</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
