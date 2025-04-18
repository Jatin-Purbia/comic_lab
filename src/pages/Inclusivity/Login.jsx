import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import bgImage from '../../assets/bg1.png';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      setSuccess('Login successful! Redirecting...');
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/menu');
      }, 2000);
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg transform transition-all duration-300">
          {success}
        </div>
      )}
      {/* Error Message */}
      {error && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg transform transition-all duration-300">
          {error}
        </div>
      )}
      {/* Fixed Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => navigate('/menu')}
          className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          ← Back
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white">Login</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Welcome Back
            </h2>
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-3 py-6 md:py-8 bg-black bg-opacity-70 w-full">
            <form onSubmit={handleSubmit} className="w-full max-w-md px-4">
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 text-white border border-white"
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-2 rounded-md bg-black bg-opacity-50 text-white border border-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-2 rounded-md font-bold hover:bg-opacity-90 transition-all duration-200"
              >
                Login
              </button>
              <div className="mt-4 text-center">
                <p className="text-white">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-white underline hover:text-gray-300">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>

          <div className="text-center py-6 md:pb-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              WE WILL MAKE A DIFFERENCE TOGETHER
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 