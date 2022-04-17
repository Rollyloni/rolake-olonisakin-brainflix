import "../Header/Header.scss";
import brnflixLogo from "../assets/logo/BrainFlix-logo.svg";
import searchIcon from "../assets/Icons/search.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import uploadIcon from "../assets/Icons/upload.svg";

function Header() {
  return (
    <header className="header-section">
      <img
        className="header-section__logo"
        src={brnflixLogo}
        alt="logo for brainflix"
      ></img>
      <section className="header-section__div">
        <img
          className="header-section__search"
          src={searchIcon}
          alt="search icon"
        ></img>

        <input type="text" placeholder="Search"></input>
      </section>

      <button>
        <img
          className="header-section__button--logo"
          src={uploadIcon}
          alt="upload icon"
        ></img>
        UPLOAD
      </button>
      <img
        className="header-section__avatar"
        src={avatar}
        alt="avatar icon"
      ></img>
    </header>
  );
}

export default Header;
