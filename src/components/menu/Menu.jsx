import "./menu.scss";
const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#intro">مقدمه</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#skills"> مهارت های من</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#works">نمونه کارها</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#certificate">مدارک</a>
        </li>
        <li onClick={()=>setMenuOpen(!menuOpen)}>
          <a href="#contact">ارتباط با من</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
