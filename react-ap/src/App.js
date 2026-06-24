import logo from './logo.svg';
import './App.css';
import {store} from "./actions/store";
import { Provider } from 'react-redux';
import Dcandidates from './components/DCandidates';
import {Container} from "@mui/material";
function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
         <Dcandidates></Dcandidates>
      </Container>
     
    </Provider>
    );
}

export default App;
