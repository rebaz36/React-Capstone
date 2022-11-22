// import './Nav.css';
import { Image } from 'react-bootstrap';

const Nav = () => (
  <nav className="NavBar">
    <h1 className="NavBar__Title">Cryptic</h1>
    <Image
      className="NavBar__Image"
      src="https://cryptologos.cc/logos/near-protocol-near-logo.svg?v=023"
    />
    <h1 className="NavBar__Title">World</h1>
  </nav>
);

export default Nav;
