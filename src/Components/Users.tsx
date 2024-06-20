import React , { useState, useEffect}from 'react'
import { IUsers } from './models/IUsers'
import { UsersServices } from '../services/UsersServices'

interface IState{

    loading:boolean,
    users:IUsers[],
    errorMessage:string
   

}
const Users:React.FC = () => {
    const [state, setState] = useState<IState>({

        loading:false,
        users:[] as IUsers[],
        errorMessage:''

        })

    //network request
        useEffect(() => {
            setState({...state, loading:true})
            UsersServices.getAllUsers()

            .then((response )=> setState({
                ...state, loading:false, users:response.data
            }))

            .catch(error => setState({
                ...state, loading :false, errorMessage:error.message
            }));
            //eslint-disable-next-line
        },[]);

        const {loading , users, errorMessage}=state
    return(
        <>
            <div className="API">
                <h1>Data From APIS</h1>
                {errorMessage && (<p>{errorMessage}</p>)}
                {loading && <h1>Loading...</h1>}
                <table>
                    <thead>
                        <tr>
                        <td>Id </td>
                        <td>Name</td>
                        <td>Username</td>
                        <td>Email</td>
                        <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                       { users.length >0 && 
                       users.map((user)=>
                        (
                       <tr key ={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street},
                                {user.address.city} ,
                                {user.address.zipcode}  

                            </td>
                       </tr>
                     ))}
                    </tbody>
                </table>
            </div>
        </>

    )
}
export default Users