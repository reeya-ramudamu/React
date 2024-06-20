import React from 'react';
import './App.css';
//import AuthUser from './Components/AuthUser';
//import UserList from './Components/UserList';
//import { UserService } from './services/UserService';
// import Test from './Components/test'
// import User from './Components/User'
// import FuncComp from './Components/FuncComp';
// import EventDemo from './Components/EventDemo';
// import FuncCompWithParams from './Components/FunccompWithParams';
// import Login from './Components/Login';
import Users from './Components/Users'
function App() {
  // for using internal css
  // let bg ={
  //   backgroundColor:'blue',
  //   color:'white'
  // }
  return (


    //====================================================
    // <div className="App">
    //   {/* using inline css */}
    //     <h1 style={{color:'red'}}>React TypeScript</h1>
    //     {/* internal css */}
    //     <h1 style={bg}>using internal css</h1>
    //     <h2 >using external  css</h2>
    //     <Test name="reeya" title="Student" age={21}/>
    // </div>
    //====================================================

// //using class component
//=======================================================
// <div className="container">
//   <div >
//     <div >
//       <User userid={1} username="Saugat"/>
//     </div>
//   </div>
// </div>
//========================================================


//functional component state management 
//=======================================================
// <div><FuncComp name="reeya" age={21}/></div> 
//========================================================


//Event handling demo
//==========================================================
 //<EventDemo /> 
//===========================================================



//functional component with parameters (FuncCompWithParams)
//=========================================================
//<FuncCompWithParams />
//========================================================
 
// //handling form with react
// //=======================================================
// <div >
//   <Login />
// </div>
//===============================================================

//conditional rendering
//================================================================
//<AuthUser />
//===============================================================

//looping or iteration
//===============================================================
//<UserList />

//use of services
//================================================================

<div>
<Users />
</div>
)

}

export default App;
