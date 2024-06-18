import React,{useState} from 'react'

interface IState{
    message : string
}

const FuncCompWithParams:React.FC =()=>{
    const [state, setState] = useState<IState> ({message:'Jay Sambhoo'});
    const handleGreet = (greet :string) :void =>  {
        setState({message:greet})

    }

    return (
        <>
        <div className="container">
            <div className="message">
            <h1>{state.message}</h1>
            </div>
           
            <div className="buttons">
                <button 
                    className="react"
                    style={{backgroundColor:'red'}}
                    //for passing the argument on the function use arrow function
                    onClick={() => handleGreet ('like')}>
                React</button>
                <button 
                    className="comment"
                    style={{backgroundColor:'green'}}
                    onClick={() => handleGreet('comment')}>
                Comment</button>
                <button 
                    className="share"
                    style={{backgroundColor:'blue'}}
                    onClick={() => handleGreet('share')}>
                Share</button>
            </div>
        </div>
        
        </>

    );
}
export default FuncCompWithParams