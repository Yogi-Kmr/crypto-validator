import React from 'react';
import validate from '../utils/validateInfo';
import useForm from '../hooks/useForm';

const FormSignup = ({  }) => {
  const onSubmit = (values) => {
    // If something is already save

    // Get item
    // Parse, contcat with new data then save
    const stringify = JSON.stringify(values)
    localStorage.setItem('formValues', stringify)
    
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    onSubmit,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>First Name</label>
          <input
            className='form-input'
            type='text'
            name='firstName'
            placeholder='Enter your firstName'
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Last Name</label>
          <input
            className='form-input'
            type='text'
            name='lastName'
            placeholder='Enter your lastName'
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Date of Birth</label>
          <input
            className='form-input'
            type='date'
            name='dob'
            placeholder='Enter your DOB'
            value={values.dob}
            onChange={handleChange}
          />
          {errors.dob && <p>{errors.dob}</p>}
        </div>
        <div className='form-inputs'>
            <label className='form-label'>Gender</label>
            <input type="radio"  className='form-input' id='male' name="gender"  value='male' onChange={handleChange}/>
            <label htmlFor="male" id='male'>Male</label>
            <input type="radio" id='female' className='form-input' name="gender" value='female' onChange={handleChange}/>
            <label htmlFor="female" id='female'>Female</label>
            <input type="radio" id='other' className='form-input' name="gender" value='other' onChange={handleChange}/>
            <label htmlFor="other" id='other'>Other</label>
            {errors.dob && <p>{errors.dob}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Annual Income</label>
          <input
            className='form-input'
            type='number'
            name='income'
            placeholder='Enter your income'
            value={values.income}
            onChange={handleChange}
          />
          {errors.income && <p>{errors.income}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Address</label>
          <textarea 
            className='form-input'
            type='text'
            name='address'
            placeholder='Enter your address'
            value={values.address}
            onChange={handleChange}>
          </textarea>
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Pin Code</label>
          <input
            className='form-input'
            type='number'
            name='pinCode'
            placeholder='Enter your pinCode'
            value={values.pinCode}
            onChange={handleChange}
          />
          {errors.pinCode && <p>{errors.pinCode}</p>}   
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Register
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
