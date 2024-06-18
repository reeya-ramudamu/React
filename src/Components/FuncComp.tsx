import React,{useState} from 'react'

interface IState{
    name:string;
    title:string;
}
interface IProps {
    name:string;
    age:number;
}

const FuncComp:React.FC<IProps> = ({name,age}) => {
    const [state, setState]=useState<IState>({name:'Reeya',title:'student'})
  return (
    <>
    <h1 className='header'>
        Functional Component
    </h1>
    <div className="container1">
        <h3>
            name: <b>{name}</b><br/>
            Age: <b>{name}</b><br/>
        </h3>
    </div>
    <div className="container2">
        <h3>Values From State</h3>
        <h3>
            Name: {state.name}<br/>
            Title: {state.title}<br/>
        </h3>
    </div>
    </>
  )
}

export default FuncComp
