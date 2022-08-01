import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <FontAwesomeIcon icon={faGlobeAmericas} />
            <h1>my travel journal</h1>
        </nav>
    );
};

export default Navbar;
