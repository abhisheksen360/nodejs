import React, { Component } from "react";
import {useSelector, useDispatch} from "react-redux";
import logo from './logo.svg';
import './App.css';
// import Login from './components/login';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';


// import AdminViewdetails from './component/admin/Viewdetails';
// import AdminRequestordetails from './component/admin/Requestordetails';
// import AdminCreateestimate from './component/admin/Createestimate';
// import AdminError from './component/admin/Error'
// import AdminHeader from './component/admin/Header'

import NotFound from './components/notFound';

// import AddUser from './components/admin/addUser';
// import ManageUser from './components/admin/manageUser';
// import AddLeave from './components/admin/addLeave';
// import LeaveStatus from './components/admin/leaveStatus';
// import Dashboard from './components/admin/dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {

  const dispatch=useDispatch();
//  const name = useSelector((state) => state.todoReducer.name);
//  const empid = useSelector((state) => state.todoReducer.empid);
//  const email = useSelector((state) => state.todoReducer.email);
//  const type = useSelector((state) => state.todoReducer.type);  

  return (
    <div className="App">
       {/* <Router basename={'/frms'}> */}
       <Router basename={'/'}>
       <Switch>
                   
                    <Route exact path="/">test<Header/><Home/><Footer/></Route>
                    {/* <Route exact path="/" component={Home}></Route> 
                    <Route path="/Viewenquiries" component={Viewenquiries}></Route>
                    <Route path="/Applicationstatus" component={Applicationstatus}></Route>
                    <Route path="/Viewdetails" component={Viewdetails}></Route>
                    <Route path="/Requestordetails" component={Requestordetails}></Route>
                    <Route path="/Createestimate" component={Createestimate}></Route>
                    <Route component={Error} />*/}










                    <Route> <Header/><NotFound/><Footer/> </Route>
        </Switch>
            </Router>
    </div>
  );
}

export default App;
