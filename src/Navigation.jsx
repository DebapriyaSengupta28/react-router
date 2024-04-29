import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">App 1</Link>
        </li>
        <li>
          <Link to="/app2">App 2</Link>
        </li>
        <li>
          <Link to="/app3">App 3</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;