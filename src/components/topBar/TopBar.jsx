import "./topBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topBar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
        <div className="left">
          <div className="itemContainer">
            <span>morteza.abolfathi73@gmail.com</span>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="itemContainer">
            <span style={{ direction: "ltr" }}>+98 935 991 9333</span>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <a href="#works" className="Logo">
            مرتضی
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
