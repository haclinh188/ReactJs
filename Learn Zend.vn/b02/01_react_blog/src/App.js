import { useState, useEffect, useRef } from 'react';

import Title from './components/Title';
import DemoComponent from './components/DemoComponent';

import './assets/bootstrap-tcl.css';
import './assets/global.css';

function App() {
  const isRendered = useRef(false);
  const [counter, setCounter] = useState(1);
  const [isShow, setIsShow] = useState(false);

  if (!isRendered.current) {
    console.log('componentWillMount')
    isRendered.current = true;
  }

  useEffect(() => {
    console.log('componentDidUpdated');
  })

  useEffect(() => {
    console.log('run useEffect empty list deps - componentDidMount'); 
  }, [])

  useEffect(() => {
    console.log('run useEffect [isShow] deps');
  }, [isShow])

  return (
    <div className="app">
      <div className="tcl-container">
        {
          isShow && <Title />
        }
        <p>{ counter }</p>

        <button  
          className="btn"
          onClick={() => setCounter(counter + 1)} 
        >Click me!!!</button>

        <button onClick={() => setIsShow(!isShow)} >Toggle show</button>
        <hr></hr>
        <DemoComponent />
      </div>
    </div>
  );
}

export default App;
