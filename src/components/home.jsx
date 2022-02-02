import React,{useState,useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { siteData } from "../actions/siteData";
import Modal from 'react-bootstrap/Modal';
import { booking } from "../actions/booking";
import dateFormat from 'dateformat';
// import { Redirect, Route } from "react-router";

// import { addTodo } from "../actions/index";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  useHistory ,
  useLocation,
  withRouter
  }from 'react-router-dom'
{/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/> */}
const  Home =()=> {
  const [login,setLogInfo]=useState({
    name:"",
    empid:"",
    email:"",
    type:"",
    err:'0',
  });
  var dateFormat = require("dateformat");
  var now = new Date();
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [fac, setFac] = useState(0);
  const [loc, setLoc] = useState(0);

  const Axios = axios.create({
    baseURL: process.env.REACT_APP_ENV_URL   
  });
//   const location = useLocation();
  const [facilities, setFacilities] = useState([]);
  const [callevent, setCallevent] = useState('facility');
//   const handleHalfClose = () => setHalfShow(false);
//   const handleHalfShow = () => setHalfShow(true);
const [calendernfo, setCalender] = useState({
  data:"",
  date:"",
  currentYear:"",
  month:""

});
const [date, setDate] = useState('');
const [time, setTime] = useState('12:34pm');
let currentYear = new Date().getFullYear();
let month = new Date().getMonth() + 1;

  const dispatch=useDispatch();


//   const name = useSelector((state) => state.todoReducer.name);
//   const empid = useSelector((state) => state.todoReducer.empid);
//   const type = useSelector((state) => state.todoReducer.type);
  
  useEffect(() => {

    dispatch(siteData({page:'home'}));
     Axios.get("employee")
    .then(res =>{
      console.log("request");
      console.log(res.data.data);
      // let a= JSON.parse(res.data.data);
      // console.log(a);
      // setFacilities(a);
      setFacilities(res.data.data);
    
    });

 
   
    },[]);

  



        
        
        // if (!type) return <Redirect to="/login" />;
 
        
     



     

         

        return (
        <React.Fragment>


<div class="search-sec">

<div class="container">

  <div class="row">

    <div class="col-md-12">

<table>
{   facilities.map((post,index)=>(          
<tr>
  <td>{post.id}</td>
  <td>{post.name}</td>
  <td>{post.empno}</td>
  <td>{post.dept}</td>
  </tr>


))} 
</table>     

    </div>

  </div>

</div>

</div>
  

</React.Fragment>
        
        
        )
    

  
}

export default Home;