import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostHogProvider
        apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
        options={options}
      >
        <App />
      </PostHogProvider>
    </BrowserRouter>
  </React.StrictMode>
);
