import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul className="d-flex gap-4 list-unstyled justify-content-center">
        <li>
          <Link className="text-decoration-none" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-decoration-none" to="/shop">
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}
