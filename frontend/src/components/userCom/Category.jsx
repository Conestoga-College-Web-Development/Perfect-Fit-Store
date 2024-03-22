import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user/category');
      console.log(response);
      this.setState({ categories: response.data });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  render() {
    const { categories } = this.state;

    return (
      <section className='padding-top-bottom-150px mainBG'>
        <div className='container'>
          <h3 className='text-weight-700 text-center text-black margin-bottom-20px'>Popular Categories.</h3>

          <p className='text-center width-50 margin-auto sm-width-95'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>

          <div className='separator center-col width-10 bottom-border border-1px border-color-gray-light margin-top-30px margin-bottom-75px sm-margin-left-right-auto'></div>

          <div data-uk-scrollspy='cls: uk-animation-slide-bottom; target: > .row > div ; delay: 50; repeat: false'>
            <div className='row'>
              {categories.map((category) => (
                <div key={category._id} className='col-md-3 col-sm-6 col-xs-12 sm-margin-bottom-75px text-left'>
                  <div className='images'>
                    <div className='uk-inline-clip uk-transition-toggle' tabindex='0'>
                      <Link to={'/category/' + category.name}>
                        <img src={'./uploads/' + category.image} alt='' />
                      </Link>

                      <div className='uk-card-badge uk-label text-small bg-black padding-20px text-uppercase text-weight-600 letter-spacing-1'>
                        <Link to={'/category/' + category.name} className='text-white'>
                          {category.name}
                        </Link>
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
export default Category;
