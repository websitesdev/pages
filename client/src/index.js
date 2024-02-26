import React from 'react';
import App from './App';
import './styles/index.scss';
import { HashRouter } from 'react-router-dom';
import { ReactDOM } from 'react';



/*const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App tab="root" />);*/

ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );