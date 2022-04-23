import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import './App.sass';
import Login from './components/login/login';
import "./components/assets/variables/color.sass"
import Externalaccount from "./components/login/externalAccount/externalaccount";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/login/credentials" element={<Externalaccount />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
