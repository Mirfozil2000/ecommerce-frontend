import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
  }

  return (
    <div className='flex flex-col justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='text-3xl font-extrabold text-center text-gray-600'>
          Register User
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6'>
            <div>
              <label htmlFor="name" className='block text-lg font-bold gray-700'>Enter Name</label>
              <div className='mt-2'>
                <input
                  className={`block w-full px-3 py-2 placeholder-gray-300 border border-gray-400 
              rounded-md shadow-sm appearance-none sm:text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  type="text"
                  name="name"
                  required
                  onChange={e => setName(e.target.value)} />
              </div>
            </div>
            <div>
              <label htmlFor="email" className='block text-lg font-bold gray-700'>Enter Email</label>
              <div className='mt-2'>
                <input
                  className={`block w-full px-3 py-2 placeholder-gray-300 border border-gray-400 
              rounded-md shadow-sm appearance-none sm:text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  type="email"
                  name="email"
                  autoComplete='email'
                  required
                  onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            <div>
              <label htmlFor="password" className='block text-lg font-bold gray-700'>Enter Password</label>
              <div className='relative mt-2'>
                <input
                  className={`block w-full px-3 py-2 placeholder-gray-300 border border-gray-400 
              rounded-md shadow-sm appearance-none sm:text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete='password'
                  required
                  onChange={e => setPassword(e.target.value)} />
                {visible ? (
                  <FaEyeSlash className='absolute top-2 right-2' size={25} onClick={() => setVisible(false)} />
                ) : (
                  <FaEye className='absolute top-2 right-2' size={25} onClick={() => setVisible(true)} />
                )}
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className="flex items-center">
                <input type="checkbox" name='remember-me' id="remember-me"
                  className={`w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500`} />
                <label htmlFor="remember-me" className='pl-2 text-sm text-gray-500'>Remember Me</label>
              </div>
              <div className="text-sm">
                <a href="#" className='text-sm text-blue-500 hover:text-blue-700'>
                  Forgot your password ?
                </a>
              </div>
            </div>
            <div>
              <label htmlFor="avatar" className='block text-sm font-medium text-gray-500'></label>
              <div className='flex items-center mt-2'>
                <span className="inline-block w-8 h-8 overflow-hidden rounded-full">
                  {
                    avatar ? (
                      <img src={URL.createObjectURL(avatar)} alt="avatar"
                        className='object-contain w-full h-full rounded-full' />
                    ) : (
                      <RxAvatar className='w-8 h-8' />
                    )
                  }
                </span>
                <label htmlFor="file-input"
                  className={`flex items-center justify-center px-4 py-2 ml-5 hover:bg-gray-100
              border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white
              hover:cursor-pointer`}>
                  Upload Avatar
                  <input type="file" name="avatar" id='file-input' accept='.jpg,.jpeg,.png' onChange={handleInputChange}
                    className='sr-only' />
                </label>
              </div>
            </div>
            <div className="flex items-center">
              <button type='submit'
                className={`relative w-full group h-[40px] flex justify-center py-2 px-4 border-transparent 
            bg-blue-500 hover:bg-blue-700 text-white rounded-md font-medium`}>Login</button>
            </div>
            <div className="flex items-center w-full">
              <h4>You don't have an account?</h4>
              <Link to={'/sign-up'} className='pl-2 text-blue-500'>Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
