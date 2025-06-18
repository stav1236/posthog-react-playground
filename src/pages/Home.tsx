import { useNavigate } from 'react-router-dom';
import { usePostHog } from 'posthog-js/react';

export default function Home() {
    const posthog = usePostHog();
    const navigate = useNavigate();


    const handleLogin = () => {
        posthog?.capture('login_clicked');
        navigate('/shop');
    };


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
