import React,{useState,useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Modal from 'react-bootstrap/Modal';
// import { Redirect, Route } from "react-router";
import { userData } from "../actions/userData";
import { finalData } from "../actions/finalData";
import { siteData } from "../actions/siteData";

// import '../assets/css/bootstrap.min.css';
// import '../assets/css/styleN.css';

import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  useHistory ,
  useLocation,
  useParams,
  withRouter
  }from 'react-router-dom'
{/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/> */}
const  Header =()=> {
    const [login,setLogInfo]=useState({
        name:"",
        organization:"",
        position:"",
        phone:"",
        email:"", 
        
        error_name:1,
        error_organization:1,
        error_position:1,
        error_phone:1,
        error_email:1, 
    
        err:'0',
        // authorized:
      });


       const [signIn,setSignin]=useState({
        signIn_password:"",        
        signIn_email:"",        
        error_password:1,        
        error_email:1,     
        signIn_err:'0',
        signIn_mesage:'',
        status:'fail',
        id:''
      });
      const { id } = useParams();
      const Axios = axios.create({
        baseURL: process.env.REACT_APP_ENV_URL
      });
      const style = {
        color: 'red',
        
      };
  const [showM, setShow1] = useState(false);
  const handleCloseM = () => setShow1(false);
  const handleShowM = () => setShow1(true);

  const [showR, setShowR] = useState(false);
  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);


  const [showUP, setShowUP] = useState(false);
  const handleCloseUP = () => setShowUP(false);
  const handleShowUP = () => setShowUP(true);


  const applicant_info = useSelector((state) => state.todoReducer.applicant_info);
  const dispatch=useDispatch();
  const applicant_id = useSelector((state) => state.todoReducer3.user_id);

  const applicant_id1 = useSelector((state) => state.todoReducer3.applicant_id);
     const applicant_info3 = useSelector((state) => state.todoReducer3.applicant_info);



     const siteData = useSelector((state) => state.todoReducer4);
     const lo = useLocation();

 



 
// alert(applicant_id);
 
    


        return (
        <React.Fragment>
<header class="header-view">
      <div class="bs-example">
          <div class="main-section">
          <nav class="navbar navbar-expand-md navbar-light navber-padding  nav-img-responsive">
              

             
      
              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="main-section">      
                     <div class="col-sm-12">
                        <h1 class="heading-top heading-ipad  text-center" style={{color:'#000000'}}>
                        TCS</h1>
                    </div>                    
                 </div>
                  <div class="navbar-nav list-navbar ml-auto">                     
                      <ul>
                          
                      </ul>                     
                  </div>
              </div>
         
          </nav>
      </div>
      </div>
  </header>

  

</React.Fragment>
        
        
        )
    

  
}

export default Header;