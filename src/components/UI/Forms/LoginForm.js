import classes from './SignupForm.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Login = () => {

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

        <label>Password</label>
        <input
          placeholder="Password"
          type="password"
          {...register('password',{required: true})}
        />
        {errors.password?.type === 'required' && "Password is required"}

 

        <button type="submit"> Login</button>
        <p>Don't have account? <Link to='/signup'> Signup here</Link></p>
      </form>
        );
}
 
export default Login;