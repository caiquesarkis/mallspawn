import { Link } from 'react-router-dom'
import {
  Routes,
  Route,
} from "react-router-dom"
import Navbar from './components/navbar';
import Main from './routes';
import SignIn from './routes/signin';
import SignUp from './routes/signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
