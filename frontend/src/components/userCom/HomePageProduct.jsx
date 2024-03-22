import React, { Component } from 'react';

import axios from 'axios';

class HomePageProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user/homepage-product');
      console.log(response);
      this.setState({ allData: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  render() {
    const { allData } = this.state;

    return (
      <section data-uk-scrollspy='cls:uk-animation-fade' className='bg-gray-extra-light padding-top-bottom-150px'>
        <div className='container'>
          <h3 className='text-weight-700 text-center text-black margin-bottom-20px'>Recent Products.</h3>

          <p className='text-center width-50 margin-auto sm-width-95'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>

          <div className='separator center-col width-10 bottom-border border-1px border-color-gray-light margin-top-30px margin-bottom-75px sm-margin-left-right-auto'></div>

          <div data-uk-scrollspy='cls: uk-animation-slide-right-medium; target: > .row > div ; delay: 50; repeat: false'>
            <div className='row'>
              {allData.map((data) => (
                <div className='col-md-4 col-sm-12 col-xs-12'>
                  <div className='row margin-bottom-75px'>
                    <div className='col-md-6 col-sm-12 col-xs-12' data-uk-lightbox='animation: fade'>
                      <a href='images/shop/15.jpg' data-caption='Item Caption'>
                        <img className='sm-margin-bottom-20px' src={'./uploads/' + data.image} alt='' />
                      </a>
                    </div>

                    <div className='col-md-6 col-sm-12 col-xs-12 uk-flex uk-flex-middle'>
                      <div>
                        <a href='page-shop-full.html'>
                          <h6 className='text-extra-large text-weight-600 text-gray-extra-dark margin-bottom-10px'>{data.name}</h6>
                        </a>

                        <p className='margin-bottom-10px'>
                          <a href='#'>{data.category.name}</a>
                        </p>

                        <h6 className='text-weight-600 text-gray-extra-dark margin-bottom-10px text-extra-large'>$ {data.price}</h6>

                        <a className='btn btn-small btn-transparent-black sm-display-table' href='cart.html'>
                          Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HomePageProduct;
