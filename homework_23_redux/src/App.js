import './App.css';
import {Header} from './components/header/Header';
import Users from './forms/users/Users';
import Registration from './forms/registration/Registration';
import UserPage from './forms/user_page/UserPage';

import {Route, Switch, HashRouter, Redirect} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
        <div className="App">
            <Header/>
            <div className="app-content">
                <Switch>
                    <Route path="/home">
                        <Users/>
                    </Route>
                    <Route path="/user/:id">
                        <UserPage/>
                    </Route>
                    <Route path="/registration">
                        <Registration/>
                    </Route>
                    <Redirect from="/" to="/home"/>
                </Switch>
            </div>
        </div>
    </HashRouter>
  );
}

export default App;
