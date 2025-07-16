// Example usage of the LoginComponent
import React from 'react';
import LoginComponent from './LoginComponent';
import './LoginPage.css';

const App: React.FC = () => {
  const handleLogin = (email: string, password: string, rememberMe: boolean) => {
    console.log('Login attempt:', { email, password, rememberMe });
    // Here you would typically call your authentication API
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
    // Here you would integrate with Google OAuth
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
    // Here you would navigate to sign-up page
  };

  return (
    <div className="App">
      <LoginComponent
        onLogin={handleLogin}
        onGoogleSignIn={handleGoogleSignIn}
        onSignUp={handleSignUp}
      />
    </div>
  );
};

export default App;