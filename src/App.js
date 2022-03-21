import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  // const state = store.getState();
  // store.subscribe(storeUpdater)
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>redux</h1> */}
        <h1>{state.value}</h1>
        <button onClick={(event)=>{dispatch({type:"counter/increment"});}} name="inc">increment</button>
        <button onClick={(event)=>{dispatch({type:"counter/decrement"});}} name="dec">decrement</button>
      </header>
    </div>

  );
}

export default App;
