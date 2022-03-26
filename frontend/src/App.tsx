import React from 'react';
import {ReactComponent as GitHubSvg} from './assets/gitSvg.svg';
function App() {
  return (
    <header>
      <nav>
        <div>
          <h1>DSMovie</h1>
          <a href="https://github.com/rhuanhianc">
          <div>
            <GitHubSvg/>
            <p> /rhuanhianc  </p>
          </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default App;
