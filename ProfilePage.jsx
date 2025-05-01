import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy user data (replace with real fetched data later)
const userData = {
  username: 'GamerX',
  bio: 'Shooter specialist and RPG addict 🎮',
  favoriteGenres: ['Action', 'Shooter', 'RPG'],
  avatar: '/images/default-avatar.png', // your default avatar
  gamesAdded: 24,
  topGenre: 'Action',
  topPlatform: 'PC',
  memberSince: 'April 2025',
  buyList: [
    { id: 1, name: 'Cyberpunk 2077', background_image: '/images/cyberpunk.jpg' },
    { id: 2, name: 'Elden Ring', background_image: '/images/eldenring.jpg' },
  ],
  ownedGames: [
    { id: 3, name: 'God of War', background_image: '/images/godofwar.jpg' },
  ],
  achievements: [
    { id: 1, title: 'First Wishlist', icon: '🎯' },
    { id: 2, title: '10 RPG Games', icon: '🛡' },
  ],
};

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [theme, setTheme] = useState('default');
  const [profileName, setProfileName] = useState(userData.username);
  const [avatar, setAvatar] = useState(userData.avatar); // To update profile photo
  const [bio, setBio] = useState(userData.bio);
  const navigate = useNavigate();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event) => {
    setProfileName(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSaveChanges = () => {
    // Here you can handle saving the changes (e.g., sending data to the backend)
    setEditing(false); // Close edit mode after saving
  };

  return (
    <div className={`min-h-screen font-rajdhani text-white ${theme === 'default' ? 'bg-black' : theme}`}>

      {/* Profile Header */}
      <div className="flex flex-col items-center py-10">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-xl cursor-pointer"
          onClick={() => document.getElementById('avatar-upload').click()}
        />
        <input
          type="file"
          id="avatar-upload"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        <h1 className="text-4xl font-bold mt-4">{profileName}</h1>
        <p className="text-gray-400 mt-2">{bio}</p>
        <div className="flex gap-2 mt-3">
          {userData.favoriteGenres.map((genre) => (
            <span key={genre} className="bg-gray-700 text-indigo-300 px-3 py-1 rounded-full text-xs">
              {genre}
            </span>
          ))}
        </div>

        {/* Buttons for Edit Profile and Back to Home */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => setEditing(!editing)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition-all duration-300"
          >
            {editing ? 'Close Edit' : 'Edit Profile'}
          </button>

          <button
            onClick={() => navigate('/home')}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-xl transition-all duration-300"
          >
            ⬅️ Back to Home
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {editing && (
        <div className="bg-gray-800 rounded-2xl p-6 mx-auto w-full max-w-2xl mt-4 mb-10 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          <div className="flex flex-col gap-4">
            <input
              className="bg-gray-700 p-2 rounded-lg"
              type="text"
              value={profileName}
              onChange={handleNameChange}
              placeholder="Change Username"
            />
            <textarea
              className="bg-gray-700 p-2 rounded-lg"
              value={bio}
              onChange={handleBioChange}
              placeholder="Update Bio..."
            />
            <button
              onClick={handleSaveChanges}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Buy List */}
      <section className="px-6">
        <h2 className="text-3xl font-bold mb-6 mt-10">🛒 Buy List</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {userData.buyList.map((game) => (
            <div key={game.id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all">
              <img src={game.background_image} alt={game.name} className="h-40 w-full object-cover" />
              <div className="p-3">
                <h3 className="text-lg font-semibold">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Owned Games */}
      <section className="px-6">
        <h2 className="text-3xl font-bold mb-6 mt-14">🎮 My Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {userData.ownedGames.map((game) => (
            <div key={game.id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all">
              <img src={game.background_image} alt={game.name} className="h-40 w-full object-cover" />
              <div className="p-3">
                <h3 className="text-lg font-semibold">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="px-6">
        <h2 className="text-3xl font-bold mb-6 mt-14">🏆 Achievements</h2>
        <div className="flex flex-wrap gap-4">
          {userData.achievements.map((badge) => (
            <div key={badge.id} className="bg-indigo-600 text-white px-4 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-all">
              {badge.icon} {badge.title}
            </div>
          ))}
        </div>
      </section>

      {/* My Stats */}
      <section className="px-6 mb-16">
        <h2 className="text-3xl font-bold mb-6 mt-14">📈 My Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl text-center">
            <p className="text-4xl font-bold">{userData.gamesAdded}</p>
            <p className="text-gray-400 mt-2">Games Added</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl text-center">
            <p className="text-4xl font-bold">{userData.topGenre}</p>
            <p className="text-gray-400 mt-2">Top Genre</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl text-center">
            <p className="text-4xl font-bold">{userData.topPlatform}</p>
            <p className="text-gray-400 mt-2">Top Platform</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl text-center">
            <p className="text-2xl">{userData.memberSince}</p>
            <p className="text-gray-400 mt-2">Member Since</p>
          </div>
        </div>
      </section>

      {/* Theme Selector */}
      <section className="px-6 mb-20">
        <h2 className="text-3xl font-bold mb-6 mt-14">🌈 Choose Profile Theme</h2>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => handleThemeChange('default')}
            className="bg-black text-white border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all"
          >
            Default Dark
          </button>
          <button
            onClick={() => handleThemeChange('bg-gradient-to-r from-purple-900 via-black to-indigo-900')}
            className="bg-purple-900 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all"
          >
            Cosmic Space
          </button>
          <button
            onClick={() => handleThemeChange('bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500')}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-all"
          >
            Neon 80s
          </button>
        </div>
      </section>

    </div>
  );
};

export default ProfilePage;
