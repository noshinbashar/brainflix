import "./Header.scss";
import Logo from "./../../assets/Images/BrainFlix-logo.svg"
import SearchImage from "./../../assets/Images/search.svg"
import ImageIcon from "./../../assets/Images/Mohan-muruge.jpg"
import UploadImage from "./../../assets/Images/upload.svg"
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <>
        <header className="header">
            
            <div className="logo">
                <NavLink to="/">
                <img className="logo__image" src={Logo} alt="HeroImage" ></img>
                </NavLink>
            
            </div>

            <div className="box">
                <img className="box__image" src={SearchImage} alt="Search" ></img>
                <input className="box__input" type="text" placeholder="Search" />
            </div>

            <div className="icon">
            <img className="icon__image" src={ImageIcon} alt="Icon" ></img> 
            </div>

            <div className="button">
                <NavLink to="/uploadpage">
                <button className="button__text">UPLOAD</button>
                <img className="button__image" src={UploadImage} alt="Upload" ></img>
                </NavLink>
                
            </div>

        </header>
        </>
    );
}

export default Header;
