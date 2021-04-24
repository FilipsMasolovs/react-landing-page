import './hamburger.css';
import './search.css';
import './header.css';

export default function Header() {
  return (
    <div className='lp-header-container'>
        <div className='lp-header-inner'>
            <h1 className='lp-header-title'>Decision</h1>
            <div className='lp-header-hamburger-menu-container'>
                <input type='checkbox' />
                <div className='lp-header-hamburger-menu-title'>MENU</div>
                <span></span>
                <span></span>
                <span></span>
                <ul className='lp-header-hamburger-menu'>
                    <a href='#'><li>Blog</li></a>
                    <a href='#'><li>Projects</li></a>
                    <a href='#'><li>Services</li></a>
                    <a href='#'><li>News</li></a>
                    <a href='#'><li>Categories</li></a>
                    <a href='#'><li>Contacts</li></a>
                </ul>
            </div>
            <div className='lp-header-menu-container'>
                <a href='#'>Blog</a>
                <a href='#'>Projects</a>
                <a href='#'>Services</a>
                <a href='#'>News</a>
                <a href='#'>Categories</a>
                <a href='#'>Contacts</a>
            </div>
            <div className='lp-header-search'>
                <input type="text" placeholder="Search..." required />
                <div className='lp-header-search-icon' />
            </div>
        </div>
    </div>
  );
}
