import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';

function App() {

  toast.configure();

  return (
    <div className="App">
    <Router>
      <Header />
    </Router>
    </div>
  );
}

export default App;
