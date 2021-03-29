import logo from './logo.svg';
import './App.css';

import Lottie from 'react-lottie'
import animationData from './50807-pacman-loading.json';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Lottie options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
}

export default App;
