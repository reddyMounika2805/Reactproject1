import React, { useState } from 'react';

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Simulating a login process
    // In a real application, you would authenticate the user and set the isLoggedIn state accordingly
    setIsLoggedIn(true);
    setUsername('JohnDoe'); // Replace 'JohnDoe' with the actual username
  };

  return (
    <div className="landing-page">
      {isLoggedIn ? (
        <h1>Welcome, {username}!</h1>
      ) : (
        <h1>Welcome, guest user!</h1>
      )}
      {!isLoggedIn && (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LandingPage;