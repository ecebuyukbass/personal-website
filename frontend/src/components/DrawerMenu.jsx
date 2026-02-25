import { Link } from 'react-router-dom';

export default function DrawerMenu() {
  return (
    <>
      <h2>Explore</h2>
      <ul>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/">Projects</Link></li>
        <li><Link to="/">About</Link></li>
      </ul>
    </>
  );
}
