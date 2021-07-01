import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import {getUser,getUserbyName,delUserbyName,updateUserbyName} from './apis/realmfunct';
import CreateUser from './components/CreateUser';
import GetUser  from './components/GetUser';
import UpdateUser from './components/UpdateUser';
import UploadFile from './components/UploadFile';
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
              <Route exact path="/updateuser/:name" render={(props) => <UpdateUser {...props} />}  exact/>
              <Route exact path="/uploadfile" component={UploadFile} exact/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
