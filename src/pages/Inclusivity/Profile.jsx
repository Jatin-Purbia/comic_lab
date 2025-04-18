import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import bgImage from '../../assets/bg1.png';

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/menu');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
      {/* Back Button */}
      <button
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 z-20 bg-black bg-opacity-50 hover:bg-opacity-70 text-white px-4 py-2 rounded-md transition-all duration-200"
        >
          ← Back
        </button>
        <div className="w-full max-w-md bg-black bg-opacity-70 rounded-lg p-6">
          {user ? (
            <>
              {/* User Information */}
              <div className="w-full px-4 text-left text-white">
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-1">Name</label>
                  <div className="text-xl">{user.name}</div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-1">Email</label>
                  <div className="text-xl">{user.email}</div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-1">Role</label>
                  <div className="text-xl capitalize">{user.role || 'user'}</div>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white py-2 rounded-md font-bold hover:bg-red-600 transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="w-full px-4 text-center">
              <p className="text-white mb-6">Please sign in to view your profile</p>
              <div className="flex flex-col gap-4">
                <Link
                  to="/login"
                  className="w-full bg-white text-black py-2 rounded-md font-bold hover:bg-opacity-90 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="w-full bg-white text-black py-2 rounded-md font-bold hover:bg-opacity-90 transition-all duration-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile; 