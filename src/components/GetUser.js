import React,{useState,useEffect} from 'react';
import { getUser,delUserbyName,updateUserbyName } from '../apis/realmfunct';
import { Link } from 'react-router-dom';
import Table from './Table';
import DataTable from "react-data-table-component";

const GetUser = () => {

    const [users,SetUsers] = useState([]);
    const [result,SetResult] = useState([]);

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

    const columns = [
        {
          name: "name",
          selector: "name"
        },
        {
          name: "mobile",
          selector: "mobile"
        },
        {
            name: "email",
            selector: "email"
        },
        {
            name: "active",
            selector: "active"
        },
    ];

    const filterList = (event) => {
        let value = event.target.value;
        // let users = this.state.users;
        let res=[];
        res = users.filter((user)=>{
            return user.name.toLowerCase().search(value) != -1;
        });
        console.log(res)
        SetResult(res)
    }

    // console.log(result.length)

    return(
        <div>
            <h2>All Users</h2>
            <input
            placeholder="Search user.."
            onChange={filterList}></input>
            {result.length>0 ? 
                result.map((data,index) => (
                    <div key={index}>
                        <p>{index+1} &nbsp; <span>{data.name}</span></p>
                        <button onClick={() => handleDelete(data.name)}>Delete</button>
                        {/* <button onClick={() => handleUpdate(data.name)}>Update</button> */}
                        <button><Link to={`/updateuser/:${data.name}`}>Update</Link></button>
                    </div>
                )) :
                users.map((data,index) => (
                    <div key={index}>
                        <p>{index+1} &nbsp; <span>{data.name}</span></p>
                        <button onClick={() => handleDelete(data.name)}>Delete</button>
                        {/* <button onClick={() => handleUpdate(data.name)}>Update</button> */}
                        <button><Link to={`/updateuser/:${data.name}`}>Update</Link></button>
                    </div>
                ))
                // <DataTable
                // title="Users"
                // data={users}
                // columns={columns}
                // defaultSortFieldId={1}
                // pagination
                // selectableRows
                // ></DataTable>
                // <Table data={users}>
                //     <button onClick={() => handleDelete(data.name)}>Delete</button>
                //     <button><Link to={`/updateuser/:${data.name}`}>Update</Link></button>
                // </Table>
            }
        </div>
    )
}

export default GetUser;