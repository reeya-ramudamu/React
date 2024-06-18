import React from 'react'
interface IProps{
    name:string;
    title:string;
    age?:number;
}
const test:React.FC<IProps> = ({name,title,age }) => {
  return (
    <div>
      <h1>Test component</h1>
      <h2>Name:{name}</h2>
      <h2>Title:{title}</h2>
      {age}
    </div>
  )
}

export default test
