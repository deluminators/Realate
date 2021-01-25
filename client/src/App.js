import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';

function App() {

  toast.configure();

  return (
    <div className="App">
    <Router>
      <Layout >
        <Header />
        {
          <Home />
        }
      </Layout>
    </Router>
    </div>
  );
}

export default App;
