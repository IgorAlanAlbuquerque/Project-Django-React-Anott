import { useNavigate } from "react-router-dom";
import "../styles/Logout.css";

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear(); // Limpa os dados do localStorage
        navigate("/login"); // Redireciona para a página de login
    };

    return (
        <div className="logout-container">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default LogoutButton;