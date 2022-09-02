import classes from './SignupForm.module.css';
import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
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
    <React.Fragment>
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

        <ErrorMessage
          errors={errors}
          name="multipleErrorInput"
          render={({ messages }) => {
            console.log('messages', messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />

        <button type="submit"> SignUp</button>
      </form>
    </React.Fragment>
  );
};

export default SignupForm;
