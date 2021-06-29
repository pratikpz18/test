import React,{useState,useEffect} from 'react';
import { getUser,delUserbyName,updateUserbyName } from '../apis/realmfunct';
import { Link } from 'react-router-dom';

const GetUser = () => {

    const [users,SetUsers] = useState([]);

    const getallusers = async () => {
        try {
            const arr = await getUser();
            // console.log(arr);
            SetUsers(arr);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getallusers();
    },[])

    const handleDelete = (name)=>{
        // console.log(name);
        delUserbyName(name);
        window.location.reload();
    }

    const handleUpdate = (name)=>{
        // console.log(name);
        updateUserbyName(name);
    }

    return(
        <div>
            <h2>All Users</h2>
            {users.map((data,index) => (
                <div key={index}>
                    <p>{index+1} &nbsp; <span>{data.name}</span></p>
                    <button onClick={() => handleDelete(data.name)}>Delete</button>
                    <button onClick={() => handleUpdate(data.name)}>Update</button>
                </div>
            ))
            }
            <Link to="/createuser">Create User</Link>
        </div>
    )
}

export default GetUser;