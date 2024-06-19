import React, {useState} from 'react'
import './LoginForm.css'; 

interface IState{
    user:{
        email:string;
        password:string;

    }
}
const Login:React.FC = () => {
    
    const [state, setState] = useState<IState> ({
        user:{
            email:'',
            password:''
        }  
    });
//handle change function
const handlechange =(event:React.ChangeEvent<HTMLInputElement>):void=>
    {
        setState({
            user:{
                ...state.user,
               [event.target.name]: event.target.value,
            }
        })
    }

    //form handling
    const handleSubmit =(event:React.FormEvent):void =>{
        event.preventDefault();
        console.log(state.user);
        alert("login successful");
    }

  return (
    <>  
    <div>
    <h1>Login Form Example</h1>  
    </div>
    
   <form className="login-form" onSubmit={handleSubmit}>
    
        <div>
            <label htmlFor="email">Email address</label>
            <input
             type="email" 
             name="email"
             onChange={handlechange}
             id="email"
            value={state.user.email} 
            required />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input
             type="password" 
             name="password"
             onChange={handlechange}
             id="password"
             value={state.user.password} required />
        </div>
        <div>

            <button type="submit">Login</button>
        </div>
    </form>
    <div >
        <p>{JSON.stringify(state.user)}</p>
    </div>
        
    </>
  )
}

export default Login
