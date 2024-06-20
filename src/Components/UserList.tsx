import React, {useState} from 'react'
import { IUser } from './models/IUser'
import { UserService } from '../services/UserService'
interface IState{
    users:IUser[]
}


const UserList : React.FC = () =>{
    const [state, setState] = useState<IState>({
        users:UserService.getAllUsers(),
        //fetching data using services 
    })
    return (
        <>
        <div>
            <h1>Looping / Iteration</h1>
        </div>
        <table>
            <thead>
                <tr>
                <th>sno</th>
                <th>Name</th>
                <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {state.users.length >0 &&  state.users.map(user =>(
                    <tr key={user.sno}>
                        <td>{user.sno}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        </>
    )

}
export default UserList