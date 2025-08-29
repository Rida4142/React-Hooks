import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import Counter from './components/Counter';
import UseStateObject from './components/UseStateObject';
import UseStateArray from './components/UseStateArray';
import UseEffect from './components/UseEffect';
import HookMouse from './components/HookMouse';
import IntervalCounter from './components/IntervalCounter';

function App() {
  return (
    <div className="App">
      <IntervalCounter />
      {/* <HookMouse /> */}
      {/* <UseEffect /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <Counter /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
