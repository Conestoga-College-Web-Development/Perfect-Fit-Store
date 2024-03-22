import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Category = (props) => {
  const [products, setProduct] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user/product-by-category/${category}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    // <section className='padding-top-bottom-150px mainBG'>
    <section className='overlay-black padding-top-bottom-150px' style={{ backgroundColor: '#222' }}>
      <div className='container'>
        <div data-uk-scrollspy='cls: uk-animation-slide-bottom; target: > .row > div ; delay: 50; repeat: false'>
          <div className='row'>
            {products.map((category) => (
              <div class='col-md-4 col-sm-6 col-xs-12 sm-margin-bottom-75px text-left uk-margin-medium-bottom'>
                <div class='images'>
                  <div class='uk-inline-clip uk-transition-toggle' tabindex='0'>
                    <img src={'/uploads/' + category.image} alt='' />

                    <div class='uk-transition-slide-bottom uk-position-bottom text-white bg-black height-40'>
                      <div class='uk-position-center-left text-left margin-left-20px'>
                        <a class='btn btn-small btn-transparent-white sm-display-table no-margin-bottom' href='cart.html'>
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <h6 class='margin-top-20px margin-bottom-15px'>
                  <a class='text-weight-700 text-white' href='page-shop-full.html'>
                    {category.name}
                  </a>
                </h6>

                <h6 class='text-medium margin-top-20px margin-bottom-15px'>
                  <a class='text-weight-400 text-white text-underline roboto' href='page-shop-full.html'>
                    {category.category.name}
                  </a>
                </h6>

                <h6 class='margin-top-20px margin-bottom-15px text-weight-700 text-white no-margin-bottom'>$ {category.price}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
