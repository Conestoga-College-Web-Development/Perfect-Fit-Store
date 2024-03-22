import React from 'react';
import Category from './userCom/Category';
import HomePageProduct from './userCom/HomePageProduct';
const Index = () => {
  return (
    <div>
      <div data-uk-slider='finite: true'>
        <ul class='uk-slider-items' data-uk-height-viewport>
          <li class='image-bg-17 sm-overlay-white-light'>
            <div class='uk-position-cover swipe-black'>
              <div class='uk-position-center text-left sm-text-center'>
                <div class='width-80 xs-width-95 margin-left-four-percent'>
                  <h2 class='text-weight-700 text-gray-extra-dark'>Seamless Sliding, Perfect Precision.</h2>

                  <h5 class='text-extra-small text-weight-700 text-uppercase text-black letter-spacing-15'>Perfect Fit</h5>

                  <div class='separator width-30px bottom-border border-2px border-color-gray-light margin-top-bottom-40px sm-margin-left-right-auto'></div>

                  <a class='btn btn-small btn-black border-radius-50 margin-right-10px sm-margin-left-right-auto sm-display-table sm-margin-bottom-10px' href='#'>
                    Products
                  </a>

                  <a class='btn btn-small btn-transparent-black border-radius-50 sm-display-table sm-margin-left-right-auto xs-no-margin-bottom' href='#'>
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li class='image-bg-18 sm-overlay-white-light'>
            <div class='uk-position-cover swipe-black'>
              <div class='uk-position-center text-left sm-text-center'>
                <div class='width-80 xs-width-95 margin-left-four-percent'>
                  <h2 class='text-weight-700 text-gray-extra-dark'>Slide with Ease, Embrace Perfection.</h2>

                  <h5 class='text-extra-small text-weight-700 text-uppercase letter-spacing-15 text-black'>Creative Store</h5>

                  <div class='separator width-30px bottom-border border-2px border-color-gray-light margin-top-bottom-40px sm-margin-left-right-auto'></div>

                  <a class='btn btn-small btn-transparent-black border-radius-50 margin-right-10px sm-margin-left-right-auto sm-display-table sm-margin-bottom-10px' href='#'>
                    Products
                  </a>

                  <a class='btn btn-small btn-black border-radius-50 sm-display-table sm-margin-left-right-auto xs-no-margin-bottom' href='#'>
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <a class='uk-position-center-left uk-position-small uk-hidden-hover' href='#' data-uk-slidenav-previous data-uk-slider-item='previous'></a>
        <a class='uk-position-center-right uk-position-small uk-hidden-hover' href='#' data-uk-slidenav-next data-uk-slider-item='next'></a>
      </div>
      <Category></Category>
      <HomePageProduct></HomePageProduct>
      <section data-uk-scrollspy='cls:uk-animation-fade' className=' padding-top-bottom-150px'>
        <div className='container'>
          <h3 className='text-weight-700 text-center margin-bottom-20px'>Perfect-Fit Testimonials.</h3>

          <p className='text-center  width-80 margin-auto sm-width-95'>Let's have a glance of what our Perfect-Fit Users need to say about our services and products.</p>

          <div className='separator center-col width-10 bottom-border border-1px border-color-gray-dark margin-top-30px margin-bottom-75px sm-margin-left-right-auto'></div>

          <div className='row'>
            <div className='col-md-12 col-sm-12 col-xs-12 center-col text-center margin-auto'>
              <div data-uk-slider='finite: true'>
                <ul className='uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m uk-grid'>
                  <li>
                    <div className='testimonial uk-card uk-card-default padding-top-bottom-70px all-border border-1px border-color-gray-extra-dark uk-box-shadow-medium'>
                      <div className='width-100px text-center center-col margin-bottom-25px'>
                        <img className='border-radius-100-percent' src='images/avatars/02.jpg' alt='' />
                      </div>

                      <i className='fas fa-quote-left fa-2x text-white'></i>

                      <p className='margin-top-25px center-col  width-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo expedita rerum! Cumque odit aliquid expedita, dignissimos nulla incidunt ea molestias, dolorem nostrum at voluptas accusantium et quasi aperiam ullam.</p>

                      <div className='separator center-col width-10 bottom-border border-2px border-color-gray-dark margin-top-bottom-20px'></div>

                      <p className='montserrat text-white text-uppercase text-weight-600 text-small letter-spacing-1 margin-bottom-5px'>Anil Kyathm</p>

                      <p className='text-gray-regular text-uppercase text-weight-500 text-extra-small margin-bottom-5px'>Mens Collection</p>

                      <p className='text-gray-regular text-weight-500 text-extra-small no-margin-bottom'>Hem Patel</p>
                    </div>
                  </li>

                  <li>
                    <div className='testimonial uk-card uk-card-default padding-top-bottom-70px all-border border-1px border-color-gray-extra-dark uk-box-shadow-medium'>
                      <div className='width-100px text-center center-col margin-bottom-25px'>
                        <img className='border-radius-100-percent' src='images/avatars/03.jpg' alt='' />
                      </div>

                      <i className='fas fa-quote-left fa-2x text-white'></i>

                      <p className='margin-top-25px center-col  width-70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure obcaecati error excepturi eaque iusto, asperiores delectus architecto provident vel cumque, libero similique, fuga vero recusandae adipisci? Beatae veritatis incidunt quod!</p>

                      <div className='separator center-col width-10 bottom-border border-2px border-color-gray-dark margin-top-bottom-20px'></div>

                      <p className='montserrat text-white text-uppercase text-weight-600 text-small letter-spacing-1 margin-bottom-5px'>Anil Kyatham</p>

                      <p className='text-gray-regular text-uppercase text-weight-500 text-extra-small margin-bottom-5px'>C.E.O.</p>

                      <p className='text-gray-regular text-weight-500 text-extra-small no-margin-bottom'>The Z Company</p>
                    </div>
                  </li>

                  <li>
                    <div className='testimonial uk-card uk-card-default padding-top-bottom-70px all-border border-1px border-color-gray-extra-dark uk-box-shadow-medium'>
                      <div className='width-100px text-center center-col margin-bottom-25px'>
                        <img className='border-radius-100-percent' src='images/avatars/01.jpg' alt='' />
                      </div>

                      <i className='fas fa-quote-left fa-2x text-white'></i>

                      <p className='margin-top-25px center-col  width-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ut maiores reiciendis fuga maxime, cupiditate unde debitis vel obcaecati. Soluta, adipisci officia deleniti magni ex perspiciatis necessitatibus architecto unde sed.</p>

                      <div className='separator center-col width-10 bottom-border border-2px border-color-gray-dark margin-top-bottom-20px'></div>

                      <p className='montserrat text-white text-uppercase text-weight-600 text-small letter-spacing-1 margin-bottom-5px'>Kavya Brahmbhatt</p>

                      <p className='text-gray-regular text-uppercase text-weight-500 text-extra-small margin-bottom-5px'>Graphic Designer</p>

                      <p className='text-gray-regular text-weight-500 text-extra-small no-margin-bottom'>The X Company</p>
                    </div>
                  </li>

                  <li>
                    <div className='testimonial uk-card uk-card-default padding-top-bottom-70px all-border border-1px border-color-gray-extra-dark uk-box-shadow-medium'>
                      <div className='width-100px text-center center-col margin-bottom-25px'>
                        <img className='border-radius-100-percent' src='images/avatars/04.jpg' alt='' />
                      </div>

                      <i className='fas fa-quote-left fa-2x text-white'></i>

                      <p className='margin-top-25px center-col  width-70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis delectus a harum repellat minus aperiam. Libero inventore aliquid, voluptate exercitationem ipsa itaque perferendis commodi repudiandae magni maiores hic excepturi officia.</p>

                      <div className='separator center-col width-10 bottom-border border-2px border-color-gray-dark margin-top-bottom-20px'></div>

                      <p className='montserrat text-white text-uppercase text-weight-600 text-small letter-spacing-1 margin-bottom-5px'>Tanvi Prajapati</p>

                      <p className='text-gray-regular text-uppercase text-weight-500 text-extra-small margin-bottom-5px'>Graphic Designer</p>

                      <p className='text-gray-regular text-weight-500 text-extra-small no-margin-bottom'>The X Company</p>
                    </div>
                  </li>
                </ul>

                <a className='uk-position-center-left uk-position-small uk-hidden-hover left-minus-50' href='#' data-uk-slidenav-previous data-uk-slider-item='previous'></a>
                <a className='uk-position-center-right uk-position-small uk-hidden-hover right-minus-50' href='#' data-uk-slidenav-next data-uk-slider-item='next'></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
