import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './store';
import { ActionCreators } from 'redux-undo';
import {store} from "./store/store"


function App() {

  const dispatch = useDispatch();

  const {addValue, addValue2, subtractValue, subtractValue2 } = bindActionCreators(actionCreators, dispatch);
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

      <br/>
      <br/>

      <h1>{amount.value2.present}</h1>
      <button onClick={() => addValue2(1)}>Add</button>
      <button onClick={() => subtractValue2(1)}>Subtract</button>
      <br/>
      <button onClick={() => store.dispatch(ActionCreators.undo())}>back</button>
      <button onClick={() => store.dispatch(ActionCreators.redo())}>forward</button>
    </div>
  );
}

export default App;
