import { Link } from 'gatsby';
import React from 'react';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
      </ul>
    </nav>
  );
}
