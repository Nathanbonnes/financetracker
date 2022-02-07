import {Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext'

function App() {

  const {authIsReady, user } = useAuthContext()
  
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            {user && <Home />}
            {!user && <Redirect to="/login" />}
          </Route>

          <Route path="/signup">
          {user && <Redirect to="/" />}
            {!user && <Signup />}
          </Route>

          <Route path="/login">
          {user && <Redirect to="/" />}
            {!user &&  <Login />}
          </Route>
        </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
