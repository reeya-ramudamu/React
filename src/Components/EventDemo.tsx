import React,{useState} from 'react';

interface IState{
    count:number
}
interface IProps{}
const EventDemo : React.FC =()=>{
    const [state, setState]= useState<IState>({count:0})

    //for increment
    const handleIncrement =(): void =>
        {
            setState({count:state.count+1});
        }
        //for decrement
    const handleDecrement =(): void =>
        {
            if(state.count>0)
            setState({count:state.count-1});
        else
            setState({count:0})
        }
    return(
        <>
        <h1>Event Handling</h1>
        <div className="container">
            <div className="display">
                <h1>{state.count}</h1>
            </div>
            <div className="button">
            <button 
            style={{backgroundColor:'green'}} 
            onClick={handleIncrement}>
            Incremment</button>
            <button 
            style={{backgroundColor:'red'}}
            onClick={handleDecrement}
            >Decrement</button>
            </div>
        </div>
        </>

    );
};
export default EventDemo;