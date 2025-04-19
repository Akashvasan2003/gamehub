import React, { useState } from 'react'; // Import useState from React
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the Firebase authentication method
import { auth } from '../firebase'; // ✅ CORRECT — go up one level



export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
        navigate('/home');
      } catch (error) {
        alert(error.message);
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white font-sans">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Login🎮  </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded bg-purple-600 hover:bg-purple-700 transition duration-300 font-semibold"
            >
              Log In
            </button>
          </form>
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <span className="text-purple-400 hover:underline cursor-pointer" onClick={() => navigate('/signup')}>
              Sign Up
            </span>
          </p>
        </div>
      </div>
    );
  }
  