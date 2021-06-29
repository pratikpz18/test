import React,{useState,useEffect} from 'react';
import { updateUserbyName, getUserbyName } from '../apis/realmfunct';
import { Link,useParams } from 'react-router-dom';

const UpdateUser = (props) => {

    const { name } = useParams();
    // console.log(name.slice(1));

    const [data,setData] = useState([]);
    
    let [updatename,setUpdateName]=useState('');
    let [email,setEmail]=useState('');
    let [mobile,setMobile]=useState('');
    let [active,SetActive]=useState(false);

    useEffect(() => {
        getUserbyName(name.slice(1))
        .then(user => {
            setData(user);
            setUpdateName(user.name);
            setMobile(user.mobile);
            setEmail(user.email);
        })
        
        // console.log(data.name,data.mobile,data.email)
    },[])

    const handleCheck = () => {
        SetActive(!active);
    }

    const handleUpdate = (evt) => {
        evt.preventDefault();
        console.log(data.name,data.mobile,data.email)
        // if(updatename=''){
        //     updatename = data.name
        // }
        // if(mobile=''){
        //     mobile=data.mobile
        // }
        // if(email=''){
        //     email = data.email
        // }
        console.log(data.name,updatename,mobile,email,active);
        updateUserbyName(data.name,updatename,mobile,email,active);
        props.history.push("/");
    }

    return (
        <div>
            <h2>Update User</h2>
            <div>
                <form>
                    <label>Name</label>
                    <input 
                    defaultValue={data.name || ''}
                    onChange={evt => setUpdateName(evt.target.value)}
                    ></input>
                    <br></br>
                    <label>Mobile</label>
                    <input 
                    defaultValue={data.mobile || ''}
                    onChange={evt => setMobile(evt.target.value)}
                    ></input>
                    <br></br>
                    <label>Email</label>
                    <input
                    defaultValue={data.email || ''}
                    onChange={evt => setEmail(evt.target.value)}
                    ></input>
                    <br></br>
                    <label>Active</label>
                    <input 
                    type="checkbox" 
                    onChange={handleCheck}
                    />
                    <br></br>
                    <button onClick={handleUpdate}>Update User</button>
                </form>
            </div>
            <Link to="/">All User</Link>
        </div>
    )
}

export default UpdateUser;