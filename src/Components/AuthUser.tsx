import React, {useState} from 'react'

interface  IState{
    isLogin: boolean;
}
const AuthUser: React.FC = () => {

    const[state, setState]= useState<IState>({
        isLogin: false,
    })

    //HANDLE LOGIN
    const handleLogin = (): void =>{
        setState ({
            isLogin: true
        });
    }
    //handle logout
    const handleLogout  = (): void =>{
        setState ({
            isLogin: false
        });
    }
  return (
    
    <div >
       {
        state.isLogin && state.isLogin
        ?(<h1>Welcome user</h1>)
        :(<h1>Please Login for Dashboard</h1>)

       }
        {
            state.isLogin && state.isLogin?(
                <button className="login"
                    style={{backgroundColor:'red'}}
                    onClick={handleLogout}>Logout </button>

            ):(
                <button 
                className="login"
                style={{backgroundColor:'green'}}
                onClick={handleLogin}>
                Login
                </button>
            )
        }
       
        
    </div>
  )
}

export default AuthUser
