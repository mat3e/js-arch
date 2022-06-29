import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from './layout';
import './Main.css';

export function Main() {
  return (
      <>
        <header className="Main-header">
          <h1>Projects & Users</h1>
          <nav className="Main-nav">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/tags">Tags</Link>
          </nav>
        </header>
        <main className="Main-outlet">
          <Outlet/>
        </main>
      </>
  );
}
