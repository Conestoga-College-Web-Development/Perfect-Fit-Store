import React, { useState, useEffect } from 'react';

import axios from 'axios';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Product = () => {
  const [open, setOpen] = useState(false);
  const [hideOldImage, setOldImage] = useState(false);

  const onCloseModal = () => setOpen(false);

  const [allData, setData] = useState([]);

  const [editBtn, setEditBtn] = useState(false);
  const [addBtn, setAddBtn] = useState(false);
  const [deleteBtn, setDeleteBtn] = useState(false);
  const [allCategory, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    image: '',
    category_id: '',
  });

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  const getCategory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/category');
      console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching Data:', error);
    }
  };

  const editData = async () => {
    try {
      const response = await axios.put('http://localhost:5000/api/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Data edited:', response.data);
      setFormData({ name: '', description: '', image: '' });
      setOpen(false);
      getData();
    } catch (error) {
      console.error('Failed to edit Data:', error);
    }
  };

  const deleteData = async () => {
    try {
      const response = await axios.patch('http://localhost:5000/api/product', formData);
      console.log('Data deleted:', response.data);
      setFormData({ name: '', description: '', image: '' });
      setOpen(false);
      getData();
    } catch (error) {
      console.error('Failed to delete Data:', error);
    }
  };

  const btnStateConfig = (type, data = {}) => {
    if (type === 'addNew') {
      setFormData({ name: '', description: '', image: '' });
      setAddBtn(true);
      setEditBtn(false);
      setDeleteBtn(false);
    }
    if (type === 'editBtn') {
      setFormData({ ...data });
      setOldImage(false);
      setEditBtn(true);
      setAddBtn(false);
      setDeleteBtn(false);
    }
    if (type === 'deleteBtn') {
      setFormData({ ...data });
      setOldImage(false);
      setDeleteBtn(true);
      setAddBtn(false);
      setEditBtn(false);
    }
    setOpen(true);
  };

  const setupBtn = (type, data) => {
    btnStateConfig(type, data);
  };

  const handleChange = (e) => {
    if (e.target.name == 'image') {
      setOldImage(true);
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const submitData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Data added:', response.data);

      setFormData({ name: '', description: '', image: '' });
      setOpen(false);
      getData();
    } catch (error) {
      console.error('Failed to add Data:', error);
    }
  };
  return (
    <div className=''>
      <div className='uk-section-small uk-section-default header'>
        <div className='uk-container uk-container-large'>
          <h1>
            <span className='ion-speedometer'></span> Product
          </h1>
          <ul className='uk-breadcrumb'>
            <li>
              <a href='/admin/dashboard'>Home</a>
            </li>
            <li>
              <span href=''>Product</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='uk-section-small'>
        <div className='uk-container uk-container-large'>
          <div data-uk-grid className='uk-child-width-1-1'>
            <div>
              <div className='uk-card uk-card-default uk-card-body'>
                <div className='uk-flex uk-flex-middle uk-flex-between'>
                  <h3>Product Table</h3>
                  <button
                    className='uk-button uk-button-primary'
                    onClick={() => {
                      setupBtn('addNew');
                    }}
                  >
                    Add New
                  </button>
                </div>

                <div>
                  <table className='uk-table uk-table-striped'>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allData.map((data) => (
                        <tr>
                          <td>{data._id}</td>
                          <td>{data.name}</td>
                          <td>{data.category.name}</td>
                          <td>
                            <div className='uk-flex uk-flex-middle'>
                              <button className='uk-button uk-button-primary uk-button-small' onClick={() => setupBtn('editBtn', data)}>
                                Edit
                              </button>
                              <div className='uk-margin-small-left uk-margin-small-right'>|</div>
                              <button className='uk-button uk-button-danger uk-button-small' onClick={() => setupBtn('deleteBtn', data)}>
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Modal open={open} onClose={onCloseModal} center>
                  <div style={{ maxWidth: 540 }}>
                    <div className='uk-modal-header'>
                      <h2 className='uk-modal-title'>
                        {editBtn ? 'Edit ' : addBtn ? 'Create ' : 'Delete '}
                        Product
                      </h2>
                    </div>
                    <div className='uk-modal-body'>
                      <div>
                        <div className='uk-margin' data-uk-margin>
                          <label class='uk-form-label' htmlFor='name'>
                            Product Name:
                          </label>
                          <input className='uk-input' type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
                        </div>

                        <div className='uk-margin' data-uk-margin>
                          <div class='uk-form-label'>Product Price:</div>
                          <input className='uk-input' type='number' name='price' value={formData.price} onChange={handleChange} />
                        </div>

                        <div className='uk-margin' data-uk-margin>
                          <div class='uk-form-label'>Select Category Name:</div>
                          <select class='uk-select' aria-label='Select' name='category_id' onChange={handleChange}>
                            {allCategory.map((data) => (
                              <option selected={data._id == formData.category} value={data._id}>
                                {data.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className='uk-margin' data-uk-margin>
                          <div class='uk-form-label'>Select Product Image</div>
                          <div uk-form-custom='target: true'>
                            <input type='file' name='image' onChange={handleChange} aria-label='Custom controls' />
                            <input className='uk-input uk-form-width-medium' type='text' placeholder='Product Image' aria-label='Custom controls' />
                          </div>
                        </div>

                        {addBtn == false && !hideOldImage && (
                          <div className='uk-margin' data-uk-margin>
                            <div class='uk-form-label'>Old Image</div>
                            <img src={'/uploads/' + formData.image} alt='' style={{ width: '220px' }} />
                          </div>
                        )}

                        <div className='uk-margin' data-uk-margin>
                          <label class='uk-form-label' htmlFor='description'>
                            Description:
                          </label>
                          <textarea className='uk-textarea' id='description' name='description' value={formData.description} onChange={handleChange}></textarea>
                        </div>

                        {editBtn ? (
                          <button
                            className='uk-button uk-button-secondary'
                            onClick={() => {
                              editData();
                            }}
                          >
                            Edit
                          </button>
                        ) : addBtn ? (
                          <button
                            className='uk-button uk-button-primary'
                            onClick={() => {
                              submitData();
                            }}
                          >
                            Submit
                          </button>
                        ) : (
                          <button
                            className='uk-button uk-button-danger'
                            onClick={() => {
                              deleteData();
                            }}
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
