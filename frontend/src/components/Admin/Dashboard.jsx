const Category = () => {
  return (
    <div className=''>
      <div className='uk-section-small uk-section-default header'>
        <div className='uk-container uk-container-large'>
          <h1>
            <span className='ion-speedometer'></span> Dashboard
          </h1>
          <ul className='uk-breadcrumb'>
            <li>
              <a href='/admin/dashboard'>Home</a>
            </li>
            <li>
              <span href=''>Dashboard</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='uk-section-small'>
        <div className='uk-container uk-container-large'>
          <div data-uk-grid className='uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-4@xl'>
            <div>
              <div className='uk-card uk-card-default uk-card-body'>
                <span className='statistics-text'>New Registrations</span>
                <br />
                <span className='statistics-number'>
                  14.164
                  <span className='uk-label uk-label-success'>
                    8% <span className='ion-arrow-up-c'></span>
                  </span>
                </span>
              </div>
            </div>
            <div>
              <div className='uk-card uk-card-default uk-card-body'>
                <span className='statistics-text'>Website Traffic</span>
                <br />
                <span className='statistics-number'>
                  123.238
                  <span className='uk-label uk-label-danger'>
                    13% <span className='ion-arrow-down-c'></span>
                  </span>
                </span>
              </div>
            </div>
            <div>
              <div className='uk-card uk-card-default uk-card-body'>
                <span className='statistics-text'>Total Invoices</span>
                <br />
                <span className='statistics-number'>
                  2.316
                  <span className='uk-label uk-label-success'>
                    37% <span className='ion-arrow-up-c'></span>
                  </span>
                </span>
              </div>
            </div>
            <div>
              <div className='uk-card uk-card-default uk-card-body'>
                <span className='statistics-text'>Total Income</span>
                <br />
                <span className='statistics-number'>
                  6.384$
                  <span className='uk-label uk-label-success'>
                    26% <span className='ion-arrow-up-c'></span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
