import ReactDOM from 'react-dom/client';
import ThemeContext from 'context/ThemeContext';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
);
