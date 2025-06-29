import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkPubKey = "your_publishable_key";

ReactDOM.render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <App />
  </ClerkProvider>,
  document.getElementById("root")
);

