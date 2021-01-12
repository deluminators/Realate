import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';

function App() {

  toast.configure();

  return (
    <div className="App">
    <Router>
      <Header />
      <SignIn />
      <SignUp />
    </Router>
    </div>
  );
}

export default App;
