import React, { useState } from 'react';
import { z } from 'zod';
import styles from './Signup.module.css';

const signupSchema = z.object({
  email: z.string({ required_error: 'Email cannot be empty' }).email({ message: 'Please enter valid email address' }),
  password: z.string({ required_error: 'Password cannot be empty' }).min(1, { message: 'Password cannot be empty' }),

  firstName: z.string({ required_error: 'name cannot be empty' }).min(1, { message: 'name cannot be empty' }),
  lastName: z.string({ required_error: 'name cannot be empty' }).min(1, { message: 'name cannot be empty' }),
});

const Signup = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
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
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      default:
        break;
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');
    setFirstNameError('');
    setLastNameError('');
    const validate = signupSchema.safeParse({
      email,
      password,
      firstName,
      lastName,
    });
    if (validate.success) {
      try {
        const result = await fetch('http://localhost:5000/userRegister', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: email,
            password: password,
            firstname: firstName,
            lastname: lastName,
          }),
        });
        if (result.ok) {
          const resultJson = await result.json();
          alert('Registered successfully!');
          console.log(resultJson);
        } else {
          alert('Registeration failed!');
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
          case 'firstName':
            setFirstNameError(error.message);
            break;
          case 'lastName':
            setLastNameError(error.message);
            break;
          default:
            break;
        }
      }
    }
  };
  return (
    <section className={styles.page}>
      <h1>SignUp</h1>
      <input onChange={handleChange} value={firstName} type='text' name='firstName' className='uk-input uk-margin-small-bottom' placeholder='Enter first Name' />
      <div className={styles.error}>{firstNameError}</div>
      <input onChange={handleChange} value={lastName} type='text' name='lastName' className='uk-input uk-margin-small-bottom' placeholder='Enter last Name' />
      <div className={styles.error}>{lastNameError}</div>
      <input onChange={handleChange} type='text' name='email' value={email} className='uk-input uk-margin-small-bottom' placeholder='Email Address' />
      <div className={styles.error}>{emailError}</div>
      <input value={password} onChange={handleChange} type='password' name='password' className='uk-input uk-margin-small-bottom' placeholder='Password' />
      <div className={styles.error}>{passwordError}</div>
      <button type='submit' onClick={submitHandler} className='uk-button uk-width-1-1 uk-button-primary' style={{ backgroundColor: '#6c4401' }}>
        Continue
      </button>

      <div className='uk-flex uk-margin-medium-top uk-flex-middle'>
        <span>
          Already an account?
          <a className='uk-margin-small-left uk-margin-small-right mainColor' href='/login'>
            Login here
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
export default Signup;
