import './App.css';
import * as actionCreators from './actions/actions'
import { useSelector,useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
function App() {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch()
  const {incrementAction,decrementAction,resetAction}= bindActionCreators(actionCreators,dispatch)
  return (
    <div className="counter-application">
      <h1 className="counter-head text-center">Counter</h1>
        <p id="counterValue" className="counter-value text-center">{state}</p>
        <div className="d-flex flex-row justify-content-center">
            <div className="custom-buttons-container">
                <button onClick={()=>incrementAction()} className="custom-button">INCREASE</button>
                <button onClick={()=>resetAction()} className="custom-button">RESET</button>
                <button onClick={()=>decrementAction()} className="custom-button">DECREASE</button>
            </div>
        </div>
    </div>
  );
}

export default App;
