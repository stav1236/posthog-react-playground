import { useNavigate } from "react-router-dom";

export default function Shop() {
    const navigate = useNavigate();

    const handleBuy = () => {
        alert('Thank you for buying');
    };

    return (
        <div>
            <h1>Shop Page</h1>
            <button onClick={handleBuy}>Buy</button>
            <br />
            <br />
            <button onClick={() => navigate('/')}>logout</button>
        </div>
    );
}
