import {ReactComponent as GitHubSvg} from 'assets/gitSvg.svg';
import './styles.css';
function NavBar(){
    return (
        <header>
        <nav className='container'>
          <div className='dsmovie-nav-content'>
            <h1>DSMovie</h1>
            <a href="https://github.com/rhuanhianc">
            <div className='dsmovie-github'>
              <GitHubSvg/>
              <p className='dsmovie-github-link'> /rhuanhianc  </p>
            </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default NavBar;