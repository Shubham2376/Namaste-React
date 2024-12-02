import { LOGO_URL } from "../utils/constants";
// as LOGO_URL is a js const variable so to use it we have to enclose it inside { }
export const Header = () => {
    return (
        <div className="header">
            <div className = "img-container">
                <img className = "logo" src = {LOGO_URL}/> 
            </div>
            <div className = "Nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;