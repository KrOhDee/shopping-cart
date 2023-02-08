import { Link } from 'react-router-dom';

export default function Navbar() {
  const ulStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginLeft: '-40px',
    listStyle: 'none',
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    fontSize: '24px',
    fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
  };

  return (
    <nav>
      <ul style={ulStyle}>
        <li>
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/shop">
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
