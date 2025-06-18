import { usePostHog } from "posthog-js/react";
import { useNavigate } from "react-router-dom";

export default function Shop() {
    const posthog = usePostHog();
    const navigate = useNavigate();

    const handleBuy = (item: string) => {
        posthog?.capture('buy_button_clicked', {
            item,
        });
        alert(`Thank you for buying ${item}`);
    };

    return (
        <div>
            <h1>Shop Page</h1>
            <button onClick={() => handleBuy('item1')}>Buy Item 1</button>
            <button onClick={() => handleBuy('item2')}>Buy Item 2</button>
            <button onClick={() => handleBuy('item3')}>Buy Item 3</button>
            <br />
            <br />
            <button onClick={() => navigate('/')}>logout</button>
        </div>
    );
}
