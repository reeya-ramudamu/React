import React, { useImperativeHandle } from 'react'
interface IPROPS{
    userid:number;
    username:string;
}
export default class Users extends React.Component<IPROPS>{
    constructor(props:IPROPS)
    {
        super(props);

    }

    render()
    {
        let {userid, username}=this.props;
        return( 
            <>
        <h1> Class component</h1>
     {/* as it is a class component */}
        <h2>UserId:{userid}</h2>
        <h2>Username:{username}</h2>
        </>
        );

    }
}