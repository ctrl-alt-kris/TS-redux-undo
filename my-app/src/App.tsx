import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './store';


function App() {

  const dispatch = useDispatch();

  const {addValue, subtractValue } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.value)

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => addValue(1)}>Add</button>
      <button onClick={() => subtractValue(1)}>Subtract</button>
    </div>
  );
}

export default App;
