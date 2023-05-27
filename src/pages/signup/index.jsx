import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Validate username
    if (!username) {
      formIsValid = false;
      newErrors.username = 'Username is required';
    }

    // Validate email
    if (!email) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      newErrors.email = 'Email is invalid';
    }

    // Validate password
    if (!password) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with signup logic
      console.log('Signup successful');
      // You can add your own signup logic here
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-800 py-8 px-6 rounded-md w-96">
        <h2 className="text-2xl text-white mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="text-white block mb-1">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white block mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-white block mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;