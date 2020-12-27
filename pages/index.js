import React from 'react';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div className="app">
      <button onClick={() => auth.signinWithGithub()}>log in</button>
    </div>
  )
}
