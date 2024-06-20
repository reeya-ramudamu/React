import { IUser } from '../Components/models/IUser';

export class UserService{
    
    private static users:IUser[] =[
        {sno:1, name:'Reeya', age:22},
        {sno:2, name:'Shreya', age:20},
        {sno:3, name:'Saugat', age:23},
        {sno:4, name:'Rimal', age:25}
];
        
    public static getAllUsers(){
        return this.users
    }
}