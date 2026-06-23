import logo from './logo.svg';
import './App.css';
import {store} from "./actions/store";
import { Provider } from 'react-redux';
import Dcandidates from './components/DCandidates';
function App() {
  return (
    <Provider store={store}>
      <Dcandidates></Dcandidates>
    </Provider>
    );
}

export default App;
