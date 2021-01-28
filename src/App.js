import React from 'react';
import Counter from './components/Counter';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <h1>React FizzBuzz</h1>
      <Counter />
      <p>Increase the counter to see Fizz Buzz</p>

      <p>
        Made using{' '}
        <a href="https://parceljs.org/getting_started.html">Parcel</a>
      </p>
    </div>
  );
}

export default App;
