import { useState } from 'react';

import logo from '@public/images/logo.svg';

import '@public/styles/App.css';
import { Header, Footer, Section } from '@/components/sample/elements';
// sample
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header siteTitle={'site title'} />
      <Section sectionTitle={'Section Title'} to={'/'} linkText={'more'}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <button
              type="button"
              data-testid={'count-button'}
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
