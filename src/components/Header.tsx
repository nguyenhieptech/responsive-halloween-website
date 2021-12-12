import logo from '../img/logo.png';
import navImg from '../img/nav-img.png';
import { useToggle } from '../hooks/useToggle';
import { useNavBar } from '../hooks/useNavBar';
import { useScrollY } from '../hooks/useScrollY';

function Header() {
  const [isMenuShowed, toggleMenu] = useToggle(false);
  const { navBarData, handleClickOnNavLink } = useNavBar(toggleMenu);
  const windowScrollY = useScrollY();

  return (
    <header
      className={windowScrollY >= 50 ? 'header scroll__header' : 'header'}
    >
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <img src={logo} alt="" />
          Halloween
        </a>

        <div className={isMenuShowed ? 'nav__menu show__menu' : 'nav__menu'}>
          <ul className="nav__list">
            {navBarData.map((navBarItem) => {
              return (
                <li key={navBarItem.index} className="nav__item">
                  <a
                    className={
                      navBarItem.isActive
                        ? 'nav__link active__link'
                        : 'nav__link'
                    }
                    href={navBarItem.path}
                    onClick={() => handleClickOnNavLink(navBarItem)}
                  >
                    {navBarItem.title}
                  </a>
                </li>
              );
            })}

            <a className="button button--ghost" href="#support">
              Support
            </a>
          </ul>

          <div className="nav__close">
            <i className="bx bx-x" onClick={toggleMenu}></i>
          </div>

          <img src={navImg} alt="" className="nav__img"></img>
        </div>

        <div className="nav__toggle">
          <i className="bx bx-grid-alt" onClick={toggleMenu}></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
