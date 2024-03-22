import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Nav from '../ui/Nav/Nav';
import Footer from '../ui/Footer/Footer';
import Index from '../Index';
import ProductByCategory from '../userCom/ProductByCategory';
import Category from '../Admin/Category';
import Dashboard from '../Admin/Dashboard';
import Product from '../Admin/Product';
import HeaderAdmin from '../Admin/Layouts/Header';
import SliderAdmin from '../Admin/Layouts/Slider';
import './Home.module.css';
const Layout = ({ children }) => {
  return (
    <section>
      <Nav />

      {children}
      <Footer />
    </section>
  );
};

const AdminLayout = ({ children }) => {
  return (
    <div>
      <HeaderAdmin />
      <SliderAdmin />
      <div style={{ height: '100vh' }} className='content-padder content-background'>
        {children}
      </div>
    </div>
  );
};

function Home() {
  return (
    <div>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Index />
            </Layout>
          }
        />
        <Route
          path='/login'
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path='/signup'
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path='/category/:category'
          element={
            <Layout>
              <ProductByCategory />
            </Layout>
          }
        />
        {/* Admin Routes */}
        <Route
          path='/admin/dashboard'
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path='/admin/product'
          element={
            <AdminLayout>
              <Product />
            </AdminLayout>
          }
        />
        <Route
          path='/admin/category'
          element={
            <AdminLayout>
              <Category />
            </AdminLayout>
          }
        />
        {/* End Admin Route */}
      </Routes>
    </div>
  );
}

export default Home;
