import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/login/login'

const GOOGLE_CLIENT_ID = '433786864250-ol9en82h5s3vdgi174q6il2hhtce2gp5.apps.googleusercontent.com';

export function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Login />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
