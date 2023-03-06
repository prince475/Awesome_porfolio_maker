import './App.css';
import { Route, Routes } from'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


function App() {

  // const [currentForm, setCurrentForm] = useState('login');
  // const toggleForm = (forName) => {
  //   setCurrentForm(forName);
  // }

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
