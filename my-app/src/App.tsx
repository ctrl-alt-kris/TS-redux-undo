import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './store';
import { ActionCreators } from 'redux-undo';


function App() {

  const dispatch = useDispatch();

  const {addValue, subtractValue } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state)
  console.log(amount)
  return (
    <div className="App">
      <h1>{amount.value.present}</h1>
      <button onClick={() => addValue(1)}>Add</button>
      <button onClick={() => subtractValue(1)}>Subtract</button>
      <br/>
      <button onClick={() => store.dispatch(ActionCreators.undo())}>back</button>
      <button onClick={() => store.dispatch(ActionCreators.redo())}>forward</button>
    </div>
  );
}

export default App;
