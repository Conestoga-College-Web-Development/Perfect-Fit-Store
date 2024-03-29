import React, { useState } from 'react';
import { z } from 'zod';
import styles from './Login.module.css';

const loginSchema = z.object({
  email: z.string({ required_error: 'Email cannot be empty' }).email({ message: 'Please enter valid email address' }),
  password: z.string({ required_error: 'Password cannot be empty' }).min(1, { message: 'Password cannot be empty' }),
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    const validate = loginSchema.safeParse({ email, password });
    if (validate.success) {
      try {
        const result = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        });
        if (result.ok) {
          const resultJson = await result.json();
          if (resultJson.user.userType) {
            window.location = '/admin/dashboard';
          }
          alert('Login successfully!');
          console.log(resultJson);
          window.sessionStorage.setItem('token', resultJson.token);
        } else {
          alert('Login failed!');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      for (const error of validate.error.issues) {
        switch (error.path.toString()) {
          case 'email':
            setEmailError(error.message);
            break;
          case 'password':
            setPasswordError(error.message);
            break;
          default:
            break;
        }
      }
    }
  };
  return (
    <section className={styles.page}>
      <h1>Login</h1>
      <input type='text' name='email' value={email} className='uk-input' onChange={handleChange} placeholder='Email Address' />
      <div className={styles.error}>{emailError}</div>
      <input type='password' name='password' onChange={handleChange} value={password} className='uk-input uk-margin-small-top uk-margin-small-bottom' placeholder='Password' />
      <div className={styles.error}>{passwordError}</div>

      <button type='submit' className='uk-button uk-width-1-1 uk-button-primary' style={{ backgroundColor: '#6c4401' }} onClick={submitHandler}>
        Continue
      </button>
      <div className='uk-flex uk-margin-medium-top uk-flex-middle'>
        <span>
          Create an account?
          <a className='uk-margin-small-left uk-margin-small-right mainColor' href='/signup'>
            Click here
          </a>
        </span>
      </div>
      <div>
        <input type='checkbox' className=' uk-checkbox uk-margin-small-right' name='' id='' />
        By continuing,
        <span> I agree to the terms and privacy policy.</span>
      </div>
    </section>
  );
};
export default Login;
