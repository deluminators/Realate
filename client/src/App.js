import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import SignIn from './components/Auth/SignIn/SignIn';
import SignUp from './components/Auth/SignUp/SignUp';

function App() {

  toast.configure();

  return (
    <div className="App">
    <Router>
      <Layout >
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/sign-in' exact>
            <Auth>
              <SignIn />
            </Auth>
          </Route>

          <Route path='/sign-up' exact>
            <Auth>
              <SignUp />
            </Auth>
          </Route>
        </Switch>
      </Layout>
    </Router>
    </div>
  );
}

export default App;
