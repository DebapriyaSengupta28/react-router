import { Link } from 'react-router-dom';

function NavigationApp2App3() {
  return (
    <nav>
      <div className="nav-left">
        <h1>My App</h1>
      </div>
      <div className="nav-center">
        <input type="text" placeholder="Search" />
        <button type="submit">Submit</button>
      </div>
      <div className="nav-right">
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
      </div>
    </nav>
  );
}

export default NavigationApp2App3;