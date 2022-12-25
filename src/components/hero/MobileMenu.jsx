const MobileMenu = () => {
  return (
    <div className="mobile-nav-wrapper">
      <ul className="mobile-links-list">
        <li>
          <a>Features</a>
        </li>
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>Resources</a>
        </li>
      </ul>
      <div className="mobile-login-group">
        <a>Login</a>
        <button className="btn btn-hero">Sign Up</button>
      </div>
    </div>
  );
};

export default MobileMenu;
