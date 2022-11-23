import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import BackIcon from '../Assets/BackIcon';

const Nav = ({ back = false }) => (
  <nav className="NavBar">
    {back ? (
      <Link to="/" className="NavBar__Back">
        <BackIcon />
      </Link>
    ) : (
      ''
    )}

    <h1 className="NavBar__Title">Cryptic</h1>
    <Image
      className="NavBar__Image"
      src="https://cryptologos.cc/logos/near-protocol-near-logo.svg?v=023"
    />
    <h1 className="NavBar__Title">World</h1>
  </nav>
);

export default Nav;

Nav.defaultProps = {
  back: false,
};

Nav.propTypes = {
  back: PropTypes.bool,
};
