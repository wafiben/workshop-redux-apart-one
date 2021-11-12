import './App.css';
import {Home} from './Home.js';
import {useDispatch,useSelector} from 'react-redux'
import {Increment,decrement} from './actions'
function App() {
  const state=useSelector(state=>state)
  console.log(state)
  const dispatch=useDispatch();
  function handleClick(){
    console.log('clicked')
    dispatch(Increment())
  }
  
  return (
    <div className="App">
      <button onClick={handleClick}>+</button>
      <span>{state}</span>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <Home></Home>
    </div>
  );
}

export default App;
