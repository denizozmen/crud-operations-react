import logo from "./logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="logoreact">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="head">CRUD Operations</h1>
    </div>
  );
}

export default Header;
