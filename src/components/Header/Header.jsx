import "./Header.scss";
import Logo from "./../../assets/Images/BrainFlix-logo.svg"
import SearchImage from "./../../assets/Images/search.svg"
import ImageIcon from "./../../assets/Images/Mohan-muruge.jpg"
import UploadImage from "./../../assets/Images/upload.svg"

function Header() {
    return (
        <>
        <header className="header">
            
            <div className="logo">
            <img className="logo__image" src={Logo} alt="Hero Image" ></img>
            </div>

            <div className="box">
                <img className="box__image" src={SearchImage} alt="Search Image" ></img>
                <input className="box__input" type="text" placeholder="Search" />
            </div>

            <div className="icon">
            <img className="icon__image" src={ImageIcon} alt="Icon Image" ></img> 
            </div>

            <div className="button">
                <button className="button__text">UPLOAD</button>
                <img className="button__image" src={UploadImage} alt="Upload Image" ></img>
            </div>


            

        </header>
        </>
    );
}

export default Header;
