import Logo from '../images/logo.svg';
import IconFB from '../images/icon-facebook.svg';
import IconTW from '../images/icon-twitter.svg';
import IconPT from '../images/icon-pinterest.svg';
import IconIG from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <img className="logo-footer" src={Logo} alt="logo image" />
        <ul className="features-list">
          <h4>Features</h4>
          <li>
            <a href="#">Link shortening</a>
          </li>
          <li>
            <a href="#">Branded links</a>
          </li>
          <li>
            <a href="#">Analytics</a>
          </li>
        </ul>
        <ul className="resources-list">
          <h4>Resources</h4>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Developers</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
        <ul className="company-list">
          <h4>Company</h4>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our team</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="social-media-list">
          <li>
            <img className="social-icon" src={IconFB} />
          </li>
          <li>
            <img className="social-icon" src={IconTW} />
          </li>
          <li>
            <img className="social-icon" src={IconPT} />
          </li>
          <li>
            <img className="social-icon" src={IconIG} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
