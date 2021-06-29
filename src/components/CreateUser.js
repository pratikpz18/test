import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {createUser} from '../apis/realmfunct'

const CreateUser = (props) => {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');
    const [active,SetActive]=useState(false);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(name,email,mobile,active);
        createUser(name,email,mobile,active);
        evt.target.reset();
        props.history.push("/");
    }

    const handleCheck = () => {
        SetActive(!active);
    }

    return (
        <div>
            <h2>Create User</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input 
                    placeholder="enter your name"
                    onChange={evt => setName(evt.target.value)}
                    ></input>
                    <br></br>
                    <label>Mobile</label>
                    <input 
                    placeholder="enter your mobile number"
                    onChange={evt => setMobile(evt.target.value)}
                    ></input>
                    <br></br>
                    <label>Email</label>
                    <input 
                    placeholder="enter your email"
                    onChange={evt => setEmail(evt.target.value)}
                    ></input>
                    <br></br>
                    <label>Active</label>
                    <input 
                    type="checkbox" 
                    onChange={handleCheck}
                    />
                    <br></br>
                    <button >Create User</button>
                </form>
            </div>
            <Link to="/">Create User</Link>
        </div>
    )
}

export default CreateUser;