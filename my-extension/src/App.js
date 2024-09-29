import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={styles.container}>
      <header style={styles.header}>
        <h1>Gaurav Chand</h1>
        <p>
          Check out my GitHub profile: 
          <a
            href="https://github.com/itsmegc"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            itsmegc
          </a>
        </p>
      </header>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    marginLeft: '5px',
  },
};

export default App;
