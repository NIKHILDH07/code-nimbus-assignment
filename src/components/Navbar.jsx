import React from 'react';

export default function Navbar({ currentView, setCurrentView }) {
  const handleNavClick = (view, e) => {
    e.preventDefault();
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="eng007-shared-navbar-container" aria-label="Main Navigation">
      <ul className="shared-navbar eng007-navbar">
        <li>
          <button
            type="button"
            className={`shared-nav-item ${currentView === 'home' ? 'eng007-active' : ''}`}
            onClick={(e) => handleNavClick('home', e)}
          >
            <span className="nav-label">Home</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`shared-nav-item ${currentView === 'about' ? 'eng007-active' : ''}`}
            onClick={(e) => handleNavClick('about', e)}
          >
            <span className="nav-label">About</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`shared-nav-item ${currentView === 'gallery' ? 'eng007-active' : ''}`}
            onClick={(e) => handleNavClick('gallery', e)}
          >
            <span className="nav-label">Gallery</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
