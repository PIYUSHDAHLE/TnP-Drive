import React from 'react'
import { useForm } from 'react-hook-form';

const App = () => {

  const {register, handleSubmit, formState: {errors}, reset } = useForm();

  const submitData =(data)=>{
  console.log(data);

  reset();

  }

  return (
    <div>
  <div className="box">

  <form onSubmit={handleSubmit(submitData)}>

    <h1>Sign In Form</h1>

    <label>Username :</label>
    <input type="text" placeholder='Enter Your Full Name' {...register('username',{required: "Username is Required*"})} />

    {errors.username?.type == "required" && (<p className='error-para'>{errors.username.message}</p>)}

    <label>Email :</label>
    <input type="email" placeholder='Enter Your Email ID' {...register('email',{required: "Email is Required*", 
    pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}})} />

    {errors.email?.type == "required" && (<p className='error-para'>{errors.email.message}</p>)}
    {errors.email?.type == "pattern" && (<p className='error-para'>Invalid Email ID</p>)}


    <label>Password :</label>
    <input type="password" placeholder='Enter Your Password' {...register('password',{required: "Password is Required*",minLength: 8,maxLength:20, pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/}})} />

    {errors.password?.type == "required" && (<p className='error-para'>{errors.password.message}</p>)}
    {errors.password?.type == "minLength" && (<p className='error-para'>Password must be at least 8 characters*</p>)}
    {errors.password?.type == "maxLength" && (<p className='error-para'>Password must less then 20 characters*</p>)}
    {errors.password?.type === "pattern" && (<p className='error-para'>Password must contain at least one uppercase, one lowercase, one number, and one special character*</p>)}

    <button type="submit" value="submit">Submit</button>

  </form>

  </div>
 </div>

  )
}

export default App