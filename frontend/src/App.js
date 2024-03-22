import './scss/app.scss';
import './App.css';
import Home from './components/Home/Home';
window.UIkit = window.UIkit = require('uikit/dist/js/uikit.min.js');
// import 'uikit/dist/js/uikit.min.js';

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
