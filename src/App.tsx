import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { usePostHog } from 'posthog-js/react';
import { useEffect } from 'react';

export default function App() {
  const posthog = usePostHog();

  useEffect(() => {
    if (posthog) {
      const storedId = localStorage.getItem('user_id');
      const userId = storedId || String(Math.floor(Math.random() * 5) + 1);

      posthog.identify(`user-${userId}`, { userId });
      localStorage.setItem('user_id', userId);
    }
  }, [posthog]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}


