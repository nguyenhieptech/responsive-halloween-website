import img1 from '../img/footer1-img.png';
import img2 from '../img/footer2-img.png';
import logo from '../img/logo.png';

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__data">
          <a className="logo" href="#">
            <img className="img" src={logo} alt="" />
            Halloween
          </a>
          <p className="description">
            Enjoy the scariest night <br /> of your life.
          </p>
          <div className="social">
            <a
              className="link"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <i className="bx bxl-facebook" />
            </a>
            <a
              className="link"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <i className="bx bxl-instagram-alt" />
            </a>
            <a className="link" href="https://twitter.com/" target="_blank">
              <i className="bx bxl-twitter" />
            </a>
          </div>
        </div>

        <div className="footer__data">
          <div>
            <h3 className="title">About</h3>
            <ul className="links">
              <li>
                <a href="#" className="link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  News
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__data">
          <div>
            <h3 className="title">Our Services</h3>
            <ul className="links">
              <li>
                <a href="#" className="link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  Discounts
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  Shipping
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__data">
          <div>
            <h3 className="title">Our Company</h3>
            <ul className="links">
              <li>
                <a href="#" className="link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="link">
                  Our mission
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <span className="copyright">
        &#169; Hiep Nguyen. All rights reserved.
      </span>

      <img className="img__one" src={img1} alt="" />
      <img className="img__two" src={img2} alt="" />
    </footer>
  );
}

export default Footer;
