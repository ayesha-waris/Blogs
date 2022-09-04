import classes from './SignupForm.module.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

      console.log(JSON.stringify(data));
      //signup api
  
  };

  return (
    
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <label>User Name</label>
        <input placeholder="username" {...register('username', {required: true})} />
        {errors.username?.type === 'required' && "user name is required"}

        <label>First Name</label>
        <input placeholder="First Name" {...register('first_name',{required: true})} />
        {errors.first_name?.type === 'required' && "first name is required"}

        <label>Last Name</label>
        <input placeholder="Last Name" {...register('last_name',{required: true})} />
        {errors.last_name?.type === 'required' && "last name is required"}

        <label>Email</label>
        <input placeholder="Email" type="email" {...register('email',{required: true})} />
        {errors.email?.type === 'required' && "Email is required"}

        <label>Password</label>
        <input
          placeholder="Password"
          type="password"
          {...register('password',{required: true})}
        />
        {errors.password?.type === 'required' && "Password is required"}

        <label>Confirm Password</label>
        <input
          placeholder="Confirm Password"
          type="password"
          {...register('password2',{required: true})}
        />
        {errors.password2?.type === 'required' && "Confirm Password is required"}

        <button type="submit"> SignUp</button>
        <p>Already have account? <Link to='/login'> Login here</Link></p>
      </form>
     
      
  );
};

export default SignupForm;
