import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <ul className='nav-list'>
        <li>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
