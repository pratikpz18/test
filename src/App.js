import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import {getUser,getUserbyName,delUserbyName,updateUserbyName} from './apis/realmfunct';
import CreateUser from './components/CreateUser';
import GetUser  from './components/GetUser';
import './App.css';

function App() {
  // getUser();
  // getUserbyName('pratik');
  // delUserbyName('hello');
  // updateUserbyName('sz');
  return (
    <Router>
      <div className="App">
        <Switch>
              <Route path="/" component = {GetUser} exact />
              <Route exact path="/createuser" component={CreateUser} exact/>
              {/* <Route exact path="/register" component={Registration} exact/>
              <Route exact path="/login" component={Login} exact/>
              <Route exact path="/dashboard" component={Dashboard} exact/>
              <Route exact path="/dashboard/profile/:userid" render={(props) => <Profile {...props} />} exact/>
              <Route exact path="/dashboard/Messages" component={Messages} exact/>
              <Route exact path="/dashboard/editprofile/:userid" render={(props) => <EditProfile {...props} />}  exact/> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
